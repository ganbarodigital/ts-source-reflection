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

import { Maybe } from "@safelytyped/core-types";
import {
    BindingElement, NodeArray,
    ObjectBindingPattern, TypeNode
} from "typescript";
import { AST } from "../AST";
import {
    AnyIntermediateDestructuredIdentifierSignature,
    IntermediateDestructuredIdentifierSignature,
    IntermediateDestructuredParameterSignature,
    IntermediateKind
} from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { ProcessingContext } from "./ProcessingContext";
import { processMaybe } from "./processMaybe";
import { processTypeNode } from "./processTypeNode";

export function processObjectBindingPatternForSignatures(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    {
        param,
        paramType,
    }: {
        param: ObjectBindingPattern,
        paramType: Maybe<TypeNode>,
    }
): IntermediateDestructuredParameterSignature
{
    const typeRef = processMaybe(
        paramType,
        (value) => processTypeNode(processCtx, parentCtx, value),
    )

    // all done
    return {
        kind: IntermediateKind.IntermediateDestructuredParameterSignature,
        parameters: processBindingElements(processCtx, param.elements),
        typeRef,
    };
}

function processBindingElements(
    processCtx: ProcessingContext,
    input: NodeArray<BindingElement>
): AnyIntermediateDestructuredIdentifierSignature[]
{
    // our return value
    const retval: ReturnType<typeof processBindingElements> = [];

    input.forEach((bindingElement) => {
        retval.push(processBindingElement(bindingElement));
    });

    // all done
    return retval;
}

function processBindingElement(
    input: BindingElement
): AnyIntermediateDestructuredIdentifierSignature
{
    // do we have a receiver alias set?
    //
    // this is where:
    //
    // - the caller sets the property using `paramName`,
    // - but the receiving function accesses the value using the
    //   `receiverAlias`

    if (input.propertyName) {
        return <IntermediateDestructuredIdentifierSignature>{
            kind: IntermediateKind.IntermediateDestructuredIdentifierSignature,
            name: input.propertyName.getText(),
            from: input.name.getText(),
        }
    }

    // is this a rest parameter?
    //
    // note that REST parameters cannot have receiver aliases
    if (AST.hasDotDotDotToken(input.dotDotDotToken)) {
        return {
            kind: IntermediateKind.IntermediateDestructuredRestIdentifierSignature,
            name: input.name.getText(),
        }
    }

    return <IntermediateDestructuredIdentifierSignature>{
        kind: IntermediateKind.IntermediateDestructuredIdentifierSignature,
        name: input.name.getText(),
        from: undefined,
    }
}