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

import { SyntaxKind, TypeNode } from "typescript";
import { mustBeTypeReference } from "../AST/mustBeTypeReference";
import { IntermediateKind, IntermediateTypeReference } from "../IntermediateTypes";
import { processTypeReferenceNode } from "./processTypeReferenceNode";

export function processTypeNode
(
    input: TypeNode
): IntermediateTypeReference
{
    // we will refactor this later
    if (input.kind === SyntaxKind.ObjectKeyword) {
        return {
            kind: IntermediateKind.IntermediateFixedTypeReference,
            typeName: "object"
        }
    }

    if (input.kind === SyntaxKind.NumberKeyword) {
        return {
            kind: IntermediateKind.IntermediateFixedTypeReference,
            typeName: "number"
        }
    }

    if (input.kind === SyntaxKind.StringKeyword) {
        return {
            kind: IntermediateKind.IntermediateFixedTypeReference,
            typeName: "string"
        }
    }

    // generic case
    //
    // use a type guarantee to keep the compiler happy!
    const typeRef = mustBeTypeReference(input);
    return processTypeReferenceNode(typeRef);
}