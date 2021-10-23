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

import { GetAccessorDeclaration } from "typescript";
import { AST } from "../AST";
import { IntermediateGetter, IntermediateKind } from "../IntermediateTypes";
import { processDecorators } from "./processDecorators";
import { processDocBlock } from "./processDocBlock";
import { ProcessingContext } from "./ProcessingContext";
import { processReturnTypeFromNode } from "./processReturnTypeFromNode";
import { processTypeParametersFromNode } from "./processTypeParametersFromNode";

export function processGetAccessorDeclaration(
    processCtx: ProcessingContext,
    input: GetAccessorDeclaration
): IntermediateGetter
{
    // what we return depends on whether or not we have an explicit
    // type signature
    const returnType = processReturnTypeFromNode(processCtx, input);

    if (!returnType) {
        // fallback: can the compiler work out what type we return, instead?
        const inferredReturnType = AST.getInferredReturnType(processCtx, input);

        if (inferredReturnType) {
            // yes it can!
            return {
                kind: IntermediateKind.IntermediateGetter,
                docBlock: processDocBlock(processCtx, input),
                decorators: processDecorators(processCtx, input),
                accessModifier: AST.getRestrictableScope(input),
                name: input.name.getText(),
                typeParameters: processTypeParametersFromNode(processCtx, input),
                returnType,
                inferredReturnType,
            }
        }

        // no, it can't, so we leave the inferredReturnType out entirely
        return {
            kind: IntermediateKind.IntermediateGetter,
            docBlock: processDocBlock(processCtx, input),
            decorators: processDecorators(processCtx, input),
            accessModifier: AST.getRestrictableScope(input),
            name: input.name.getText(),
            typeParameters: processTypeParametersFromNode(processCtx, input),
            returnType,
        }
    }

    // if we get here, then yes, we have an explicit return type
    return {
        kind: IntermediateKind.IntermediateGetter,
        docBlock: processDocBlock(processCtx, input),
        decorators: processDecorators(processCtx, input),
        accessModifier: AST.getRestrictableScope(input),
        name: input.name.getText(),
        typeParameters: processTypeParametersFromNode(processCtx, input),
        returnType,
    }
}