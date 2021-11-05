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

import { MethodDeclaration } from "typescript";
import { AST } from "../AST";
import {
    IntermediateAmbientMethod,
    IntermediateKind,
    IntermediateMethodDeclaration,
    IntermediateMethodOverload,
    mustBeIntermediateBlock
} from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { processBlock } from "./processBlock";
import { processDecorators } from "./processDecorators";
import { processDocBlock } from "./processDocBlock";
import { processFunctionParameters } from "./processFunctionParameters";
import { ProcessingContext } from "./ProcessingContext";
import { processPropertyName } from "./processPropertyName";
import { processReturnTypeFromNode } from "./processReturnTypeFromNode";
import { processTypeParametersFromNode } from "./processTypeParametersFromNode";

export function processMethodDeclaration(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: MethodDeclaration
): IntermediateMethodDeclaration
{
    // this could go one of three ways ...
    //
    // but working out which way isn't doable in a single statement
    switch (parentCtx) {
        case ParentContext.MODULE:
            return processAmbientMethod(processCtx, parentCtx, input);
    }
    const isDeclared = AST.hasDeclaredModifier(input.modifiers);
    if (isDeclared) {
        return processAmbientMethod(processCtx, parentCtx, input);
    }

    const hasBody = AST.hasBody(input.body);
    if (hasBody) {
        return processMethodImplementation(processCtx, parentCtx, input);
    }

    return processMethodOverload(processCtx, parentCtx, input);
}

export function processAmbientMethod(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: MethodDeclaration,
): IntermediateAmbientMethod
{
    const hasBody = false;

    const returnType = processReturnTypeFromNode(processCtx, parentCtx, input);
    if (returnType) {
        return {
            kind: IntermediateKind.IntermediateAmbientMethod,
            docBlock: processDocBlock(processCtx, input),
            isStatic: AST.hasStaticModifier(input),
            accessModifier: AST.getRestrictableScope(input),
            isAbstract: AST.hasAbstractModifier(input.modifiers),
            name: processPropertyName(processCtx, parentCtx, input.name),
            parameters: processFunctionParameters(processCtx, parentCtx, input.parameters),
            typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
            returnType,
            hasBody,
        }
    }

    const inferredReturnType = processCtx.compiler.getInferredReturnType(processCtx, parentCtx, input);
    if (!inferredReturnType) {
        return {
            kind: IntermediateKind.IntermediateAmbientMethod,
            docBlock: processDocBlock(processCtx, input),
            isStatic: AST.hasStaticModifier(input),
            accessModifier: AST.getRestrictableScope(input),
            isAbstract: AST.hasAbstractModifier(input.modifiers),
            name: processPropertyName(processCtx, parentCtx, input.name),
            parameters: processFunctionParameters(processCtx, parentCtx, input.parameters),
            typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
            returnType,
            hasBody,
        }
    }

    return {
        kind: IntermediateKind.IntermediateAmbientMethod,
        docBlock: processDocBlock(processCtx, input),
        isStatic: AST.hasStaticModifier(input),
        accessModifier: AST.getRestrictableScope(input),
        isAbstract: AST.hasAbstractModifier(input.modifiers),
        name: processPropertyName(processCtx, parentCtx, input.name),
        parameters: processFunctionParameters(processCtx, parentCtx, input.parameters),
        typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
        returnType,
        inferredReturnType,
        hasBody,
    }
}

export function processMethodOverload(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: MethodDeclaration
): IntermediateMethodOverload
{
    const hasBody = false;

    const returnType = processReturnTypeFromNode(processCtx, parentCtx, input);
    if (returnType) {
        return {
            kind: IntermediateKind.IntermediateMethodOverload,
            docBlock: processDocBlock(processCtx, input),
            isStatic: AST.hasStaticModifier(input),
            accessModifier: AST.getRestrictableScope(input),
            isAbstract: AST.hasAbstractModifier(input.modifiers),
            name: processPropertyName(processCtx, parentCtx, input.name),
            parameters: processFunctionParameters(processCtx, parentCtx, input.parameters),
            typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
            returnType,
            hasBody,
        }
    }

    const inferredReturnType = processCtx.compiler.getInferredReturnType(processCtx, parentCtx, input);
    if (!inferredReturnType) {
        return {
            kind: IntermediateKind.IntermediateMethodOverload,
            docBlock: processDocBlock(processCtx, input),
            isStatic: AST.hasStaticModifier(input),
            accessModifier: AST.getRestrictableScope(input),
            isAbstract: AST.hasAbstractModifier(input.modifiers),
            name: processPropertyName(processCtx, parentCtx, input.name),
            parameters: processFunctionParameters(processCtx, parentCtx, input.parameters),
            typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
            returnType,
            hasBody,
        }
    }

    return {
        kind: IntermediateKind.IntermediateMethodOverload,
        docBlock: processDocBlock(processCtx, input),
        isStatic: AST.hasStaticModifier(input),
        accessModifier: AST.getRestrictableScope(input),
        isAbstract: AST.hasAbstractModifier(input.modifiers),
        name: processPropertyName(processCtx, parentCtx, input.name),
        parameters: processFunctionParameters(processCtx, parentCtx, input.parameters),
        typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
        returnType,
        inferredReturnType,
        hasBody,
    }
}

function processMethodImplementation(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: MethodDeclaration,
): IntermediateMethodDeclaration
{
    const returnType = processReturnTypeFromNode(processCtx, parentCtx, input);

    const hasBody = true;
    const body = mustBeIntermediateBlock(
        input.body ? processBlock(processCtx, ParentContext.METHOD, input.body) : undefined
    );

    if (returnType) {
        return {
            kind: IntermediateKind.IntermediateMethodDeclaration,
            docBlock: processDocBlock(processCtx, input),
            decorators: processDecorators(processCtx, input),
            isStatic: AST.hasStaticModifier(input),
            accessModifier: AST.getRestrictableScope(input),
            isAbstract: AST.hasAbstractModifier(input.modifiers),
            name: processPropertyName(processCtx, parentCtx, input.name),
            parameters: processFunctionParameters(processCtx, parentCtx, input.parameters),
            typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
            returnType,
            hasBody,
            body,
        }
    }

    const inferredReturnType = processCtx.compiler.getInferredReturnType(processCtx, parentCtx, input);
    if (!inferredReturnType) {
        return {
            kind: IntermediateKind.IntermediateMethodDeclaration,
            docBlock: processDocBlock(processCtx, input),
            decorators: processDecorators(processCtx, input),
            isStatic: AST.hasStaticModifier(input),
            accessModifier: AST.getRestrictableScope(input),
            isAbstract: AST.hasAbstractModifier(input.modifiers),
            name: processPropertyName(processCtx, parentCtx, input.name),
            parameters: processFunctionParameters(processCtx, parentCtx, input.parameters),
            typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
            returnType,
            hasBody,
            body,
        }
    }

    return {
        kind: IntermediateKind.IntermediateMethodDeclaration,
        docBlock: processDocBlock(processCtx, input),
        decorators: processDecorators(processCtx, input),
        isStatic: AST.hasStaticModifier(input),
        accessModifier: AST.getRestrictableScope(input),
        isAbstract: AST.hasAbstractModifier(input.modifiers),
        name: processPropertyName(processCtx, parentCtx, input.name),
        parameters: processFunctionParameters(processCtx, parentCtx, input.parameters),
        typeParameters: processTypeParametersFromNode(processCtx, parentCtx, input),
        returnType,
        inferredReturnType,
        hasBody,
        body,
    }
}