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

import { IndexSignatureDeclaration } from "typescript";
import { AST } from "../AST";
import { IntermediateIndexSignature, IntermediateKind } from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { ProcessingContext } from "./ProcessingContext";
import { processTypeNode } from "./processTypeNode";

export function processIndexSignatureDeclaration(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: IndexSignatureDeclaration
): IntermediateIndexSignature
{
    // there's a pretty serious assumption here that every
    // IndexSignatureDeclaration *will* have a parameter
    //
    // this appears to be enforced by the compiler's runtime
    // behaviour ... it's just not enforced by the AST types
    // themselves
    return <IntermediateIndexSignature>{
        kind: IntermediateKind.IntermediateIndexSignature,
        index: {
            indexName: input.parameters[0].name.getText(),
            indexTypeRef: processTypeNode(processCtx, parentCtx, input.parameters[0].type!),
        },
        value: {
            valueTypeRef: processTypeNode(processCtx, parentCtx, input.type),
        },
        sigIsReadonly: AST.hasReadonlyModifier(input.modifiers),
    }
}