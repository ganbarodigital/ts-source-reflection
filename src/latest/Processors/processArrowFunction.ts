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

import { ArrowFunction } from "typescript";
import { AST } from "../AST";
import {
    IntermediateArrowFunction,
    IntermediateCallableParameterDeclaration,
    IntermediateKind
} from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { ProcessingContext } from "./ProcessingContext";
import { processParameterDeclaration } from "./processParameterDeclaration";
import { processReturnTypeFromNode } from "./processReturnTypeFromNode";
import { processTypeParametersFromNode } from "./processTypeParametersFromNode";

export function processArrowFunction(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: ArrowFunction
): IntermediateArrowFunction
{
    // do we have any parameters?
    const parameters: IntermediateCallableParameterDeclaration[] = [];
    for (const param of input.parameters) {
        parameters.push(processParameterDeclaration(processCtx, parentCtx, param));
    }

    const returnType = processReturnTypeFromNode(processCtx, parentCtx, input);
    if (returnType) {
        return {
            kind: IntermediateKind.IntermediateArrowFunction,
            typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
            parameters,
            returnType,
            hasBody: AST.hasBody(input.body),
        }
    }

    const inferredReturnType = processCtx.compiler.getInferredReturnType(processCtx, parentCtx, input);
    if (!inferredReturnType) {
        return {
            kind: IntermediateKind.IntermediateArrowFunction,
            typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
            parameters,
            returnType,
            hasBody: AST.hasBody(input.body),
        }
    }

    return {
        kind: IntermediateKind.IntermediateArrowFunction,
        typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
        parameters,
        returnType,
        inferredReturnType,
        hasBody: AST.hasBody(input.body),
    }
}