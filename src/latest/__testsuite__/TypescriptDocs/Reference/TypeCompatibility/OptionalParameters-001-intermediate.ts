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
    IntermediateKind,
    IntermediateSourceFile
} from "../../../../IntermediateTypes";

const expectedResult: IntermediateSourceFile = {
    children: [
        {
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "invokeLater",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "args",
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "any",
                        },
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "callback",
                    typeRef: {
                        kind: IntermediateKind.IntermediateFunctionTypeSignature,
                        typeParameters: [],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateRestCallableParameterSignature,
                                parameter: {
                                    kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                    isOptional: false,
                                    isReadonly: false,
                                    name: "args",
                                    typeRef: {
                                        kind: IntermediateKind.IntermediateArrayTypeReference,
                                        typeRef: {
                                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                            typeName: "any",
                                        },
                                    },
                                },
                            },
                        ],
                        returnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "void",
                        },
                    },
                    initializer: undefined,
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
                children: [],
            },
        },
        {
            kind: IntermediateKind.IntermediateCallExpression,
            expression: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "invokeLater",
                asType: undefined,
                typeAssertion: undefined,
            },
            typeArguments: [],
            arguments: [
                {
                    kind: IntermediateKind.IntermediateArrayLiteral,
                    elements: [
                        {
                            kind: IntermediateKind.IntermediateNumericLiteral,
                            value: "1",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                        {
                            kind: IntermediateKind.IntermediateNumericLiteral,
                            value: "2",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                    ],
                    asType: undefined,
                    typeAssertion: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateArrowFunction,
                    typeParameters: [],
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateUntypedCallableParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            name: "x",
                            initializer: undefined,
                            inferredType: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "any",
                            },
                        },
                        {
                            kind: IntermediateKind.IntermediateUntypedCallableParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            name: "y",
                            initializer: undefined,
                            inferredType: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "any",
                            },
                        },
                    ],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "void",
                    },
                    hasBody: true,
                },
            ],
            inferredReturnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "void",
            },
            asType: undefined,
            typeAssertion: undefined,
        },
        {
            kind: IntermediateKind.IntermediateCallExpression,
            expression: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "invokeLater",
                asType: undefined,
                typeAssertion: undefined,
            },
            typeArguments: [],
            arguments: [
                {
                    kind: IntermediateKind.IntermediateArrayLiteral,
                    elements: [
                        {
                            kind: IntermediateKind.IntermediateNumericLiteral,
                            value: "1",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                        {
                            kind: IntermediateKind.IntermediateNumericLiteral,
                            value: "2",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                    ],
                    asType: undefined,
                    typeAssertion: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateArrowFunction,
                    typeParameters: [],
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateUntypedCallableParameterDeclaration,
                            decorators: [],
                            isOptional: true,
                            name: "x",
                            initializer: undefined,
                            inferredType: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "any",
                            },
                        },
                        {
                            kind: IntermediateKind.IntermediateUntypedCallableParameterDeclaration,
                            decorators: [],
                            isOptional: true,
                            name: "y",
                            initializer: undefined,
                            inferredType: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "any",
                            },
                        },
                    ],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "void",
                    },
                    hasBody: true,
                },
            ],
            inferredReturnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "void",
            },
            asType: undefined,
            typeAssertion: undefined,
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;