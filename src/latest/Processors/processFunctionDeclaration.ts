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
import { FunctionDeclaration, Statement } from "typescript";
import { AST } from "../AST";
import {
    IntermediateAmbientFunction,
    IntermediateBlock,
    IntermediateFunction,
    IntermediateFunctionOverload,
    IntermediateFunctionImplementation,
    IntermediateKind,
    // mustBeIntermediateBlock
} from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
// import { processBlock } from "./processBlock";
import { processDocBlock } from "./processDocBlock";
import { processFunctionParameters } from "./processFunctionParameters";
import { ProcessingContext } from "./ProcessingContext";
import { processReturnTypeFromNode } from "./processReturnTypeFromNode";
import { processTypeParametersFromNode } from "./processTypeParametersFromNode";

export function processFunctionDeclaration (
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: Statement
): IntermediateFunction
{
    // make sure we have what we need
    const funcDec = AST.mustBeFunctionDeclaration(input);

    // at this point, we *know* that we're looking at a function
    //
    // we just need to work out which kind ... and this is the original
    // reason we started passing the parentCtx around
    const isDeclared = AST.hasDeclaredModifier(funcDec.modifiers);
    if (parentCtx === ParentContext.MODULE || isDeclared) {
        return processAmbientFunction(processCtx, funcDec);
    }

    // if we get here, then we know that we're looking at an actual
    // function. Question is: are we looking at the function's implementation,
    // or one of its overloaded declarations?
    const hasBody = AST.hasBody(funcDec.body);
    if (hasBody) {
        return processFunctionImplementation(processCtx, funcDec);
    }

    return processFunctionOverload(processCtx, funcDec);
}

function processFunctionImplementation(
    processCtx: ProcessingContext,
    input: FunctionDeclaration
): IntermediateFunctionImplementation
{
    // // make sure we have a body!
    // const body = mustBeIntermediateBlock(
    //     input.body ? processBlock(processCtx, input.body) : undefined
    // );

    // temporary, while we do the refactoring
    const body: IntermediateBlock = {
        kind: IntermediateKind.IntermediateBlock,
        children: [],
    };

    const returnType = processReturnTypeFromNode(
        processCtx,
        input
    );

    if (returnType) {
        return {
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: processDocBlock(processCtx, input),
            isDeclared: false,
            isExported: AST.hasExportModifier(input.modifiers),
            isDefaultExport: AST.hasDefaultModifier(input.modifiers),
            typeParameters: processTypeParametersFromNode(processCtx, input),
            name: input.name?.text,
            parameters: processFunctionParameters(processCtx, input.parameters),
            returnType,
            hasBody: true,
            body,
        }
    }

    // do we have anything useful?
    const inferredReturnType = AST.getInferredReturnType(processCtx, input);
    if (inferredReturnType) {
        return {
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: processDocBlock(processCtx, input),
            isDeclared: false,
            isExported: AST.hasExportModifier(input.modifiers),
            isDefaultExport: AST.hasDefaultModifier(input.modifiers),
            typeParameters: processTypeParametersFromNode(processCtx, input),
            name: input.name?.text,
            parameters: processFunctionParameters(processCtx, input.parameters),
            returnType,
            inferredReturnType,
            hasBody: true,
            body,
        }
    }

    // if we get here, we have no inferred type information
    return {
        kind: IntermediateKind.IntermediateFunctionImplementation,
        docBlock: processDocBlock(processCtx, input),
        isDeclared: false,
        isExported: AST.hasExportModifier(input.modifiers),
        isDefaultExport: AST.hasDefaultModifier(input.modifiers),
        typeParameters: processTypeParametersFromNode(processCtx, input),
        name: input.name?.text,
        parameters: processFunctionParameters(processCtx, input.parameters),
        returnType,
        hasBody: true,
        body,
    }
}

