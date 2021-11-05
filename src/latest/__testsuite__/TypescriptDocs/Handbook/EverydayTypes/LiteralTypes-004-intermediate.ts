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
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "compare",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "a",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "b",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    initializer: undefined,
                },
            ],
            returnType: {
                kind: IntermediateKind.IntermediateUnionType,
                typeRefs: [
                    {
                        kind: IntermediateKind.IntermediateNumericLiteralType,
                        typeName: "-1",
                    },
                    {
                        kind: IntermediateKind.IntermediateNumericLiteralType,
                        typeName: "0",
                    },
                    {
                        kind: IntermediateKind.IntermediateNumericLiteralType,
                        typeName: "1",
                    },
                ],
            },
            hasBody: true,
            body: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateReturnStatement,
                        expression: {
                            whenTrue: {
                                kind: IntermediateKind.IntermediateNumericLiteral,
                                value: "0",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            whenFalse: {
                                whenTrue: {
                                    kind: IntermediateKind.IntermediateNumericLiteral,
                                    value: "1",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                whenFalse: {
                                    kind: IntermediateKind.IntermediatePrefixUnaryExpression,
                                    target: {
                                        kind: IntermediateKind.IntermediateNumericLiteral,
                                        value: "1",
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
                                    operator: IntermediateExpressionOperator.MINUS,
                                },
                                kind: IntermediateKind.IntermediateConditionalExpression,
                                condition: {
                                    kind: IntermediateKind.IntermediateBinaryExpression,
                                    left: {
                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                        name: "a",
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
                                    operator: IntermediateExpressionOperator.GREATER_THAN,
                                    right: {
                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                        name: "b",
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
                                },
                            },
                            kind: IntermediateKind.IntermediateConditionalExpression,
                            condition: {
                                kind: IntermediateKind.IntermediateBinaryExpression,
                                left: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "a",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                operator: IntermediateExpressionOperator.EQUALS_EQUALS_EQUALS,
                                right: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "b",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            },
                        },
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