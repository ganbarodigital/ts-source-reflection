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
    BindingElement,
    NodeArray,
    ObjectBindingPattern,
    TypeNode
} from "typescript";
import {
    IntermediateExpression,
    IntermediateKind,
    IntermediateObjectBindingElement,
    IntermediateObjectBindingParameter,
    IntermediateTypeReference
} from "../IntermediateTypes";
import { processInitializer } from "./processInitializer";
import { processTypeNode } from "./processTypeNode";

export function processObjectBindingPattern({
    param,
    paramType,
}: {
    param: ObjectBindingPattern,
    paramType: Maybe<TypeNode>,
}
): IntermediateObjectBindingParameter
{
    let typeRef: Maybe<IntermediateTypeReference>;
    if (paramType) {
        typeRef = processTypeNode(paramType);
    }

    // all done
    return {
        kind: IntermediateKind.IntermediateObjectBindingParameter,
        parameters: processBindingElements(param.elements),
        typeRef,
    };
}

function processBindingElements(
    input: NodeArray<BindingElement>
): IntermediateObjectBindingElement[]
{
    // our return value
    const retval: IntermediateObjectBindingElement[] = [];

    input.forEach((bindingElement) => {
        retval.push(processBindingElement(bindingElement));
    });

    // all done
    return retval;
}

function processBindingElement(
    input: BindingElement
): IntermediateObjectBindingElement
{
    // do we have a default value for the parameter?
    let initializer: Maybe<IntermediateExpression>;
    if (input.initializer) {
        initializer = processInitializer(input.initializer);
    }

    return <IntermediateObjectBindingElement>{
        kind: IntermediateKind.IntermediateObjectBindingElement,
        paramName: input.name.getText(),
        initializer,
        receiverAlias: undefined,
    }
}