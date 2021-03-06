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
    IntermediateSourceFile,
} from "../../../../IntermediateTypes";

const expectedResult: IntermediateSourceFile = {
    kind: IntermediateKind.IntermediateSourceFile,
    children: [
        {
            kind: IntermediateKind.IntermediateForLoop,
            initializer: {
                kind: IntermediateKind.IntermediateVariableDeclarations,
                docBlock: undefined,
                isDeclared: false,
                isDefaultExport: false,
                isExported: false,
                variables: [
                    {
                        kind: IntermediateKind.IntermediateVarDeclaration,
                        isConstant: false,
                        isReadonly: false,
                        name: "i",
                        typeRef: undefined,
                        initializer: {
                            kind: IntermediateKind.IntermediateNumericLiteral,
                            value: "0",
                            typeAssertion: undefined,
                            asType: undefined,
                        },
                        inferredType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "number",
                        },
                    },
                ],
            },
            condition: {
                kind: IntermediateKind.IntermediateBinaryExpression,
                left: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "i",
                    typeAssertion: undefined,
                    asType: undefined,
                },
                operator: IntermediateExpressionOperator.LESS_THAN,
                right: {
                    kind: IntermediateKind.IntermediateNumericLiteral,
                    value: "10",
                    typeAssertion: undefined,
                    asType: undefined,
                },
            },
            incrementor: {
                kind: IntermediateKind.IntermediatePostfixUnaryExpression,
                target: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "i",
                    typeAssertion: undefined,
                    asType: undefined,
                },
                operator: IntermediateExpressionOperator.PLUS_PLUS,
            },
            contents: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediateParenthesizedExpression,
                            expression: {
                                kind: IntermediateKind.IntermediateFunctionExpression,
                                name: undefined,
                                typeParameters: [],
                                parameters: [
                                    {
                                        kind: IntermediateKind.IntermediateUntypedCallableParameterDeclaration,
                                        decorators: [],
                                        isOptional: false,
                                        name: "i",
                                        initializer: undefined,
                                        inferredType: {
                                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                            typeName: "number",
                                        },
                                    },
                                ],
                                returnType: undefined,
                                inferredReturnType: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "void",
                                },
                                hasBody: true,
                                body: {
                                    kind: IntermediateKind.IntermediateBlock,
                                    children: [
                                        {
                                            kind: IntermediateKind.IntermediateCallExpression,
                                            expression: {
                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                name: "setTimeout",
                                                typeAssertion: undefined,
                                                asType: undefined,
                                            },
                                            typeArguments: [],
                                            arguments: [
                                                {
                                                    kind: IntermediateKind.IntermediateFunctionExpression,
                                                    name: undefined,
                                                    typeParameters: [],
                                                    parameters: [],
                                                    returnType: undefined,
                                                    inferredReturnType: {
                                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                        typeName: "void",
                                                    },
                                                    hasBody: true,
                                                    body: {
                                                        kind: IntermediateKind.IntermediateBlock,
                                                        children: [
                                                            {
                                                                kind: IntermediateKind.IntermediateCallExpression,
                                                                expression: {
                                                                    kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                                                    target: {
                                                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                                                        name: "console",
                                                                        typeAssertion: undefined,
                                                                        asType: undefined,
                                                                    },
                                                                    propName: "log",
                                                                },
                                                                typeArguments: [],
                                                                arguments: [
                                                                    {
                                                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                                                        name: "i",
                                                                        typeAssertion: undefined,
                                                                        asType: undefined,
                                                                    },
                                                                ],
                                                                inferredReturnType: {
                                                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                                    typeName: "void",
                                                                },
                                                                typeAssertion: undefined,
                                                                asType: undefined,
                                                            },
                                                        ],
                                                    },
                                                },
                                                {
                                                    kind: IntermediateKind.IntermediateBinaryExpression,
                                                    left: {
                                                        kind: IntermediateKind.IntermediateNumericLiteral,
                                                        value: "100",
                                                        typeAssertion: undefined,
                                                        asType: undefined,
                                                    },
                                                    operator: IntermediateExpressionOperator.ASTERISK,
                                                    right: {
                                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                                        name: "i",
                                                        typeAssertion: undefined,
                                                        asType: undefined,
                                                    },
                                                },
                                            ],
                                            inferredReturnType: {
                                                kind: IntermediateKind.IntermediateUndiscoverableType,
                                            },
                                            typeAssertion: undefined,
                                            asType: undefined,
                                        },
                                    ],
                                },
                            },
                            typeAssertion: undefined,
                            asType: undefined,
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "i",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        ],
                        inferredReturnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "void",
                        },
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                ],
            },
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
}

export default expectedResult;