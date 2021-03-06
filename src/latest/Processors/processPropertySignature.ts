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

import { PropertySignature } from "typescript";
import { AST } from "../AST";
import { IntermediateKind, IntermediatePropertySignature } from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { processDocBlock } from "./processDocBlock";
import { ProcessingContext } from "./ProcessingContext";
import { processPropertyName } from "./processPropertyName";
import { processQuestionToken } from "./processQuestionToken";
import { processTypeNode } from "./processTypeNode";

export function processPropertySignature
(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: PropertySignature
): IntermediatePropertySignature
{
    // special case: untyped property
    if (!input.type) {
        return {
            kind: IntermediateKind.IntermediateUntypedPropertySignature,
            docBlock: processDocBlock(processCtx, input),
            name: processPropertyName(processCtx, parentCtx, input.name),
            isOptional: processQuestionToken(processCtx, input.questionToken),
            isReadonly: AST.hasReadonlyModifier(input.modifiers),
        }
    }

    // general case: typed property
    return {
        kind: IntermediateKind.IntermediateTypedPropertySignature,
        docBlock: processDocBlock(processCtx, input),
        name: processPropertyName(processCtx, parentCtx, input.name),
        isOptional: processQuestionToken(processCtx, input.questionToken),
        isReadonly: AST.hasReadonlyModifier(input.modifiers),
        typeRef: processTypeNode(processCtx, parentCtx, input.type),
    };
}