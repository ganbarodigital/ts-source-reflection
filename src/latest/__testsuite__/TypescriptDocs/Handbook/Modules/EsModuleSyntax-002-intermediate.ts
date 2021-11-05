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
            kind: IntermediateKind.IntermediateVariableDeclarations,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: true,
            variables: [
                {
                    kind: IntermediateKind.IntermediateVarDeclaration,
                    isConstant: false,
                    isReadonly: false,
                    name: "pi",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "3.14",
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
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: true,
            variables: [
                {
                    kind: IntermediateKind.IntermediateLetDeclaration,
                    isConstant: false,
                    isReadonly: false,
                    name: "squareTwo",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "1.41",
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
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: true,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    isConstant: true,
                    isReadonly: false,
                    name: "phi",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "1.61",
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateNumericLiteralType,
                        typeName: "1.61",
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            decorators: [],
            isAbstract: false,
            isDeclared: false,
            isDefaultExport: false,
            isExported: true,
            name: "RandomNumberGenerator",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [],
        },
        {
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: true,
            name: "absolute",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "num",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
            ],
            returnType: undefined,
            inferredReturnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "number",
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
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "num",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            operator: IntermediateExpressionOperator.LESS_THAN,
                            right: {
                                kind: IntermediateKind.IntermediateNumericLiteral,
                                value: "0",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        },
                        thenBlock: {
                            kind: IntermediateKind.IntermediateReturnStatement,
                            expression: {
                                kind: IntermediateKind.IntermediateBinaryExpression,
                                left: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "num",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                operator: IntermediateExpressionOperator.ASTERISK,
                                right: {
                                    kind: IntermediateKind.IntermediatePrefixUnaryExpression,
                                    target: {
                                        kind: IntermediateKind.IntermediateNumericLiteral,
                                        value: "1",
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
                                    operator: IntermediateExpressionOperator.MINUS,
                                },
                            },
                        },
                        elseBlock: undefined,
                    },
                    {
                        kind: IntermediateKind.IntermediateReturnStatement,
                        expression: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "num",
                            typeAssertion: undefined,
                            asType: undefined,
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