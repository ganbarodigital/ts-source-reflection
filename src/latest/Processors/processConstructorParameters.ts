//
// Copyright (c) 2021-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//

import { DEFAULT_DATA_PATH, UnsupportedTypeError } from "@safelytyped/core-types";
import { NodeArray, ParameterDeclaration } from "typescript";
import { AST } from "../AST";
import {
    IntermediateCallableParameterDeclaration,
    IntermediateConstructorParameterDeclaration,
    IntermediateKind,
    IntermediateRestrictableScope,
    IntermediateTypedConstructorParameterDeclaration,
    IntermediateUntypedConstructorParameterDeclaration
} from "../IntermediateTypes";
import { processParameterDeclaration } from "./processParameterDeclaration";

export function processConstructorParameters(
    input: NodeArray<ParameterDeclaration>
): IntermediateConstructorParameterDeclaration[] {
    // our return value
    const retval: IntermediateConstructorParameterDeclaration[] = [];

    // constructor parameters have unique behaviour,
    // which is why we're handling them separately
    // to regular function parameters

    input.forEach((paramDec) => {
        retval.push(processConstructorParameter(paramDec));
    });

    // all done
    return retval;
}

function processConstructorParameter(
    input: ParameterDeclaration
): IntermediateConstructorParameterDeclaration {
    // we can reuse the existing support for all parameters
    // to save us repeating ourselves here
    const retval = mapFunctionParameterToConstructorParameter(
        processParameterDeclaration(input)
    );

    // special case - object binding parameters cannot contain
    // parameter property definitions
    //
    // if this changes in a future release of Typescript, we're going
    // to have some fun crowbaring that support in!
    if (retval.kind === IntermediateKind.IntermediateObjectBindingParameter) {
        return retval;
    }
    // same goes for ArrayBindingParameters
    if (retval.kind === IntermediateKind.IntermediateArrayBindingParameter) {
        return retval;
    }

    // are we looking at a property definition, hidden away
    // as a parameter to the constructor?
    if (AST.hasPublicModifier(input.modifiers)) {
        retval.setsPropertyWithScope = IntermediateRestrictableScope.PUBLIC;
    }
    else if (AST.hasProtectedModifier(input.modifiers)) {
        retval.setsPropertyWithScope = IntermediateRestrictableScope.PROTECTED;
    }
    else if (AST.hasPrivateModifier(input.modifiers)) {
        retval.setsPropertyWithScope = IntermediateRestrictableScope.PRIVATE;
    }

    // unlike normal parameters, the 'readonly' flag actually *is* in the
    // modifiers list for constructor parameters
    //
    // this means that untyped parameter properties can be 'readonly'
    // (untyped callable parameters cannot be 'readonly')
    if (AST.hasReadonlyModifier(input.modifiers)) {
        retval.isReadonly = true;
    }

    // all done
    return retval;
}

function mapFunctionParameterToConstructorParameter(
    input: IntermediateCallableParameterDeclaration
): IntermediateConstructorParameterDeclaration {
    switch(input.kind) {
        case IntermediateKind.IntermediateArrayBindingParameter:
            return input;
        case IntermediateKind.IntermediateObjectBindingParameter:
            return input;

        case IntermediateKind.IntermediateUntypedCallableParameterDeclaration:
            return <IntermediateUntypedConstructorParameterDeclaration> {
                ...input,
                kind: IntermediateKind.IntermediateUntypedConstructorParameterDeclaration,
                setsPropertyWithScope: undefined,
                // untyped callable parameters don't have this,
                // so let's set an explicit default value
                isReadonly: false,
            }

        case IntermediateKind.IntermediateTypedCallableParameterDeclaration:
            return <IntermediateTypedConstructorParameterDeclaration>{
                ...input,
                kind: IntermediateKind.IntermediateTypedConstructorParameterDeclaration,
                setsPropertyWithScope: undefined,
                // ignore what was there for normal parameters,
                // because this needs to be handled differently
                // for the constructor
                isReadonly: false,
            }

        case IntermediateKind.IntermediateAnonymousCallableParameter:
            // this cannot happen in reality
            throw new UnsupportedTypeError({
                public: {
                    dataPath: DEFAULT_DATA_PATH,
                    expected: "a supported IntermediateConstructorParameterDeclaration",
                    actual: "an IntermediateAnonymousCallableParameter",
                }
            })

        case IntermediateKind.IntermediateRestCallableParameterDeclaration:
            // @TODO add support
            throw new UnsupportedTypeError({
                public: {
                    dataPath: DEFAULT_DATA_PATH,
                    expected: "a supported IntermediateConstructorParameterDeclaration",
                    actual: "an IntermediateRestCallableParameterDeclaration",
                }
            })

        default:
            // by design, this code is unreachable, and therefore
            // impossible to include in code coverage
            const _exhaustiveCheck: never = input;
            return _exhaustiveCheck;
    }
}