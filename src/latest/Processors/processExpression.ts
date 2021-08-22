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
    isCallExpression,
    isFunctionExpression,
    isIdentifier,
    isNewExpression,
    isNumericLiteral,
    isObjectLiteralExpression,
    isPropertyAccessExpression,
    isSpreadElement,
    isStringLiteral,
    isTypeAssertionExpression,
    PropertyAssignment,
    SyntaxKind
} from "typescript";
import * as AST from "../AST";
import {
    IntermediateExpression,
    IntermediateKind,
    IntermediateObjectLiteral,
    IntermediatePropertyAssignment,
    IntermediateTypeAssertable
} from "../IntermediateTypes";
import { processArrayLiteralExpression } from "./processArrayLiteralExpression";
import { processArrowFunction } from "./processArrowFunction";
import { processCallExpression } from "./processCallExpression";
import { processFunctionExpression } from "./processFunctionExpression";
import { processPropertyAccessExpression } from "./processPropertyAccessExpression";
import { processSpreadElement } from "./processSpreadElement";
import { processTypeNode } from "./processTypeNode";

export function processExpression(
    input: Expression
): IntermediateExpression
{
    // we will refactor this later on
    if (isNumericLiteral(input)) {
        return {
            kind: IntermediateKind.IntermediateNumericLiteral,
            value: input.text,
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
        const retval: IntermediateObjectLiteral = {
            kind: IntermediateKind.IntermediateObjectLiteral,
            properties: [],
            asType: undefined,
            typeAssertion: undefined,
        }

        for (const member of input.properties) {
            const propAssignment = AST.mustBePropertyAssignment(member);
            retval.properties.push(processPropertyAssignment(propAssignment));
        }

        return retval;
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
        }
    }

    if (AST.isFalseKeyword(input)) {
        return {
            kind: IntermediateKind.IntermediateBooleanLiteral,
            value: "false",
        }
    }

    if (isNewExpression(input)) {
        // temporary
        return {
            kind: IntermediateKind.IntermediateNewExpression,
            typeRef: {
                kind: IntermediateKind.IntermediateFixedTypeReference,
                typeName: input.expression.getText(),
            },
            arguments: [],
        }
    }

    if (isFunctionExpression(input)) {
        return processFunctionExpression(input);
    }

    if (isIdentifier(input)) {
        return {
            kind: IntermediateKind.IntermediateIdentifierReference,
            name: input.text,
        }
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

    // if we get here, we do not know how to process this variable
    // tslint:disable-next-line: no-console
    console.log(getClassNames(input), SyntaxKind[input.kind]);
    throw new UnsupportedTypeError({
        public: {
            dataPath: DEFAULT_DATA_PATH,
            expected: "CallExpression",
            actual: getClassNames(input)[0]
        }
    });
}

function processPropertyAssignment(
    input: PropertyAssignment
): IntermediatePropertyAssignment
{
    return {
        kind: IntermediateKind.IntermediatePropertyAssignment,
        propertyName: input.name.getText(),
        initializer: processExpression(input.initializer),
    }
}