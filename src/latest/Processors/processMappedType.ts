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
    MappedTypeNode,
    MinusToken,
    PlusToken,
    QuestionToken,
    ReadonlyToken,
    SyntaxKind
} from "typescript";
import { Compiler } from "../Compiler";
import {
    IntermediateKind,
    IntermediateMappedType,
    IntermediateMappingModifier,
    IntermediateTypeReference
} from "../IntermediateTypes";
import { processTypeNode } from "./processTypeNode";

export function processMappedType(
    compiler: Compiler,
    input: MappedTypeNode
): IntermediateMappedType
{
    // the definition of the index is hidden away in
    // the node's typeParameter field ...
    const indexName = input.typeParameter.name.text;
    const constraint = processTypeNode(compiler, input.typeParameter.constraint!);

    // does the mapped type's value have a type?
    //
    // according to the AST, not always ...
    let valueTypeRef: Maybe<IntermediateTypeReference>;
    if (input.type) {
        valueTypeRef = processTypeNode(compiler, input.type);
    }

    // are we rewriting the key, while we're at it?
    let nameMap: Maybe<IntermediateTypeReference>;
    if (input.nameType) {
        nameMap = processTypeNode(compiler, input.nameType);
    }

    return {
        kind: IntermediateKind.IntermediateMappedType,
        index: {
            indexName,
            constraint,
            mappingModifiers: {
                readonly: processMappingModifier(input.readonlyToken),
                optional: processMappingModifier(input.questionToken),
            },
            nameMap,
        },
        value: {
            valueTypeRef,
        }
    }
}

function processMappingModifier(
    input: ReadonlyToken | MinusToken | PlusToken | QuestionToken | undefined
): Maybe<IntermediateMappingModifier>
{
    // special case - no modifier set
    if (!input) {
        return undefined;
    }

    switch (input.kind) {
        case SyntaxKind.MinusToken:
            return IntermediateMappingModifier.REMOVE;
        case SyntaxKind.PlusToken:
            return IntermediateMappingModifier.ADD;
        case SyntaxKind.ReadonlyKeyword:
        case SyntaxKind.QuestionToken:
            return undefined;
        default:
            const _exhaustiveCheck: never = input;
            return _exhaustiveCheck;
    }
}