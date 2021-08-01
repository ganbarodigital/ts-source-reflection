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
import { Expression, isAsExpression, isBigIntLiteral, isCallExpression, isNumericLiteral, isObjectLiteralExpression, isStringLiteral, isTypeAssertionExpression, NodeFlags, PropertyAssignment, Statement, VariableDeclaration } from "typescript";
import * as AST from "../AST";
import { isNodeExported } from "../AST";
import { mustBePropertyAssignment } from "../AST/mustBePropertyAssignment";
import {
    IntermediateExpression,
    IntermediateKind,
    IntermediateObjectLiteral,
    IntermediatePropertyAssignment,
    IntermediateSourceFile,
    IntermediateTypeAssertable,
    IntermediateVariableDeclaration,
    IntermediateVariableDeclarations
} from "../IntermediateTypes";
import { processTypeNode } from "./processTypeNode";
import { StatementProcessor } from "./StatementProcessor";

export const processVariableStatement: StatementProcessor = (
    sourceFile: IntermediateSourceFile,
    input: Statement
): IntermediateVariableDeclarations => {
    // make sure we have the right kind of statement
    const variableStmt = AST.mustBeVariableStatement(input);

    // this will be our return valie
    const retval: IntermediateVariableDeclarations = {
        kind: IntermediateKind.IntermediateVariableDeclarations,
        variables: []
    }

    // some information about the variables are actually stored
    // at the list level (doh!)
    const contextFlags = {
        exported: isNodeExported(input),
        constant: false,
    }
    // tslint:disable-next-line: no-bitwise
    if (variableStmt.declarationList.flags & NodeFlags.Const) {
        contextFlags.constant = true;
    }

    // what do we have?
    for (const member of variableStmt.declarationList.declarations) {
        retval.variables.push(
            processVariableDeclaration(member, contextFlags)
        );
    }

    // all done
    return retval;
}

function processVariableDeclaration(
    input: VariableDeclaration,
    contextFlags: {
        exported: boolean;
        constant: boolean;
    }
): IntermediateVariableDeclaration
{
    // this will be our return value
    const retval: IntermediateVariableDeclaration = {
        kind: IntermediateKind.IntermediateVariableDeclaration,
        docBlock: {
            kind: IntermediateKind.IntermediateDocBlock,
            text: '',
        },
        constant: contextFlags.constant,
        exported: contextFlags.exported,
        variableName: input.name.getText(),
        initialiser: undefined,
        typeRef: undefined,
    }

    // does this variable have an explicit type?
    if (input.type) {
        retval.typeRef = processTypeNode(input.type);
    }

    // does this variable have an initial value?
    if (input.initializer) {
        retval.initialiser = processInitialiser(input.initializer);
    }

    // all done
    return retval;
}

function processInitialiser(
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
        const retval = processInitialiser(input.expression);
        (retval as IntermediateTypeAssertable).typeAssertion = processTypeNode(input.type);
        return retval;
    }

    if (isAsExpression(input)) {
        const retval = processInitialiser(input.expression);
        (retval as IntermediateTypeAssertable).asType = processTypeNode(input.type);
        return retval;
    }

    if (isBigIntLiteral(input)) {
        return {
            kind: IntermediateKind.IntermediateBigintLiteral,
            value: input.text,
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
        initialiser: processInitialiser(input.initializer),
    }
}