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

import { DEFAULT_DATA_PATH, getClassNames, UnsupportedTypeError } from "@safelytyped/core-types";
import {
    Expression,
    isArrayLiteralExpression,
    isArrowFunction,
    isAsExpression,
    isBigIntLiteral,
    isBinaryExpression,
    isCallExpression,
    isElementAccessExpression,
    isFunctionExpression,
    isIdentifier,
    isNewExpression,
    isNumericLiteral,
    isObjectLiteralExpression,
    isParenthesizedExpression,
    isPropertyAccessExpression, isRegularExpressionLiteral, isSpreadElement,
    isStringLiteral,
    isTemplateExpression,
    isTypeAssertionExpression, SyntaxKind
} from "typescript";
import { AST } from "../AST";
import {
    IntermediateExpression,
    IntermediateKind, IntermediateTypeAssertable
} from "../IntermediateTypes";
import { processArrayLiteralExpression } from "./processArrayLiteralExpression";
import { processArrowFunction } from "./processArrowFunction";
import { processBinaryExpression } from "./processBinaryExpression";
import { processCallExpression } from "./processCallExpression";
import { processElementAccessExpression } from "./processElementAccessExpression";
import { processFunctionExpression } from "./processFunctionExpression";
import { processIdentifier } from "./processIdentifier";
import { processNewExpression } from "./processNewExpression";
import { processObjectLiteralExpression } from "./processObjectLiteralExpression";
import { processParenthesizedExpression } from "./processParenthesizedExpression";
import { processPropertyAccessExpression } from "./processPropertyAccessExpression";
import { processSpreadElement } from "./processSpreadElement";
import { processTemplateExpression } from "./processTemplateExpression";
import { processTypeNode } from "./processTypeNode";

export function processExpression(
    input: Expression
): IntermediateExpression {
    // we will refactor this later on
    if (isNumericLiteral(input)) {
        return {
            kind: IntermediateKind.IntermediateNumericLiteral,
            value: input.text,
            asType: undefined,
            typeAssertion: undefined,
        }
    }
    if (isStringLiteral(input)) {
        return {
            kind: IntermediateKind.IntermediateStringLiteral,
            value: input.text,
            asType: undefined,
            typeAssertion: undefined,
        }
    }

    if (isCallExpression(input)) {
        return processCallExpression(input);
    }

    if (isObjectLiteralExpression(input)) {
        return processObjectLiteralExpression(input);
    }

    if (isTypeAssertionExpression(input)) {
        const retval = processExpression(input.expression);
        (retval as IntermediateTypeAssertable).typeAssertion = processTypeNode(input.type);
        return retval;
    }

    if (isAsExpression(input)) {
        const retval = processExpression(input.expression);
        (retval as IntermediateTypeAssertable).asType = processTypeNode(input.type);
        return retval;
    }

    if (isBigIntLiteral(input)) {
        return {
            kind: IntermediateKind.IntermediateBigintLiteral,
            value: input.text,
        }
    }

    if (isArrayLiteralExpression(input)) {
        return processArrayLiteralExpression(input);
    }

    if (AST.isTrueKeyword(input)) {
        return {
            kind: IntermediateKind.IntermediateBooleanLiteral,
            value: "true",
            asType: undefined,
            typeAssertion: undefined,
        }
    }

    if (AST.isFalseKeyword(input)) {
        return {
            kind: IntermediateKind.IntermediateBooleanLiteral,
            value: "false",
            asType: undefined,
            typeAssertion: undefined,
        }
    }

    if (isNewExpression(input)) {
        return processNewExpression(input);
    }

    if (isFunctionExpression(input)) {
        return processFunctionExpression(input);
    }

    if (isIdentifier(input)) {
        return processIdentifier(input);
    }

    if (isSpreadElement(input)) {
        return processSpreadElement(input);
    }

    if (isArrowFunction(input)) {
        return processArrowFunction(input);
    }

    if (isPropertyAccessExpression(input)) {
        return processPropertyAccessExpression(input);
    }

    if (isParenthesizedExpression(input)) {
        return processParenthesizedExpression(input);
    }

    if (isBinaryExpression(input)) {
        return processBinaryExpression(input);
    }

    if (isElementAccessExpression(input)) {
        return processElementAccessExpression(input);
    }

    // special case - regex
    if (isRegularExpressionLiteral(input)) {
        return {
            kind: IntermediateKind.IntermediateRegexLiteral,
            value: input.text,
            asType: undefined,
            typeAssertion: undefined,
        }
    }

    if (isTemplateExpression(input)) {
        return processTemplateExpression(input);
    }

    // if we get here, we do not know how to process this variable
    // tslint:disable-next-line: no-console
    console.log(getClassNames(input), SyntaxKind[ input.kind ]);
    throw new UnsupportedTypeError({
        public: {
            dataPath: DEFAULT_DATA_PATH,
            expected: "CallExpression",
            actual: getClassNames(input)[ 0 ]
        }
    });
}