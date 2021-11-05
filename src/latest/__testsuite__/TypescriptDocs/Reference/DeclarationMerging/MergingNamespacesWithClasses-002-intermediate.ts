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
            name: "buildLabel",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "name",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    initializer: undefined,
                },
            ],
            returnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "string",
            },
            hasBody: true,
            body: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateReturnStatement,
                        expression: {
                            kind: IntermediateKind.IntermediateBinaryExpression,
                            left: {
                                kind: IntermediateKind.IntermediateBinaryExpression,
                                left: {
                                    kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                    target: {
                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                        name: "buildLabel",
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
                                    propName: "prefix",
                                },
                                operator: IntermediateExpressionOperator.PLUS,
                                right: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "name",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            },
                            operator: IntermediateExpressionOperator.PLUS,
                            right: {
                                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                target: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "buildLabel",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                propName: "suffix",
                            },
                        },
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateNamespace,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "buildLabel",
            children: [
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
                            name: "suffix",
                            typeRef: undefined,
                            initializer: {
                                kind: IntermediateKind.IntermediateStringLiteral,
                                value: "",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            inferredType: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
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
                            name: "prefix",
                            typeRef: undefined,
                            initializer: {
                                kind: IntermediateKind.IntermediateStringLiteral,
                                value: "Hello, ",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            inferredType: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                        },
                    ],
                },
            ],
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
}

export default expectedResult;