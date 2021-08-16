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
import {
    ConstructorTypeNode,
    isArrayTypeNode,
    isConstructorTypeNode,
    isFunctionTypeNode,
    isIndexedAccessTypeNode,
    isIntersectionTypeNode,
    isLiteralTypeNode,
    isParenthesizedTypeNode,
    isRestTypeNode,
    isTupleTypeNode,
    isTypeOperatorNode,
    isTypePredicateNode,
    isTypeQueryNode,
    isUnionTypeNode,
    SyntaxKind,
    TypeNode
} from "typescript";
import { isAnonymousClassType } from "../AST";
import { mustBeTypeReference } from "../AST/mustBeTypeReference";
import {
    IntermediateConstructorDefinition,
    IntermediateGenericType,
    IntermediateKind,
    IntermediateTypeReference
} from "../IntermediateTypes";
import { isBuiltInType } from "./isBuiltinType";
import { processAnonymousClassType } from "./processAnonymousClassType";
import { processBuiltInType } from "./processBuiltInType";
import { processFunctionParameters } from "./processFunctionParameters";
import { processFunctionType } from "./processFunctionType";
import { processIndexedAccessType } from "./processIndexedAccessType";
import { processIntersectionNode } from "./processIntersectionNode";
import { processLiteralTypeNode } from "./processLiteralTypeNode";
import { processParenthesizedType } from "./processParenthesisedType";
import { processTupleType } from "./processTupleType";
import { processTypeParameters } from "./processTypeParameters";
import { processTypePredicate } from "./processTypePredicate";
import { processTypeReferenceNode } from "./processTypeReferenceNode";
import { processUnionType } from "./processUnionType";


export function processTypeNode
(
    input: TypeNode
): IntermediateTypeReference
{
    // special case - we have a keyof type
    if (isTypeOperatorNode(input)) {
        if (input.operator === SyntaxKind.KeyOfKeyword) {
            return {
                kind: IntermediateKind.IntermediateKeyofTypeReference,
                typeRef: processTypeNode(input.type),
            }
        }
    }

    // special case - we have a typeof type
    //
    // unlike most of our other type references, it doesn't wrap
    // a type, it refers to another symbol defined within the same
    // scope
    if (isTypeQueryNode(input)) {
        return {
            kind: IntermediateKind.IntermediateTypeofTypeReference,
            entityName: input.exprName.getText(),
        }
    }

    // special case - we have an array
    if (isArrayTypeNode(input)) {
        return {
            kind: IntermediateKind.IntermediateArrayTypeReference,
            typeRef: processTypeNode(input.elementType),
        }
    }

    // special case - anonymous class
    if (isAnonymousClassType(input)) {
        // what's in the class?
        return processAnonymousClassType(input);
    }

    // special case - literal type
    if (isLiteralTypeNode(input)) {
        return processLiteralTypeNode(input);
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
    if (isBuiltInType(input)) {
        return processBuiltInType(input);
    }

    // special case - function type signature
    if (isFunctionTypeNode(input)) {
        return processFunctionType(input);
    }

    // special case - type predicate
    if (isTypePredicateNode(input)) {
        return processTypePredicate(input);
    }

    // special case - types in parenthesis
    if (isParenthesizedTypeNode(input)) {
        return processParenthesizedType(input);
    }

    // special case - tuple type
    if (isTupleTypeNode(input)) {
        return processTupleType(input);
    }

    // special case - rest type
    if (isRestTypeNode(input)) {
        return {
            kind: IntermediateKind.IntermediateRestType,
            typeRef: processTypeNode(input.type),
        }
    }

    // special case - constructor type
    if (isConstructorTypeNode(input)) {
        return processConstructorTypeNode(input);
    }

    // special case - indexed access type
    if (isIndexedAccessTypeNode(input)) {
        return processIndexedAccessType(input);
    }

    // generic case
    //
    // use a type guarantee to keep the compiler happy!
    const typeRef = mustBeTypeReference(input);
    return processTypeReferenceNode(typeRef);
}

function processConstructorTypeNode(
    input: ConstructorTypeNode
): IntermediateConstructorDefinition
{
    // do we have type parameters?
    let typeParameters: IntermediateGenericType[] = [];
    if (input.typeParameters) {
        typeParameters = processTypeParameters(input.typeParameters);
    }

    return {
        kind: IntermediateKind.IntermediateConstructorDefinition,
        typeParameters,
        parameters: processFunctionParameters(input.parameters),
        returnType: processTypeNode(input.type),
    }
}