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
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
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
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
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
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
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
                        },
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
            kind: IntermediateKind.IntermediateFunctionImplementation,
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
                                docBlock: undefined,
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
            body: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateReturnStatement,
                        expression: {
                            kind: IntermediateKind.IntermediateClassExpression,
                            name: "Scaling",
                            typeParameters: [],
                            extends: [
                                {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "Base",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            ],
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
                                    name: {
                                        kind: IntermediateKind.IntermediatePrivatePropertyIdentifier,
                                        name: "#scale",
                                    },
                                    initializer: {
                                        kind: IntermediateKind.IntermediateNumericLiteral,
                                        value: "1",
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
                                    inferredType: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "number",
                                    },
                                },
                                {
                                    kind: IntermediateKind.IntermediateMethodImplementation,
                                    docBlock: undefined,
                                    decorators: [],
                                    isAbstract: false,
                                    isStatic: false,
                                    accessModifier: undefined,
                                    name: "setScale",
                                    typeParameters: [],
                                    parameters: [
                                        {
                                            kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                                            decorators: [],
                                            isOptional: false,
                                            isReadonly: false,
                                            name: "scale",
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
                                        typeName: "void",
                                    },
                                    hasBody: true,
                                    body: {
                                        kind: IntermediateKind.IntermediateBlock,
                                        children: [
                                            {
                                                kind: IntermediateKind.IntermediateBinaryExpression,
                                                left: {
                                                    kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                                    target: {
                                                        kind: IntermediateKind.IntermediateThisIdentifier,
                                                        name: "this",
                                                    },
                                                    propName: "#scale",
                                                },
                                                operator: IntermediateExpressionOperator.EQUALS,
                                                right: {
                                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                                    name: "scale",
                                                    typeAssertion: undefined,
                                                    asType: undefined,
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: IntermediateKind.IntermediateGetter,
                                    docBlock: undefined,
                                    decorators: [],
                                    accessModifier: undefined,
                                    name: "scale",
                                    typeParameters: [],
                                    returnType: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "number",
                                    },
                                },
                            ],
                        },
                    },
                ],
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
                    name: "EightBitSprite",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "Scale",
                            typeAssertion: undefined,
                            asType: undefined,
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "Sprite",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        ],
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
                                                kind: IntermediateKind.IntermediateUndiscoverableType,
                                            },
                                        },
                                        {
                                            kind: IntermediateKind.IntermediateTypedPropertySignature,
                                            docBlock: undefined,
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
                        typeAssertion: undefined,
                        asType: undefined,
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
                                        docBlock: undefined,
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
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
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
                                typeAssertion: undefined,
                                asType: undefined,
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
                    typeAssertion: undefined,
                    asType: undefined,
                },
                propName: "setScale",
            },
            typeArguments: [],
            arguments: [
                {
                    kind: IntermediateKind.IntermediateNumericLiteral,
                    value: "0.8",
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
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
}

export default expectedResult;