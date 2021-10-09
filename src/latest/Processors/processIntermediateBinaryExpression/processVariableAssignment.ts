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

import {
    DEFAULT_DATA_PATH,
    UnreachableCodeError,
    UnsupportedTypeError
} from "@safelytyped/core-types";
import {
    AnyIntermediatePropertyAssignment,
    IntermediateBinaryExpression,
    IntermediateExpression,
    IntermediateExpressionOperator,
    IntermediateIdentifierName,
    IntermediateKind,
    IntermediateOmittedExpression,
    mustBeSpecificIntermediateBinaryExpression
} from "../../IntermediateTypes";

type IntermediateBinaryExpressionWithAssignment =
    IntermediateBinaryExpression
    &
{
    operator: IntermediateExpressionOperator.EQUALS;
}

/**
 * processVariableAssignment() is a post-processor for the Intermediate layer.
 * Use it to convert an {@link IntermediateBinaryExpression} into one of
 * the {@link IntermediateVariableAssignment} sub-types.
 *
 * @remarks
 *
 * We do this to increase the value that the Intermediate layer provides,
 * by converting the (somewhat generic) binary expression into a specific
 * operation that's much easier for Intermediate layer consumers to
 * understand.
 *
 * @param input
 */
export function processVariableAssignment(
    input: IntermediateBinaryExpression
): IntermediateExpression
{
    // make sure we have the right kind of binary expression
    mustBeSpecificIntermediateBinaryExpression<IntermediateBinaryExpressionWithAssignment>(
        [IntermediateExpressionOperator.EQUALS],
        input,
    )

    // we're going to convert the left-hand side of the binary expression
    // into one of our available IntermediateVariableAssignment types
    switch (input.left.kind) {
        case IntermediateKind.IntermediateArrayLiteral:
            return {
                kind: IntermediateKind.IntermediateArrayBindingVarAssignment,
                targets: extractElementsFromArrayLiteral(input.left.elements),
                initializer: input.right,
            }

        case IntermediateKind.IntermediateObjectLiteral:
            return {
                kind: IntermediateKind.IntermediateDestructuredVarAssignment,
                targets: extractMembersFromObjectLiteral(input.left.properties),
                initializer: input.right,
            }

        case IntermediateKind.IntermediateIdentifierReference:
            return {
                kind: IntermediateKind.IntermediateVarAssignment,
                target: input.left,
                initializer: input.right,
            }

        // we will add any other assignment convertions here in the future
    }

    // if we get here, we're out of ideas
    return input;
}

function extractElementsFromArrayLiteral(
    input: IntermediateExpression[]
): (IntermediateIdentifierName | IntermediateOmittedExpression)[]
{
    // this will be our return value
    const retval: ReturnType<typeof extractElementsFromArrayLiteral> = [];

    for (const element of input) {
        switch (element.kind) {
            case IntermediateKind.IntermediateIdentifierReference:
                retval.push(element);
                break;
            default:
                throw new UnreachableCodeError({
                    public: {
                        reason: "unsupported array elements received: " + IntermediateKind[element.kind]
                    }
                })
        }
    }

    // all done
    return retval;
}

function extractMembersFromObjectLiteral(
    input: AnyIntermediatePropertyAssignment[]
): IntermediateIdentifierName[]
{
    // this will be our return value
    const retval: ReturnType<typeof extractMembersFromObjectLiteral> = [];

    for (const property of input) {
        switch (property.kind) {
            case IntermediateKind.IntermediateShorthandPropertyAssignment:
                retval.push({
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: processIntermediateIdentifierNameForAssignment(property.name),
                    asType: undefined,
                    typeAssertion: undefined,
                });
                break;
            case IntermediateKind.IntermediatePropertyAssignment:
                retval.push(processIntermediateIdentifierNameForAssignment(property.propertyName));
                break;
        }
    }

    // all done
    return retval;
}

function processIntermediateIdentifierNameForAssignment(
    input: IntermediateIdentifierName
): string
{
    if (typeof input === "string") {
        return input;
    }

    switch (input.kind) {
        case IntermediateKind.IntermediateIdentifierReference:
            return input.name;
        case IntermediateKind.IntermediateNumericLiteral:
            return input.value;
        case IntermediateKind.IntermediateStringLiteral:
            return input.value;
        default:
            throw new UnsupportedTypeError({
                public: {
                    dataPath: DEFAULT_DATA_PATH,
                    expected: "a simple identifier name",
                    actual: IntermediateKind[input.kind],
                }
            });
    }
}