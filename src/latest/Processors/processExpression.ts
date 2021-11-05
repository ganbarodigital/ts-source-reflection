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
    isClassExpression,
    isConditionalExpression,
    isElementAccessExpression,
    isFunctionExpression,
    isIdentifier,
    isNewExpression,
    isNonNullExpression,
    isNumericLiteral,
    isObjectLiteralExpression,
    isParenthesizedExpression,
    isPostfixUnaryExpression,
    isPrefixUnaryExpression,
    isPropertyAccessExpression,
    isRegularExpressionLiteral,
    isSpreadElement,
    isStringLiteral,
    isTemplateExpression,
    isTypeAssertionExpression, isTypeOfExpression, SyntaxKind
} from "typescript";
import { AST } from "../AST";
import {
    IntermediateExpression,
    IntermediateKind,
    IntermediateTypeAssertable
} from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { processArrayLiteralExpression } from "./processArrayLiteralExpression";
import { processArrowFunction } from "./processArrowFunction";
import { processBinaryExpression } from "./processBinaryExpression";
import { processCallExpression } from "./processCallExpression";
import { processClassExpression } from "./processClassExpression";
import { processConditionalExpression } from "./processConditionalExpression";
import { processElementAccessExpression } from "./processElementAccessExpression";
import { processFunctionExpression } from "./processFunctionExpression";
import { processIdentifier } from "./processIdentifier";
import { ProcessingContext } from "./ProcessingContext";
import { processIntermediateBinaryExpression } from "./processIntermediateBinaryExpression";
import { processNewExpression } from "./processNewExpression";
import { processNonNullExpression } from "./processNonNullExpression";
import { processNumericLiteral } from "./processNumericLiteral";
import { processObjectLiteralExpression } from "./processObjectLiteralExpression";
import { processParenthesizedExpression } from "./processParenthesizedExpression";
import { processPostfixUnaryExpression } from "./processPostfixUnaryExpression";
import { processPrefixUnaryExpression } from "./processPrefixUnaryExpression";
import { processPropertyAccessExpression } from "./processPropertyAccessExpression";
import { processSpreadElement } from "./processSpreadElement";
import { processStringLiteral } from "./processStringLiteral";
import { processTemplateExpression } from "./processTemplateExpression";
import { processTypeNode } from "./processTypeNode";
import { processTypeOfExpression } from "./processTypeOfExpression";

export function processExpression(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: Expression
): IntermediateExpression {
    if (isNumericLiteral(input)) {
        return processNumericLiteral(processCtx, input);
    }

    if (isStringLiteral(input)) {
        return processStringLiteral(processCtx, input);
    }

    if (AST.isNullLiteral(input)) {
        return {
            kind: IntermediateKind.IntermediateNullLiteral,
        }
    }

    if (isCallExpression(input)) {
        return processCallExpression(processCtx, parentCtx, input);
    }

    if (isObjectLiteralExpression(input)) {
        return processObjectLiteralExpression(processCtx, parentCtx, input);
    }

    if (isTypeAssertionExpression(input)) {
        const retval = processExpression(processCtx, parentCtx, input.expression);
        (retval as IntermediateTypeAssertable).typeAssertion = processTypeNode(processCtx, parentCtx, input.type);
        return retval;
    }

    if (isAsExpression(input)) {
        const retval = processExpression(processCtx, parentCtx, input.expression);
        (retval as IntermediateTypeAssertable).asType = processTypeNode(processCtx, parentCtx, input.type);
        return retval;
    }

    if (isBigIntLiteral(input)) {
        return {
            kind: IntermediateKind.IntermediateBigintLiteral,
            value: input.text,
        }
    }

    if (isArrayLiteralExpression(input)) {
        return processArrayLiteralExpression(processCtx, input);
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
        return processNewExpression(processCtx, parentCtx, input);
    }

    if (isFunctionExpression(input)) {
        return processFunctionExpression(processCtx, input);
    }

    if (isIdentifier(input)) {
        return processIdentifier(processCtx, input);
    }

    if (isSpreadElement(input)) {
        return processSpreadElement(processCtx, parentCtx, input);
    }

    if (isArrowFunction(input)) {
        return processArrowFunction(processCtx, parentCtx, input);
    }

    if (isPropertyAccessExpression(input)) {
        return processPropertyAccessExpression(processCtx, parentCtx, input);
    }

    if (isParenthesizedExpression(input)) {
        return processParenthesizedExpression(processCtx, parentCtx, input);
    }

    if (isBinaryExpression(input)) {
        // a binary expression can be so many things, so we make an attempt
        // to transform the resulting IntermediateBinaryExpression into
        // something more specific
        return processIntermediateBinaryExpression(
            processBinaryExpression(processCtx, input)
        );
    }

    if (isElementAccessExpression(input)) {
        return processElementAccessExpression(processCtx, parentCtx, input);
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
        return processTemplateExpression(processCtx, parentCtx, input);
    }

    if (isConditionalExpression(input)) {
        return processConditionalExpression(processCtx, input);
    }

    if (isPostfixUnaryExpression(input)) {
        return processPostfixUnaryExpression(processCtx, parentCtx, input);
    }

    if (isPrefixUnaryExpression(input)) {
        return processPrefixUnaryExpression(processCtx, parentCtx, input);
    }

    if (isNonNullExpression(input)) {
        return processNonNullExpression(processCtx, parentCtx, input);
    }

    if (isClassExpression(input)) {
        return processClassExpression(processCtx, parentCtx, input);
    }

    if (isTypeOfExpression(input)) {
        return processTypeOfExpression(processCtx, parentCtx, input);
    }

    if (AST.isThisExpression(input)) {
        return {
            kind: IntermediateKind.IntermediateThisIdentifier,
            name: "this",
        }
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