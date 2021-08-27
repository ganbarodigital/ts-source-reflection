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
    isObjectBindingPattern,
    isTypeOperatorNode,
    ParameterDeclaration,
    SyntaxKind
} from "typescript";
import {
    IntermediateCallableParameterDefinition,
    IntermediateExpression,
    IntermediateKind,
    IntermediateTypedCallableParameterDefinition,
    IntermediateUntypedCallableParameter
} from "../IntermediateTypes";
import { processExpression } from "./processExpression";
import { processObjectBindingPattern } from "./processObjectBindingPattern";
import { processQuestionToken } from "./processQuestionToken";
import { processTypeNode } from "./processTypeNode";
import * as AST from "../AST";

export function processParameterDeclaration(
    paramDec: ParameterDeclaration
): IntermediateCallableParameterDefinition
{
    // this is a placeholder for now
    //
    // we will be expanding this as we add more test cases, and
    // eventually we will have to refactor it to handle edge cases
    // better & without introducing complexity

    // NOTE: the caller has to implement support for rest parameters,
    // to avoid infinite recursion!

    // special case - deconstructed object
    //
    // why it hides in the parameter name is beyond me!
    if (isObjectBindingPattern(paramDec.name)) {
        return processObjectBindingPattern({
            param: paramDec.name,
            paramType: paramDec.type,
        });
    }

    // do we have a default value for the parameter?
    let initializer: Maybe<IntermediateExpression>;
    if (paramDec.initializer) {
        initializer = processExpression(paramDec.initializer);
    }

    // special case - untyped parameter
    //
    // NOTE: untyped parameters cannot be `readonly`
    if (!paramDec.type) {
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        return <IntermediateUntypedCallableParameter>{
            kind: IntermediateKind.IntermediateUntypedCallableParameter,
            paramName: paramDec.name.getText(),
            initializer,
            optional: processQuestionToken(paramDec.questionToken),
        };
    }

    // special case - parameter is readonly
    //
    // instead of being a modifier, this is buried in the parameter
    // type instead
    let readonly: boolean = false;
    let paramType = paramDec.type;
    if (paramType && isTypeOperatorNode(paramType)) {
        if (paramType.operator === SyntaxKind.ReadonlyKeyword) {
            readonly = true;
            paramType = paramType.type;
        }
    }

    // special case - rest parameter
    if (AST.hasDotDotDotToken(paramDec.dotDotDotToken)) {
        return <IntermediateTypedCallableParameterDefinition>{
            kind: IntermediateKind.IntermediateTypedCallableParameterDefinition,
            paramName: paramDec.name.getText(),
            typeRef: {
                kind: IntermediateKind.IntermediateRestType,
                typeRef: processTypeNode(paramType),
            },
            optional: processQuestionToken(paramDec.questionToken),
            readonly,
            initializer,
        };
    }

    // general case - typed parameter
    return <IntermediateTypedCallableParameterDefinition>{
        kind: IntermediateKind.IntermediateTypedCallableParameterDefinition,
        paramName: paramDec.name.getText(),
        typeRef: processTypeNode(paramType),
        optional: processQuestionToken(paramDec.questionToken),
        readonly,
        initializer,
    };
}