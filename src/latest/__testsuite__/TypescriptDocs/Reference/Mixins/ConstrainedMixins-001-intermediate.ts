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
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            decorators: [],
            isAbstract: false,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Sprite",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "name",
                    initializer: {
                        kind: IntermediateKind.IntermediateStringLiteral,
                        value: "",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "x",
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "0",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "y",
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "0",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
                {
                    kind: IntermediateKind.IntermediateConstructorDeclaration,
                    docBlock: undefined,
                    accessModifier: undefined,
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedConstructorParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            isReadonly: false,
                            setsPropertyWithScope: undefined,
                            name: "name",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        }
                    ],
                    returnType: undefined,
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isDefaultExport: false,
            isExported: false,
            name: "Constructor",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateConstructorType,
                parameters: [
                    {
                        kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                        isOptional: false,
                        isReadonly: false,
                        name: "args",
                        typeRef: {
                            kind: IntermediateKind.IntermediateRestType,
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
                    kind: IntermediateKind.IntermediateEmptyObjectType,
                },
            },
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isDefaultExport: false,
            isExported: false,
            name: "GConstructor",
            typeParameters: [
                {
                    kind: IntermediateKind.IntermediateGenericType,
                    name: "T",
                    constraint: undefined,
                    defaultType: {
                        kind: IntermediateKind.IntermediateEmptyObjectType,
                    },
                },
            ],
            typeRef: {
                kind: IntermediateKind.IntermediateConstructorType,
                parameters: [
                    {
                        kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                        isOptional: false,
                        isReadonly: false,
                        name: "args",
                        typeRef: {
                            kind: IntermediateKind.IntermediateRestType,
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
                    kind: IntermediateKind.IntermediateFixedTypeReference,
                    typeName: "T",
                },
            },
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isDefaultExport: false,
            isExported: false,
            name: "Positionable",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateGenericTypeReference,
                typeName: "GConstructor",
                typeArguments: [
                    {
                        kind: IntermediateKind.IntermediateAnonymousClassType,
                        members: [
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                isOptional: false,
                                isReadonly: false,
                                name: "setPos",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateFunctionTypeSignature,
                                    typeParameters: [],
                                    parameters: [
                                        {
                                            kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                            isOptional: false,
                                            isReadonly: false,
                                            name: "x",
                                            typeRef: {
                                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                typeName: "number",
                                            },
                                        },
                                        {
                                            kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                            isOptional: false,
                                            isReadonly: false,
                                            name: "y",
                                            typeRef: {
                                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                typeName: "number",
                                            },
                                        },
                                    ],
                                    returnType: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "void",
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isDefaultExport: false,
            isExported: false,
            name: "Spritable",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateGenericTypeReference,
                typeName: "GConstructor",
                typeArguments: [
                    {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Sprite",
                    },
                ],
            },
        },

        {
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isDefaultExport: false,
            isExported: false,
            name: "Loggable",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateGenericTypeReference,
                typeName: "GConstructor",
                typeArguments: [
                    {
                        kind: IntermediateKind.IntermediateAnonymousClassType,
                        members: [
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                isOptional: false,
                                isReadonly: false,
                                name: "print",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateFunctionTypeSignature,
                                    typeParameters: [],
                                    parameters: [],
                                    returnType: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "void",
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Jumpable",
            typeParameters: [
                {
                    kind: IntermediateKind.IntermediateGenericType,
                    name: "TBase",
                    constraint: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Positionable",
                    },
                    defaultType: undefined,
                },
            ],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "Base",
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "TBase",
                    },
                    initializer: undefined,
                },
            ],
            returnType: undefined,
            hasBody: true,
        },
    ],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;