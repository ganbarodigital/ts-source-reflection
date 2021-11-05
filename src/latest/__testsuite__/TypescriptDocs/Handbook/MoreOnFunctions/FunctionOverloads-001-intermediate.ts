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
    kind: IntermediateKind.IntermediateSourceFile,
    children: [
        {
            kind: IntermediateKind.IntermediateFunctionOverload,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "makeDate",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "timestamp",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
            ],
            returnType: {
                kind: IntermediateKind.IntermediateFixedTypeReference,
                typeName: "Date",
            },
            hasBody: false,
        },
        {
            kind: IntermediateKind.IntermediateFunctionOverload,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "makeDate",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "m",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "d",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "y",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
            ],
            returnType: {
                kind: IntermediateKind.IntermediateFixedTypeReference,
                typeName: "Date",
            },
            hasBody: false,
        },
        {
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "makeDate",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "mOrTimestamp",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: true,
                    isReadonly: false,
                    name: "d",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: true,
                    isReadonly: false,
                    name: "y",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
            ],
            returnType: {
                kind: IntermediateKind.IntermediateFixedTypeReference,
                typeName: "Date",
            },
            hasBody: true,
            body: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateIfStatement,
                        condition: {
                            kind: IntermediateKind.IntermediateBinaryExpression,
                            left: {
                                kind: IntermediateKind.IntermediateBinaryExpression,
                                left: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "d",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                operator: IntermediateExpressionOperator.EXCLAMATION_EQUALS_EQUALS,
                                right: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "undefined",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            },
                            operator: IntermediateExpressionOperator.AMPERSAND_AMPERSAND,
                            right: {
                                kind: IntermediateKind.IntermediateBinaryExpression,
                                left: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "y",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                operator: IntermediateExpressionOperator.EXCLAMATION_EQUALS_EQUALS,
                                right: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "undefined",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            },
                        },
                        thenBlock: {
                            kind: IntermediateKind.IntermediateBlock,
                            children: [
                                {
                                    kind: IntermediateKind.IntermediateReturnStatement,
                                    expression: {
                                        kind: IntermediateKind.IntermediateNewExpression,
                                        typeRef: {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Date",
                                        },
                                        arguments: [
                                            {
                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                name: "y",
                                                typeAssertion: undefined,
                                                asType: undefined,
                                            },
                                            {
                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                name: "mOrTimestamp",
                                                typeAssertion: undefined,
                                                asType: undefined,
                                            },
                                            {
                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                name: "d",
                                                typeAssertion: undefined,
                                                asType: undefined,
                                            },
                                        ],
                                        asType: undefined,
                                    },
                                },
                            ],
                        },
                        elseBlock: {
                            kind: IntermediateKind.IntermediateBlock,
                            children: [
                                {
                                    kind: IntermediateKind.IntermediateReturnStatement,
                                    expression: {
                                        kind: IntermediateKind.IntermediateNewExpression,
                                        typeRef: {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Date",
                                        },
                                        arguments: [
                                            {
                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                name: "mOrTimestamp",
                                                typeAssertion: undefined,
                                                asType: undefined,
                                            },
                                        ],
                                        asType: undefined,
                                    },
                                },
                            ],
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
