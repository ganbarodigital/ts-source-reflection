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
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isDefaultExport: false,
            isExported: false,
            name: "Pet",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateAnonymousClassType,
                members: [
                    {
                        kind: IntermediateKind.IntermediateTypedPropertySignature,
                        docBlock: undefined,
                        isOptional: false,
                        isReadonly: false,
                        name: "name",
                        typeRef: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "string",
                        },
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateInterface,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Fish",
            typeParameters: [],
            extends: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Pet",
                    typeAssertion: undefined,
                    asType: undefined,
                },
            ],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    docBlock: undefined,
                    isOptional: false,
                    isReadonly: false,
                    name: "swim",
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
        {
            kind: IntermediateKind.IntermediateEmptyStatement,
        },
        {
            kind: IntermediateKind.IntermediateInterface,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Bird",
            typeParameters: [],
            extends: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Pet",
                    typeAssertion: undefined,
                    asType: undefined,
                },
            ],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    docBlock: undefined,
                    isOptional: false,
                    isReadonly: false,
                    name: "fly",
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
        {
            kind: IntermediateKind.IntermediateEmptyStatement,
        },
        {
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "isFish",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "pet",
                    typeRef: {
                        kind: IntermediateKind.IntermediateUnionType,
                        typeRefs: [
                            {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Fish",
                            },
                            {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Bird",
                            },
                        ],
                    },
                    initializer: undefined,
                },
            ],
            returnType: {
                kind: IntermediateKind.IntermediateTypePredicate,
                parameterName: "pet",
                assertedRef: {
                    kind: IntermediateKind.IntermediateFixedTypeReference,
                    typeName: "Fish",
                },
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
                                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                target: {
                                    kind: IntermediateKind.IntermediateParenthesizedExpression,
                                    expression: {
                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                        name: "pet",
                                        typeAssertion: undefined,
                                        asType: {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Fish",
                                        },
                                    },
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                propName: "swim",
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
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "getSmallPet",
            typeParameters: [],
            parameters: [],
            returnType: {
                kind: IntermediateKind.IntermediateUnionType,
                typeRefs: [
                    {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Fish",
                    },
                    {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Bird",
                    },
                ],
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
                                kind: IntermediateKind.IntermediateCallExpression,
                                expression: {
                                    kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                    target: {
                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                        name: "Math",
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
                                    propName: "random",
                                },
                                typeArguments: [],
                                arguments: [],
                                inferredReturnType: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "number",
                                },
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            operator: IntermediateExpressionOperator.GREATER_THAN_EQUALS,
                            right: {
                                kind: IntermediateKind.IntermediateNumericLiteral,
                                value: "0.5",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        },
                        thenBlock: {
                            kind: IntermediateKind.IntermediateBlock,
                            children: [
                                {
                                    kind: IntermediateKind.IntermediateReturnStatement,
                                    expression: {
                                        kind: IntermediateKind.IntermediateObjectLiteral,
                                        properties: [
                                            {
                                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                                propertyName: "name",
                                                initializer: {
                                                    kind: IntermediateKind.IntermediateStringLiteral,
                                                    value: "Fishy",
                                                    typeAssertion: undefined,
                                                    asType: undefined,
                                                },
                                            },
                                            {
                                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                                propertyName: "swim",
                                                initializer: {
                                                    kind: IntermediateKind.IntermediateArrowFunction,
                                                    typeParameters: [],
                                                    parameters: [],
                                                    returnType: undefined,
                                                    inferredReturnType: {
                                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                        typeName: "void",
                                                    },
                                                    hasBody: true,
                                                },
                                            },
                                        ],
                                        typeAssertion: {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Fish",
                                        },
                                        asType: undefined,
                                    },
                                },
                            ],
                        },
                        elseBlock: undefined,
                    },
                    {
                        kind: IntermediateKind.IntermediateReturnStatement,
                        expression: {
                            kind: IntermediateKind.IntermediateObjectLiteral,
                            properties: [
                                {
                                    kind: IntermediateKind.IntermediatePropertyAssignment,
                                    propertyName: "name",
                                    initializer: {
                                        kind: IntermediateKind.IntermediateStringLiteral,
                                        value: "Birdy",
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
                                },
                                {
                                    kind: IntermediateKind.IntermediatePropertyAssignment,
                                    propertyName: "fly",
                                    initializer: {
                                        kind: IntermediateKind.IntermediateArrowFunction,
                                        typeParameters: [],
                                        parameters: [],
                                        returnType: undefined,
                                        inferredReturnType: {
                                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                            typeName: "void",
                                        },
                                        hasBody: true,
                                    },
                                },
                            ],
                            typeAssertion: {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Bird",
                            },
                            asType: undefined,
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
                    name: "zoo",
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateParenthesizedType,
                            typeRef: {
                                kind: IntermediateKind.IntermediateUnionType,
                                typeRefs: [
                                    {
                                        kind: IntermediateKind.IntermediateFixedTypeReference,
                                        typeName: "Fish",
                                    },
                                    {
                                        kind: IntermediateKind.IntermediateFixedTypeReference,
                                        typeName: "Bird",
                                    },
                                ],
                            },
                        },
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateArrayLiteral,
                        elements: [
                            {
                                kind: IntermediateKind.IntermediateCallExpression,
                                expression: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "getSmallPet",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                typeArguments: [],
                                arguments: [],
                                inferredReturnType: {
                                    kind: IntermediateKind.IntermediateUnionType,
                                    typeRefs: [
                                        {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Fish",
                                        },
                                        {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Bird",
                                        },
                                    ],
                                },
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateCallExpression,
                                expression: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "getSmallPet",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                typeArguments: [],
                                arguments: [],
                                inferredReturnType: {
                                    kind: IntermediateKind.IntermediateUnionType,
                                    typeRefs: [
                                        {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Fish",
                                        },
                                        {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Bird",
                                        },
                                    ],
                                },
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateCallExpression,
                                expression: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "getSmallPet",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                typeArguments: [],
                                arguments: [],
                                inferredReturnType: {
                                    kind: IntermediateKind.IntermediateUnionType,
                                    typeRefs: [
                                        {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Fish",
                                        },
                                        {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Bird",
                                        },
                                    ],
                                },
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        ],
                        typeAssertion: undefined,
                        asType: undefined,
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
                    name: "underWater1",
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Fish",
                        },
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                            target: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "zoo",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            propName: "filter",
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "isFish",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        ],
                        inferredReturnType: {
                            kind: IntermediateKind.IntermediateArrayTypeReference,
                            typeRef: {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Fish",
                            },
                        },
                        typeAssertion: undefined,
                        asType: undefined,
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
                    name: "underWater2",
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Fish",
                        },
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                            target: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "zoo",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            propName: "filter",
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "isFish",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        ],
                        inferredReturnType: {
                            kind: IntermediateKind.IntermediateArrayTypeReference,
                            typeRef: {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Fish",
                            },
                        },
                        typeAssertion: undefined,
                        asType: {
                            kind: IntermediateKind.IntermediateArrayTypeReference,
                            typeRef: {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Fish",
                            },
                        },
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
                    name: "underWater3",
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Fish",
                        },
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                            target: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "zoo",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            propName: "filter",
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateArrowFunction,
                                typeParameters: [],
                                parameters: [
                                    {
                                        kind: IntermediateKind.IntermediateUntypedCallableParameterDeclaration,
                                        decorators: [],
                                        isOptional: false,
                                        name: "pet",
                                        initializer: undefined,
                                        inferredType: {
                                            kind: IntermediateKind.IntermediateUnionType,
                                            typeRefs: [
                                                {
                                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                                    typeName: "Fish",
                                                },
                                                {
                                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                                    typeName: "Bird",
                                                },
                                            ],
                                        },
                                    },
                                ],
                                returnType: {
                                    kind: IntermediateKind.IntermediateTypePredicate,
                                    parameterName: "pet",
                                    assertedRef: {
                                        kind: IntermediateKind.IntermediateFixedTypeReference,
                                        typeName: "Fish",
                                    },
                                },
                                hasBody: true,
                            },
                        ],
                        inferredReturnType: {
                            kind: IntermediateKind.IntermediateArrayTypeReference,
                            typeRef: {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Fish",
                            },
                        },
                        typeAssertion: undefined,
                        asType: undefined,
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
