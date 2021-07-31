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

import { isArrayTypeNode, isIntersectionTypeNode, isUnionTypeNode, SyntaxKind, TypeNode } from "typescript";
import { isAnonymousClassType } from "../AST";
import { mustBeTypeReference } from "../AST/mustBeTypeReference";
import { IntermediateKind, IntermediateTypeReference } from "../IntermediateTypes";
import { processAnonymousClassType } from "./processAnonymousClassType";
import { processIntersectionNode } from "./processIntersectionNode";
import { processTypeReferenceNode } from "./processTypeReferenceNode";
import { processUnionType } from "./processUnionType";


const BUILT_IN_TYPES: string[] = [];
BUILT_IN_TYPES[SyntaxKind.BooleanKeyword] = "boolean";
BUILT_IN_TYPES[SyntaxKind.NumberKeyword] = "number";
BUILT_IN_TYPES[SyntaxKind.ObjectKeyword] = "object";
BUILT_IN_TYPES[SyntaxKind.StringKeyword] = "string";

export function processTypeNode
(
    input: TypeNode
): IntermediateTypeReference
{
    // special case - we have an array
    if (isArrayTypeNode(input)) {
        const retval = processTypeNode(input.elementType);
        retval.kind = IntermediateKind.IntermediateFixedTypeArrayReference;
        return retval;
    }

    // special case - anonymous class
    if (isAnonymousClassType(input)) {
        // what's in the class?
        return processAnonymousClassType(input);
    }

    // special case - union parameter
    if (isUnionTypeNode(input)) {
        return processUnionType(input);
    }

    // special case - type intersection
    if (isIntersectionTypeNode(input)) {
        return processIntersectionNode(input);
    }

    // special case - we may have a built-in type
    if (BUILT_IN_TYPES[input.kind] !== undefined) {
        return {
            kind: IntermediateKind.IntermediateFixedTypeReference,
            typeName: BUILT_IN_TYPES[input.kind],
        }
    }

    // generic case
    //
    // use a type guarantee to keep the compiler happy!
    const typeRef = mustBeTypeReference(input);
    return processTypeReferenceNode(typeRef);
}