function processFunctionOverload(
    processCtx: ProcessingContext,
    input: FunctionDeclaration
): IntermediateFunctionOverload
{
    const returnType = processReturnTypeFromNode(
        processCtx,
        input
    );

    if (returnType) {
        return {
            kind: IntermediateKind.IntermediateFunctionOverload,
            docBlock: processDocBlock(processCtx, input),
            isDeclared: false,
            isExported: AST.hasExportModifier(input.modifiers),
            isDefaultExport: AST.hasDefaultModifier(input.modifiers),
            typeParameters: processTypeParametersFromNode(processCtx, input),
            name: input.name?.text,
            parameters: processFunctionParameters(processCtx, input.parameters),
            returnType,
            hasBody: false,
        }
    }

    // do we have anything useful?
    const inferredReturnType = AST.getInferredReturnType(processCtx, input);
    if (inferredReturnType) {
        return {
            kind: IntermediateKind.IntermediateFunctionOverload,
            docBlock: processDocBlock(processCtx, input),
            isDeclared: false,
            isExported: AST.hasExportModifier(input.modifiers),
            isDefaultExport: AST.hasDefaultModifier(input.modifiers),
            typeParameters: processTypeParametersFromNode(processCtx, input),
            name: input.name?.text,
            parameters: processFunctionParameters(processCtx, input.parameters),
            returnType,
            inferredReturnType,
            hasBody: false,
        }
    }

    // if we get here, we have no inferred type information
    return {
        kind: IntermediateKind.IntermediateFunctionOverload,
        docBlock: processDocBlock(processCtx, input),
        isDeclared: false,
        isExported: AST.hasExportModifier(input.modifiers),
        isDefaultExport: AST.hasDefaultModifier(input.modifiers),
        typeParameters: processTypeParametersFromNode(processCtx, input),
        name: input.name?.text,
        parameters: processFunctionParameters(processCtx, input.parameters),
        returnType,
        hasBody: false,
    }
}

function processAmbientFunction(
    processCtx: ProcessingContext,
    input: FunctionDeclaration
): IntermediateAmbientFunction
{
    // shorthand
    const compiler = processCtx.compiler;

    // do we have a return type?
    const returnType = processReturnTypeFromNode(
        processCtx,
        input
    );

    if (!returnType) {
        // okay, can the compiler work out what the return type is instead,
        // then?
        const inferredReturnType = compiler.getInferredReturnType(processCtx, input);
        if (inferredReturnType) {
            return {
                kind: IntermediateKind.IntermediateAmbientFunction,
                docBlock: processDocBlock(processCtx, input),
                isDeclared: AST.hasDeclaredModifier(input.modifiers),
                isExported: AST.hasExportModifier(input.modifiers),
                isDefaultExport: AST.hasDefaultModifier(input.modifiers),
                typeParameters: processTypeParametersFromNode(processCtx, input),
                name: input.name?.text,
                parameters: processFunctionParameters(processCtx, input.parameters),
                returnType,
                inferredReturnType,
                hasBody: false,
            }
        }

        return {
            kind: IntermediateKind.IntermediateAmbientFunction,
            docBlock: processDocBlock(processCtx, input),
            isDeclared: AST.hasDeclaredModifier(input.modifiers),
            isExported: AST.hasExportModifier(input.modifiers),
            isDefaultExport: AST.hasDefaultModifier(input.modifiers),
            typeParameters: processTypeParametersFromNode(processCtx, input),
            name: input.name?.text,
            parameters: processFunctionParameters(processCtx, input.parameters),
            returnType,
            hasBody: false,
        }
    }

    return {
        kind: IntermediateKind.IntermediateAmbientFunction,
        docBlock: processDocBlock(processCtx, input),
        isDeclared: AST.hasDeclaredModifier(input.modifiers),
        isExported: AST.hasExportModifier(input.modifiers),
        isDefaultExport: AST.hasDefaultModifier(input.modifiers),
        typeParameters: processTypeParametersFromNode(processCtx, input),
        name: input.name?.text,
        parameters: processFunctionParameters(processCtx, input.parameters),
        returnType,
        hasBody: false,
    }
}
