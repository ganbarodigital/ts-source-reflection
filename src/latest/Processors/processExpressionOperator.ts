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

import { UnreachableCodeError } from "@safelytyped/core-types";
import { BinaryOperatorToken, SyntaxKind } from "typescript";
import { IntermediateExpressionOperator } from "../IntermediateTypes";
import { ProcessingContext } from "./ProcessingContext";

type TokenToEnumMapping = {
    [kind: number]: string;
}

const TOKEN_TO_ENUM_MAPPING: TokenToEnumMapping = {
    [SyntaxKind.AmpersandAmpersandEqualsToken]: IntermediateExpressionOperator.AMPERSAND_AMPERSAND_EQUALS,
    [SyntaxKind.AmpersandAmpersandToken]: IntermediateExpressionOperator.AMPERSAND_AMPERSAND,
    [SyntaxKind.AmpersandEqualsToken]: IntermediateExpressionOperator.AMPERSAND_EQUALS,
    [SyntaxKind.AmpersandToken]: IntermediateExpressionOperator.AMPERSAND,
    [SyntaxKind.AsteriskAsteriskToken]: IntermediateExpressionOperator.ASTERISK_ASTERISK,
    [SyntaxKind.AsteriskAsteriskEqualsToken]: IntermediateExpressionOperator.ASTERISK_ASTERISK_EQUALS,
    [SyntaxKind.AsteriskEqualsToken]: IntermediateExpressionOperator.ASTERISK_EQUALS,
    [SyntaxKind.AsteriskToken]: IntermediateExpressionOperator.ASTERISK,
    [SyntaxKind.BarBarEqualsToken]: IntermediateExpressionOperator.BAR_BAR_EQUALS,
    [SyntaxKind.BarBarToken]: IntermediateExpressionOperator.BAR_BAR,
    [SyntaxKind.BarEqualsToken]: IntermediateExpressionOperator.BAR_EQUALS,
    [SyntaxKind.BarToken]: IntermediateExpressionOperator.BAR,
    [SyntaxKind.CaretEqualsToken]: IntermediateExpressionOperator.CARET_EQUALS,
    [SyntaxKind.CaretToken]: IntermediateExpressionOperator.CARET,
    [SyntaxKind.CommaToken]: IntermediateExpressionOperator.COMMA,
    [SyntaxKind.EqualsEqualsToken]: IntermediateExpressionOperator.EQUALS_EQUALS,
    [SyntaxKind.EqualsEqualsEqualsToken]: IntermediateExpressionOperator.EQUALS_EQUALS_EQUALS,
    [SyntaxKind.EqualsToken]: IntermediateExpressionOperator.EQUALS,
    [SyntaxKind.ExclamationEqualsToken]: IntermediateExpressionOperator.EXCLAMATION_EQUALS,
    [SyntaxKind.ExclamationEqualsEqualsToken]: IntermediateExpressionOperator.EXCLAMATION_EQUALS_EQUALS,
    [SyntaxKind.GreaterThanEqualsToken]: IntermediateExpressionOperator.GREATER_THAN_EQUALS,
    [SyntaxKind.GreaterThanGreaterThanEqualsToken]: IntermediateExpressionOperator.GREATER_THAN_GREATER_THAN_EQUALS,
    [SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken]: IntermediateExpressionOperator.GREATER_THAN_GREATER_THAN_GREATHER_THAN_EQUALS,
    [SyntaxKind.GreaterThanGreaterThanToken]: IntermediateExpressionOperator.GREATER_THAN_GREATER_THAN,
    [SyntaxKind.GreaterThanGreaterThanGreaterThanToken]: IntermediateExpressionOperator.GREATER_THAN_GREATER_THAN_GREATER_THAN,
    [SyntaxKind.GreaterThanToken]: IntermediateExpressionOperator.GREATER_THAN,
    [SyntaxKind.InKeyword]: IntermediateExpressionOperator.IN,
    [SyntaxKind.InstanceOfKeyword]: IntermediateExpressionOperator.INSTANCEOF,
    [SyntaxKind.LessThanLessThanEqualsToken]: IntermediateExpressionOperator.LESS_THAN_LESS_THAN_EQUALS,
    [SyntaxKind.LessThanEqualsToken]: IntermediateExpressionOperator.LESS_THAN_EQUALS,
    [SyntaxKind.LessThanLessThanToken]: IntermediateExpressionOperator.LESS_THAN_LESS_THAN,
    [SyntaxKind.LessThanToken]: IntermediateExpressionOperator.LESS_THAN,
    [SyntaxKind.MinusEqualsToken]: IntermediateExpressionOperator.MINUS_EQUALS,
    [SyntaxKind.MinusToken]: IntermediateExpressionOperator.MINUS,
    [SyntaxKind.PercentEqualsToken]: IntermediateExpressionOperator.PERCENT_EQUALS,
    [SyntaxKind.PercentToken]: IntermediateExpressionOperator.PERCENT,
    [SyntaxKind.PlusEqualsToken]: IntermediateExpressionOperator.PLUS_EQUALS,
    [SyntaxKind.PlusToken]: IntermediateExpressionOperator.PLUS,
    [SyntaxKind.QuestionQuestionEqualsToken]: IntermediateExpressionOperator.QUESTION_QUESTION_EQUALS,
    [SyntaxKind.QuestionQuestionToken]: IntermediateExpressionOperator.QUESTION_QUESTION,
    [SyntaxKind.SlashEqualsToken]: IntermediateExpressionOperator.SLASH_EQUALS,
    [SyntaxKind.SlashToken]: IntermediateExpressionOperator.SLASH,
}

export function processExpressionOperator(
    processCtx: ProcessingContext,
    input: BinaryOperatorToken
): IntermediateExpressionOperator
{
    if (TOKEN_TO_ENUM_MAPPING[input.kind]) {
        return TOKEN_TO_ENUM_MAPPING[input.kind] as IntermediateExpressionOperator;
    }

    throw new UnreachableCodeError({
        public: {
            reason: "unsupported operator " + input.getText(),
        }
    });
}