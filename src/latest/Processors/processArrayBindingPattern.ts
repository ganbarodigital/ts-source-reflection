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

import { DEFAULT_DATA_PATH, getClassNames, Maybe, UnsupportedTypeError } from "@safelytyped/core-types";
import { ArrayBindingElement, ArrayBindingPattern, isBindingElement, NodeArray, SyntaxKind, TypeNode } from "typescript";
import { IntermediateArrayBindingElement, IntermediateArrayBindingParameter, IntermediateKind } from "../IntermediateTypes";
import { processExpression } from "./processExpression";
import { processMaybe } from "./processMaybe";
import { processTypeNode } from "./processTypeNode";

export function processArrayBindingPattern(
    {
        param,
        paramType
    }: {
        param: ArrayBindingPattern,
        paramType: Maybe<TypeNode>
    }
): IntermediateArrayBindingParameter
{
    return {
        kind: IntermediateKind.IntermediateArrayBindingParameter,
        parameters: processBindingElements(param.elements),
        typeRef: processMaybe(paramType, processTypeNode),
    }
}

function processBindingElements(
    input: NodeArray<ArrayBindingElement>
): IntermediateArrayBindingElement[]
{
    // our return value
    const retval: IntermediateArrayBindingElement[] = [];

    input.forEach((bindingElement) => {
        retval.push(processBindingElement(bindingElement));
    });

    // all done
    return retval;
}

function processBindingElement(
    input: ArrayBindingElement
): IntermediateArrayBindingElement
{
    if (isBindingElement(input)) {
        return <IntermediateArrayBindingElement>{
            kind: IntermediateKind.IntermediateArrayBindingElement,
            name: input.name.getText(),
            initializer: processMaybe(
                input.initializer,
                processExpression
            ),
        }
    }

    // if we get here, then we have an ArrayBindingElement that we
    // do not know how to process
    // tslint:disable-next-line: no-console
    console.log("Unsupported ArrayBindingElement:", getClassNames(input), SyntaxKind[input.kind]);
    throw new UnsupportedTypeError({
        public: {
            dataPath: DEFAULT_DATA_PATH,
            expected: "a supported sub-type of ArrayBindingElement",
            actual: getClassNames(input)[0],
        }
    })
}