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
    IntermediateSourceFile,
} from "../../../../IntermediateTypes";

const expectedResult: IntermediateSourceFile = {
    kind: IntermediateKind.IntermediateSourceFile,
    children: [
        {
            kind: IntermediateKind.IntermediateImportDeclaration,
            isTypeOnly: false,
            items: [],
            source: {
                kind: IntermediateKind.IntermediateStringLiteral,
                value: "reflect-metadata",
                typeAssertion: undefined,
                asType: undefined,
            },
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    isConstant: true,
                    isReadonly: false,
                    name: "formatMetadataKey",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "Symbol",
                            typeAssertion: undefined,
                            asType: undefined,
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateStringLiteral,
                                value: "format",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        ],
                        inferredReturnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "symbol",
                        },
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateSymbolType,
                        identifierName: "formatMetadataKey",
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "format",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "formatString",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    initializer: undefined,
                },
            ],
            returnType: undefined,
            inferredReturnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "any",
            },
            hasBody: true,
            body: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateReturnStatement,
                        expression: {
                            kind: IntermediateKind.IntermediateCallExpression,
                            expression: {
                                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                target: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "Reflect",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                propName: "metadata",
                            },
                            typeArguments: [],
                            arguments: [
                                {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "formatMetadataKey",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "formatString",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            ],
                            inferredReturnType: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "any",
                            },
                            typeAssertion: undefined,
                            asType: undefined,
                        },
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "getFormat",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "target",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "any",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "propertyKey",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    initializer: undefined,
                },
            ],
            returnType: undefined,
            inferredReturnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "any",
            },
            hasBody: true,
            body: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateReturnStatement,
                        expression: {
                            kind: IntermediateKind.IntermediateCallExpression,
                            expression: {
                                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                target: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "Reflect",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                propName: "getMetadata",
                            },
                            typeArguments: [],
                            arguments: [
                                {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "formatMetadataKey",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "target",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "propertyKey",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            ],
                            inferredReturnType: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "any",
                            },
                            typeAssertion: undefined,
                            asType: undefined,
                        },
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            decorators: [],
            isAbstract: false,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Greeter",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [
                        {
                            kind: IntermediateKind.IntermediateDecorator,
                            expression: {
                                kind: IntermediateKind.IntermediateCallExpression,
                                expression: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "format",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                typeArguments: [],
                                arguments: [
                                    {
                                        kind: IntermediateKind.IntermediateStringLiteral,
                                        value: "Hello, %s",
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
                                ],
                                inferredReturnType: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "any",
                                },
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        },
                    ],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "greeting",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    initializer: undefined,
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
                            name: "message",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        },
                    ],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Greeter",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateMethodImplementation,
                    docBlock: undefined,
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "greet",
                    typeParameters: [],
                    parameters: [],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "any",
                    },
                    hasBody: true,
                    body: {
                        kind: IntermediateKind.IntermediateBlock,
                        children: [
                            {
                                kind: IntermediateKind.IntermediateVariableDeclarations,
                                docBlock: undefined,
                                isDeclared: false,
                                isDefaultExport: false,
                                isExported: false,
                                variables: [
                                    {
                                        kind: IntermediateKind.IntermediateLetDeclaration,
                                        isConstant: false,
                                        isReadonly: false,
                                        name: "formatString",
                                        typeRef: undefined,
                                        initializer: {
                                            kind: IntermediateKind.IntermediateCallExpression,
                                            expression: {
                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                name: "getFormat",
                                                typeAssertion: undefined,
                                                asType: undefined,
                                            },
                                            typeArguments: [],
                                            arguments: [
                                                {
                                                    kind: IntermediateKind.IntermediateThisIdentifier,
                                                    name: "this",
                                                },
                                                {
                                                    kind: IntermediateKind.IntermediateStringLiteral,
                                                    value: "greeting",
                                                    typeAssertion: undefined,
                                                    asType: undefined,
                                                },
                                            ],
                                            inferredReturnType: {
                                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                typeName: "any",
                                            },
                                            typeAssertion: undefined,
                                            asType: undefined,
                                        },
                                        inferredType: {
                                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                            typeName: "any",
                                        },
                                    },
                                ],
                            },
                            {
                                kind: IntermediateKind.IntermediateReturnStatement,
                                expression: {
                                    kind: IntermediateKind.IntermediateCallExpression,
                                    expression: {
                                        kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                        target: {
                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                            name: "formatString",
                                            typeAssertion: undefined,
                                            asType: undefined,
                                        },
                                        propName: "replace",
                                    },
                                    typeArguments: [],
                                    arguments: [
                                        {
                                            kind: IntermediateKind.IntermediateStringLiteral,
                                            value: "%s",
                                            typeAssertion: undefined,
                                            asType: undefined,
                                        },
                                        {
                                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                            target: {
                                                kind: IntermediateKind.IntermediateThisIdentifier,
                                                name: "this",
                                            },
                                            propName: "greeting",
                                        },
                                    ],
                                    inferredReturnType: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "any",
                                    },
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            },
                        ],
                    },
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