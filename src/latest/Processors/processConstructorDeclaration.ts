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

import { ConstructorDeclaration, ConstructorTypeNode, NodeArray, ParameterDeclaration } from "typescript";
import { AST } from "../AST";
import {
    IntermediateConstructorDefinition,
    IntermediateConstructorParameterDefinition,
    IntermediateKind,
    IntermediateObjectBindingParameter,
    IntermediateRestrictableScope,
    IntermediateTypedCallableParameterDefinition,
    IntermediateTypedConstructorParameterDefinition,
    IntermediateUntypedCallableParameterDefinition,
    IntermediateUntypedConstructorParameterDefinition
} from "../IntermediateTypes";
import { processParameterDeclaration } from "./processParameterDeclaration";
import { processReturnTypeFromNode } from "./processReturnTypeFromNode";

export function processConstructorDeclaration(
    input: ConstructorDeclaration | ConstructorTypeNode
): IntermediateConstructorDefinition {
    return {
        kind: IntermediateKind.IntermediateConstructorDefinition,
        parameters: processConstructorParameters(input.parameters),
        returnType: processReturnTypeFromNode(input),
    }
}

function processConstructorParameters(
    input: NodeArray<ParameterDeclaration>
): IntermediateConstructorParameterDefinition[] {
    // our return value
    const retval: IntermediateConstructorParameterDefinition[] = [];

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
): IntermediateConstructorParameterDefinition {
    // we can reuse the existing support for all parameters
    // to save us repeating ourselves here
    const retval = mapFunctionParameterToConstructorParameter(
        processParameterDeclaration(input)
    );

    // special case - object binding parameters cannot contain
    // hidden parameter definitions
    if (retval.kind === IntermediateKind.IntermediateObjectBindingParameter) {
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

    // all done
    return retval;

}

function mapFunctionParameterToConstructorParameter(
    input: IntermediateTypedCallableParameterDefinition
        | IntermediateUntypedCallableParameterDefinition
        | IntermediateObjectBindingParameter
): IntermediateConstructorParameterDefinition {
    switch(input.kind) {
        case IntermediateKind.IntermediateObjectBindingParameter:
            return input;

        case IntermediateKind.IntermediateUntypedCallableParameterDefinition:
            return <IntermediateUntypedConstructorParameterDefinition> {
                kind: IntermediateKind.IntermediateUntypedConstructorParameterDefinition,
                paramName: input.paramName,
                optional: input.optional,
                setsPropertyWithScope: undefined,
                initializer: input.initializer,
            }

        case IntermediateKind.IntermediateTypedCallableParameterDefinition:
            return <IntermediateTypedConstructorParameterDefinition>{
                kind: IntermediateKind.IntermediateTypedConstructorParameterDefinition,
                paramName: input.paramName,
                readonly: input.readonly,
                optional: input.optional,
                setsPropertyWithScope: undefined,
                typeRef: input.typeRef,
                initializer: input.initializer,
            }

        default:
            // by design, this code is unreachable, and therefore
            // impossible to include in code coverage
            const _exhaustiveCheck: never = input;
            return _exhaustiveCheck;
    }
}