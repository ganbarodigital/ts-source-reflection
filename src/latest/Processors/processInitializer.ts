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

import { UnsupportedTypeError, DEFAULT_DATA_PATH, getClassNames } from "@safelytyped/core-types";
import { Expression, isNumericLiteral, isStringLiteral, isCallExpression, isObjectLiteralExpression, isTypeAssertionExpression, isAsExpression, isBigIntLiteral, isArrayLiteralExpression, PropertyAssignment } from "typescript";
import { mustBePropertyAssignment } from "../AST";
import { IntermediateExpression, IntermediateKind, IntermediateObjectLiteral, IntermediateTypeAssertable, IntermediatePropertyAssignment } from "../IntermediateTypes";
import { processTypeNode } from "./processTypeNode";


export function processInitializer(
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
        return {
            kind: IntermediateKind.IntermediateCallableExpression,
            text: input.getText(),
            typeAssertion: undefined,
            asType: undefined,
        }
    }

    if (isObjectLiteralExpression(input)) {
        const retval: IntermediateObjectLiteral = {
            kind: IntermediateKind.IntermediateObjectLiteral,
            properties: [],
            asType: undefined,
            typeAssertion: undefined,
        }

        for (const member of input.properties) {
            const propAssignment = mustBePropertyAssignment(member);
            retval.properties.push(processPropertyAssignment(propAssignment));
        }

        return retval;
    }

    if (isTypeAssertionExpression(input)) {
        const retval = processInitializer(input.expression);
        (retval as IntermediateTypeAssertable).typeAssertion = processTypeNode(input.type);
        return retval;
    }

    if (isAsExpression(input)) {
        const retval = processInitializer(input.expression);
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
        return {
            kind: IntermediateKind.IntermediateArrayLiteralExpression,
            value: input.getText(),
        }
    }

    // if we get here, we do not know how to process this variable
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
        initialiser: processInitializer(input.initializer),
    }
}