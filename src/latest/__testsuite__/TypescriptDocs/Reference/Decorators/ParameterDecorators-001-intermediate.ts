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
                    name: "requiredMetadataKey",
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
                                value: "required",
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
                        identifierName: "requiredMetadataKey",
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
            name: "required",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "target",
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Object",
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
                        kind: IntermediateKind.IntermediateUnionType,
                        typeRefs: [
                            {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "symbol",
                            },
                        ],
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "parameterIndex",
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
                                name: "existingRequiredParameters",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateArrayTypeReference,
                                    typeRef: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "number",
                                    },
                                },
                                initializer: {
                                    kind: IntermediateKind.IntermediateBinaryExpression,
                                    left: {
                                        kind: IntermediateKind.IntermediateCallExpression,
                                        expression: {
                                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                            target: {
                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                name: "Reflect",
                                                typeAssertion: undefined,
                                                asType: undefined,
                                            },
                                            propName: "getOwnMetadata",
                                        },
                                        typeArguments: [],
                                        arguments: [
                                            {
                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                name: "requiredMetadataKey",
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
                                    operator: IntermediateExpressionOperator.BAR_BAR,
                                    right: {
                                        kind: IntermediateKind.IntermediateArrayLiteral,
                                        elements: [],
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
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
                                name: "existingRequiredParameters",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            propName: "push",
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "parameterIndex",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        ],
                        inferredReturnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "number",
                        },
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                    {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                            target: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "Reflect",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            propName: "defineMetadata",
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "requiredMetadataKey",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "existingRequiredParameters",
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
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "validate",
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
                    name: "propertyName",
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
                    name: "descriptor",
                    typeRef: {
                        kind: IntermediateKind.IntermediateGenericTypeReference,
                        typeName: "TypedPropertyDescriptor",
                        typeArguments: [
                            {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Function",
                            },
                        ],
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
                                name: "method",
                                typeRef: undefined,
                                initializer: {
                                    kind: IntermediateKind.IntermediateNonNullExpression,
                                    expression: {
                                        kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                        target: {
                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                            name: "descriptor",
                                            typeAssertion: undefined,
                                            asType: undefined,
                                        },
                                        propName: "value",
                                    },
                                },
                                inferredType: {
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "Function",
                                },
                            },
                        ],
                    },
                    {
                        kind: IntermediateKind.IntermediateBinaryExpression,
                        left: {
                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                            target: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "descriptor",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            propName: "value",
                        },
                        operator: IntermediateExpressionOperator.EQUALS,
                        right: {
                            kind: IntermediateKind.IntermediateFunctionExpression,
                            name: undefined,
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
                                                name: "requiredParameters",
                                                typeRef: {
                                                    kind: IntermediateKind.IntermediateArrayTypeReference,
                                                    typeRef: {
                                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                        typeName: "number",
                                                    },
                                                },
                                                initializer: {
                                                    kind: IntermediateKind.IntermediateCallExpression,
                                                    expression: {
                                                        kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                                        target: {
                                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                                            name: "Reflect",
                                                            typeAssertion: undefined,
                                                            asType: undefined,
                                                        },
                                                        propName: "getOwnMetadata",
                                                    },
                                                    typeArguments: [],
                                                    arguments: [
                                                        {
                                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                                            name: "requiredMetadataKey",
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
                                                            name: "propertyName",
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
                                    {
                                        kind: IntermediateKind.IntermediateIfStatement,
                                        condition: {
                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                            name: "requiredParameters",
                                            typeAssertion: undefined,
                                            asType: undefined,
                                        },
                                        thenBlock: {
                                            kind: IntermediateKind.IntermediateBlock,
                                            children: [
                                                {
                                                    kind: IntermediateKind.IntermediateForOfLoop,
                                                    initializer: {
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
                                                                name: "parameterIndex",
                                                                typeRef: undefined,
                                                                initializer: undefined,
                                                                inferredType: {
                                                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                                    typeName: "number",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    loopTarget: {
                                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                                        name: "requiredParameters",
                                                        typeAssertion: undefined,
                                                        asType: undefined,
                                                    },
                                                    contents: {
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
                                                                            name: "parameterIndex",
                                                                            typeAssertion: undefined,
                                                                            asType: undefined,
                                                                        },
                                                                        operator: IntermediateExpressionOperator.GREATER_THAN_EQUALS,
                                                                        right: {
                                                                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                                                            target: {
                                                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                                                name: "arguments",
                                                                                typeAssertion: undefined,
                                                                                asType: undefined,
                                                                            },
                                                                            propName: "length",
                                                                        },
                                                                    },
                                                                    operator: IntermediateExpressionOperator.BAR_BAR,
                                                                    right: {
                                                                        kind: IntermediateKind.IntermediateBinaryExpression,
                                                                        left: {
                                                                            kind: IntermediateKind.IntermediateElementAccessExpression,
                                                                            element: {
                                                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                                                name: "arguments",
                                                                                typeAssertion: undefined,
                                                                                asType: undefined,
                                                                            },
                                                                            accessKey: {
                                                                                kind: IntermediateKind.IntermediateIdentifierReference,
                                                                                name: "parameterIndex",
                                                                                typeAssertion: undefined,
                                                                                asType: undefined,
                                                                            },
                                                                            typeAssertion: undefined,
                                                                            asType: undefined,
                                                                        },
                                                                        operator: IntermediateExpressionOperator.EQUALS_EQUALS_EQUALS,
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
                                                                            kind: IntermediateKind.IntermediateThrow,
                                                                            expression: {
                                                                                kind: IntermediateKind.IntermediateNewExpression,
                                                                                typeRef: {
                                                                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                                                                    typeName: "Error",
                                                                                },
                                                                                arguments: [
                                                                                    {
                                                                                        kind: IntermediateKind.IntermediateStringLiteral,
                                                                                        value: "Missing required argument.",
                                                                                        typeAssertion: undefined,
                                                                                        asType: undefined,
                                                                                    },
                                                                                ],
                                                                                asType: undefined,
                                                                            },
                                                                        },
                                                                    ],
                                                                },
                                                                elseBlock: undefined,
                                                            },
                                                        ],
                                                    },
                                                },
                                            ],
                                        },
                                        elseBlock: undefined,
                                    },
                                    {
                                        kind: IntermediateKind.IntermediateReturnStatement,
                                        expression: {
                                            kind: IntermediateKind.IntermediateCallExpression,
                                            expression: {
                                                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                                target: {
                                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                                    name: "method",
                                                    typeAssertion: undefined,
                                                    asType: undefined,
                                                },
                                                propName: "apply",
                                            },
                                            typeArguments: [],
                                            arguments: [
                                                {
                                                    kind: IntermediateKind.IntermediateThisIdentifier,
                                                    name: "this",
                                                },
                                                {
                                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                                    name: "arguments",
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
            name: "BugReport",
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
                    name: "type",
                    initializer: {
                        kind: IntermediateKind.IntermediateStringLiteral,
                        value: "report",
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "title",
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
                            name: "t",
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
                        typeName: "BugReport",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateMethodImplementation,
                    docBlock: undefined,
                    decorators: [
                        {
                            kind: IntermediateKind.IntermediateDecorator,
                            expression: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "validate",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        },
                    ],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "print",
                    typeParameters: [],
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                            decorators: [
                                {
                                    kind: IntermediateKind.IntermediateDecorator,
                                    expression: {
                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                        name: "required",
                                        typeAssertion: undefined,
                                        asType: undefined,
                                    },
                                },
                            ],
                            isOptional: false,
                            isReadonly: false,
                            name: "verbose",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "boolean",
                            },
                            initializer: undefined,
                        },
                    ],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    hasBody: true,
                    body: {
                        kind: IntermediateKind.IntermediateBlock,
                        children: [
                            {
                                kind: IntermediateKind.IntermediateIfStatement,
                                condition: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "verbose",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                thenBlock: {
                                    kind: IntermediateKind.IntermediateBlock,
                                    children: [
                                        {
                                            kind: IntermediateKind.IntermediateReturnStatement,
                                            expression: {
                                                kind: IntermediateKind.IntermediateTemplateExpression,
                                                head: "type: ",
                                                spans: [
                                                    {
                                                        kind: IntermediateKind.IntermediateTemplateExpressionSpan,
                                                        expression: {
                                                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                                            target: {
                                                                kind: IntermediateKind.IntermediateThisIdentifier,
                                                                name: "this",
                                                            },
                                                            propName: "type",
                                                        },
                                                        tail: "\ntitle: ",
                                                    },
                                                    {
                                                        kind: IntermediateKind.IntermediateTemplateExpressionSpan,
                                                        expression: {
                                                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                                            target: {
                                                                kind: IntermediateKind.IntermediateThisIdentifier,
                                                                name: "this",
                                                            },
                                                            propName: "title",
                                                        },
                                                        tail: "",
                                                    },
                                                ],
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
                                                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                                target: {
                                                    kind: IntermediateKind.IntermediateThisIdentifier,
                                                    name: "this",
                                                },
                                                propName: "title",
                                            },
                                        },
                                    ],
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