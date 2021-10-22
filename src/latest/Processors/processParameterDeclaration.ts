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
    isArrayBindingPattern,
    isObjectBindingPattern,
    isTypeOperatorNode,
    ParameterDeclaration,
    SyntaxKind
} from "typescript";
import { AST } from "../AST";
import {
    IntermediateCallableParameterDeclaration,
    IntermediateExpression,
    IntermediateKind,
    IntermediateRestCallableParameterDeclaration,
    IntermediateTypedCallableParameterDeclaration,
    IntermediateUntypedCallableParameterDeclaration
} from "../IntermediateTypes";
import { processArrayBindingPattern } from "./processArrayBindingPattern";
import { processDecorators } from "./processDecorators";
import { processExpression } from "./processExpression";
import { ProcessingContext } from "./ProcessingContext";
import { processObjectBindingPatternForParameters } from "./processObjectBindingPatternForParameters";
import { processQuestionToken } from "./processQuestionToken";
import { processTypeNode } from "./processTypeNode";

export function processParameterDeclaration(
    processCtx: ProcessingContext,
    paramDec: ParameterDeclaration
): IntermediateCallableParameterDeclaration
{
    // special case - deconstructed object
    if (isObjectBindingPattern(paramDec.name)) {
        return processObjectBindingPatternForParameters(
            processCtx,
            {
                param: paramDec.name,
                paramType: paramDec.type,
                paramInitializer: paramDec.initializer,
            }
        );
    }

    // special case - array binding
    if (isArrayBindingPattern(paramDec.name)) {
        return processArrayBindingPattern(
            processCtx,
            {
                param: paramDec.name,
                paramType: paramDec.type
            }
        )
    }

    // special case - rest parameter
    //
    // we convert this into a nested structure
    if (AST.hasDotDotDotToken(paramDec.dotDotDotToken)) {
        const paramClone = {...paramDec}
        paramClone.dotDotDotToken = undefined;
        return <IntermediateRestCallableParameterDeclaration>{
            kind: IntermediateKind.IntermediateRestCallableParameterDeclaration,
            parameter: processParameterDeclaration(processCtx, paramClone)
        };
    }

    // do we have a default value for the parameter?
    let initializer: Maybe<IntermediateExpression>;
    if (paramDec.initializer) {
        initializer = processExpression(processCtx, paramDec.initializer);
    }

    // special case - untyped parameter
    //
    // NOTE: untyped parameters cannot be `readonly`
    if (!paramDec.type) {
        const inferredType = AST.getInferredType(processCtx, paramDec);

        // tslint:disable-next-line: no-angle-bracket-type-assertion
        return <IntermediateUntypedCallableParameterDeclaration>{
            kind: IntermediateKind.IntermediateUntypedCallableParameterDeclaration,
            decorators: processDecorators(processCtx, paramDec),
            name: paramDec.name.getText(),
            initializer,
            isOptional: processQuestionToken(processCtx, paramDec.questionToken),
            inferredType,
        };
    }

    // special case - parameter is readonly
    //
    // instead of being a modifier, this is buried in the parameter
    // type instead
    let isReadonly: boolean = false;
    let paramType = paramDec.type;
    if (paramType && isTypeOperatorNode(paramType)) {
        if (paramType.operator === SyntaxKind.ReadonlyKeyword) {
            isReadonly = true;
            paramType = paramType.type;
        }
    }

    // general case - typed parameter
    return <IntermediateTypedCallableParameterDeclaration>{
        kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
        decorators: processDecorators(processCtx, paramDec),
        name: paramDec.name.getText(),
        typeRef: processTypeNode(processCtx, paramType),
        isOptional: processQuestionToken(processCtx, paramDec.questionToken),
        isReadonly,
        initializer,
    };
}