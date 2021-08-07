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
import { BindingElement, NodeArray, ObjectBindingPattern } from "typescript";
import { IntermediateCallableParameter, IntermediateExpression, IntermediateKind, IntermediateUntypedCallableParameter } from "../IntermediateTypes";
import { IntermediateObjectBindingParameter } from "../IntermediateTypes/IntermediateObjectBindingParameter";
import { processInitializer } from "./processInitializer";

export function processObjectBindingPattern(
    input: ObjectBindingPattern
): IntermediateObjectBindingParameter
{
    // all done
    return {
        kind: IntermediateKind.IntermediateObjectBindingParameter,
        parameters: processBindingElements(input.elements),
    };
}

function processBindingElements(
    input: NodeArray<BindingElement>
): IntermediateCallableParameter[]
{
    // our return value
    const retval: IntermediateCallableParameter[] = [];

    input.forEach((bindingElement) => {
        retval.push(processBindingElement(bindingElement));
    });

    // all done
    return retval;
}

function processBindingElement(
    input: BindingElement
): IntermediateCallableParameter
{
    // do we have a default value for the parameter?
    let initializer: Maybe<IntermediateExpression>;
    if (input.initializer) {
        initializer = processInitializer(input.initializer);
    }

    return <IntermediateUntypedCallableParameter>{
        kind: IntermediateKind.IntermediateUntypedCallableParameter,
        paramName: input.name!.getText(),
        initializer,
        optional: false,
    }
}