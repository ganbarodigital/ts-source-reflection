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
import { mustBeString } from "@safelytyped/core-types";
import {
    isArrayTypeNode,
    isConditionalTypeNode,
    isConstructorTypeNode,
    isFunctionTypeNode,
    isImportTypeNode,
    isIndexedAccessTypeNode,
    isInferTypeNode,
    isIntersectionTypeNode,
    isLiteralTypeNode,
    isMappedTypeNode,
    isParenthesizedTypeNode,
    isTemplateLiteralTypeNode,
    isThisTypeNode,
    isTupleTypeNode,
    isTypeOperatorNode,
    isTypePredicateNode,
    isTypeQueryNode,
    isUnionTypeNode,
    SyntaxKind,
    TypeNode
} from "typescript";
import { AST } from "../AST";
import {
    IntermediateKind,
    IntermediateTypeReference
} from "../IntermediateTypes";
import { isBuiltInType } from "./isBuiltinType";
import { ParentContext } from "./ParentContext";
import { processAnonymousClassType } from "./processAnonymousClassType";
import { processBuiltInType } from "./processBuiltInType";
import { processConditionalType } from "./processConditionalType";
import { processConstructorType } from "./processConstructorType";
import { processFunctionType } from "./processFunctionType";
import { processImportTypeNodeDuringTypeProcessing } from "./processImportTypeNodeDuringTypeProcessing";
import { processIndexedAccessType } from "./processIndexedAccessType";
import { processInferType } from "./processInferType";
import { ProcessingContext } from "./ProcessingContext";
import { processIntersectionNode } from "./processIntersectionNode";
import { processLiteralTypeNode } from "./processLiteralTypeNode";
import { processMappedType } from "./processMappedType";
import { processParenthesizedType } from "./processParenthesisedType";
import { processTemplateLiteralType } from "./processTemplateLiteralType";
import { processTupleType } from "./processTupleType";
import { processTypePredicate } from "./processTypePredicate";
import { processTypeReferenceNode } from "./processTypeReferenceNode";
import { processUnionType } from "./processUnionType";

export function processTypeNode(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: TypeNode
): IntermediateTypeReference
{
    // NOTE:
    //
    // we do not support rest types here any longer
    //
    // if you need then (like tuples do), you'll need to define
    // a wrapper around processTypeNote()

    // shorthand
    const compiler = processCtx.compiler;

    // special case - we have a keyof type
    if (isTypeOperatorNode(input)) {
        if (input.operator === SyntaxKind.KeyOfKeyword) {
            return {
                kind: IntermediateKind.IntermediateKeyofTypeReference,
                typeRef: processTypeNode(processCtx, parentCtx, input.type),
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
            entityName: mustBeString(
                compiler.getTextForNode(input.exprName)
            ),
        }
    }

    // special case - we have an array
    if (isArrayTypeNode(input)) {
        return {
            kind: IntermediateKind.IntermediateArrayTypeReference,
            typeRef: processTypeNode(processCtx, parentCtx, input.elementType),
        }
    }

    // special case - anonymous class
    if (AST.isAnonymousClassType(input)) {
        // what's in the class?
        return processAnonymousClassType(processCtx, parentCtx, input);
    }

    // special case - literal type
    if (isLiteralTypeNode(input)) {
        return processLiteralTypeNode(processCtx, input);
    }

    // special case - union parameter
    if (isUnionTypeNode(input)) {
        return processUnionType(processCtx, parentCtx, input);
    }

    // special case - type intersection
    if (isIntersectionTypeNode(input)) {
        return processIntersectionNode(processCtx, parentCtx, input);
    }

    // special case - we may have a built-in type
    if (isBuiltInType(input)) {
        return processBuiltInType(processCtx, input);
    }

    // special case - function type signature
    if (isFunctionTypeNode(input)) {
        return processFunctionType(processCtx, parentCtx, input);
    }

    // special case - type predicate
    if (isTypePredicateNode(input)) {
        return processTypePredicate(processCtx, parentCtx, input);
    }

    // special case - types in parenthesis
    if (isParenthesizedTypeNode(input)) {
        return processParenthesizedType(processCtx, parentCtx, input);
    }

    // special case - tuple type
    if (isTupleTypeNode(input)) {
        return processTupleType(processCtx, parentCtx, input);
    }

    // special case - constructor type
    if (isConstructorTypeNode(input)) {
        return processConstructorType(processCtx, parentCtx, input);
    }

    // special case - indexed access type
    if (isIndexedAccessTypeNode(input)) {
        return processIndexedAccessType(processCtx, parentCtx, input);
    }

    // special case - conditional type
    if (isConditionalTypeNode(input)) {
        return processConditionalType(processCtx, parentCtx, input);
    }

    // special case - infer type
    if (isInferTypeNode(input)) {
        return processInferType(processCtx, parentCtx, input);
    }

    // special case - mapped type
    if (isMappedTypeNode(input)) {
        return processMappedType(processCtx, parentCtx, input);
    }

    // special case - template literal
    if (isTemplateLiteralTypeNode(input)) {
        return processTemplateLiteralType(processCtx, parentCtx, input);
    }

    // special case - `this` as a type
    if (isThisTypeNode(input)) {
        return {
            kind: IntermediateKind.IntermediateThisType
        }
    }

    // special case - an 'import type' node
    //
    // we've only seen these when working with type nodes created by
    // the type checker
    if (isImportTypeNode(input)) {
        return processImportTypeNodeDuringTypeProcessing(processCtx, parentCtx, input);
    }

    // generic case
    //
    // use a type guarantee to keep the compiler happy!
    const typeRef = AST.mustBeTypeReference(input);
    return processTypeReferenceNode(processCtx, parentCtx, typeRef);
}
