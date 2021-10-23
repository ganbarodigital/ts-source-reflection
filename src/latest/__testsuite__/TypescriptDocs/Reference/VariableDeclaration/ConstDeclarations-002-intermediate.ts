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
    IntermediateExpressionOperator,
    IntermediateKind,
    IntermediateSourceFile
} from "../../../../IntermediateTypes";

const expectedResult: IntermediateSourceFile = {
    children: [
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    docBlock: undefined,
                    isConstant: true,
                    isReadonly: false,
                    name: "numLivesForCat",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "9",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateNumericLiteralType,
                        typeName: "9",
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    docBlock: undefined,
                    isConstant: true,
                    isReadonly: false,
                    name: "kitty",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateObjectLiteral,
                        properties: [
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "name",
                                initializer: {
                                    kind: IntermediateKind.IntermediateStringLiteral,
                                    value: "Aurora",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "numLives",
                                initializer: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "numLivesForCat",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            },
                        ],
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateAnonymousClassType,
                        members: [
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                docBlock: undefined,
                                isOptional: false,
                                isReadonly: false,
                                name: "name",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "string",
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                docBlock: undefined,
                                isOptional: false,
                                isReadonly: false,
                                name: "numLives",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "number",
                                },
                            },
                        ],
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateBinaryExpression,
            left: {
                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                target: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "kitty",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                propName: "name",
            },
            operator: IntermediateExpressionOperator.EQUALS,
            right: {
                kind: IntermediateKind.IntermediateStringLiteral,
                value: "Rory",
                asType: undefined,
                typeAssertion: undefined,
            },
        },
        {
            kind: IntermediateKind.IntermediateBinaryExpression,
            left: {
                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                target: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "kitty",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                propName: "name",
            },
            operator: IntermediateExpressionOperator.EQUALS,
            right: {
                kind: IntermediateKind.IntermediateStringLiteral,
                value: "Kitty",
                asType: undefined,
                typeAssertion: undefined,
            },
        },
        {
            kind: IntermediateKind.IntermediateBinaryExpression,
            left: {
                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                target: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "kitty",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                propName: "name",
            },
            operator: IntermediateExpressionOperator.EQUALS,
            right: {
                kind: IntermediateKind.IntermediateStringLiteral,
                value: "Cat",
                asType: undefined,
                typeAssertion: undefined,
            },
        },
        {
            kind: IntermediateKind.IntermediatePostfixUnaryExpression,
            target: {
                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                target: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "kitty",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                propName: "numLives",
            },
            operator: IntermediateExpressionOperator.MINUS_MINUS,
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;