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
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Sprite",
                    },
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
                    kind: IntermediateKind.IntermediateEmptyObjectType,
                },
            },
        },
        {
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Scale",
            typeParameters: [
                {
                    kind: IntermediateKind.IntermediateGenericType,
                    name: "TBase",
                    constraint: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Constructor",
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
            inferredReturnType: {
                kind: IntermediateKind.IntermediateIntersectionType,
                typeRefs: [
                    {
                        kind: IntermediateKind.IntermediateAnonymousClassType,
                        members: [
                            {
                                kind: IntermediateKind.IntermediateConstructorSignature,
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
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "Scaling",
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                isOptional: false,
                                isReadonly: false,
                                name: "prototype",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateUndiscoverableType,
                                },
                            },
                        ],
                    },
                    {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "TBase",
                    },
                ],
            },
            hasBody: true,
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
                    name: "EightBitSprite",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "Scale",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "Sprite",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                        ],
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateIntersectionType,
                        typeRefs: [
                            {
                                kind: IntermediateKind.IntermediateAnonymousClassType,
                                members: [
                                    {
                                        kind: IntermediateKind.IntermediateConstructorSignature,
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
                                            kind: IntermediateKind.IntermediateUndiscoverableType,
                                        },
                                    },
                                    {
                                        kind: IntermediateKind.IntermediateTypedPropertySignature,
                                        isOptional: false,
                                        isReadonly: false,
                                        name: "prototype",
                                        typeRef: {
                                            kind: IntermediateKind.IntermediateUndiscoverableType,
                                        },
                                    },
                                ],
                            },
                            {
                                kind: IntermediateKind.IntermediateTypeofTypeReference,
                                entityName: "Sprite",
                            },
                        ],
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
                    name: "flappySprite",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNewExpression,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "EightBitSprite",
                        },
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateStringLiteral,
                                value: "Bird",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                        ],
                        asType: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateIntersectionType,
                        typeRefs: [
                            {
                                kind: IntermediateKind.IntermediateUndiscoverableType,
                            },
                            {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Sprite",
                            },
                        ],
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateCallExpression,
            expression: {
                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                target: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "flappySprite",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                propName: "setScale",
            },
            typeArguments: [],
            arguments: [
                {
                    kind: IntermediateKind.IntermediateNumericLiteral,
                    value: "0.8",
                    asType: undefined,
                    typeAssertion: undefined,
                },
            ],
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