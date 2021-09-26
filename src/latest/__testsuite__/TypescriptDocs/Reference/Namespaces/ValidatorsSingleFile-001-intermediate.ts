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
    children: [
        {
            kind: IntermediateKind.IntermediateInterface,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "StringValidator",
            typeParameters: [],
            extends: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodSignature,
                    docBlock: undefined,
                    accessModifier: undefined,
                    isStatic: false,
                    name: "isAcceptable",
                    typeParameters: [],
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                            isOptional: false,
                            isReadonly: false,
                            name: "s",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                        },
                    ],
                    returnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "boolean",
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
                    kind: IntermediateKind.IntermediateLetDeclaration,
                    docBlock: undefined,
                    isConstant: false,
                    isReadonly: false,
                    name: "lettersRegexp",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateRegexLiteral,
                        value: "/^[A-Za-z]+$/",
                        asType: undefined,
                        typeAssertion: undefined,
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
                    kind: IntermediateKind.IntermediateLetDeclaration,
                    docBlock: undefined,
                    isConstant: false,
                    isReadonly: false,
                    name: "numberRegexp",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateRegexLiteral,
                        value: "/^[0-9]+$/",
                        asType: undefined,
                        typeAssertion: undefined,
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
            isExported: false,
            name: "LettersOnlyValidator",
            typeParameters: [],
            extends: [],
            implements: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "StringValidator",
                    asType: undefined,
                    typeAssertion: undefined,
                },
            ],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "isAcceptable",
                    typeParameters: [],
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            isReadonly: false,
                            name: "s",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        },
                    ],
                    returnType: undefined,
                    hasBody: true,
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
            isExported: false,
            name: "ZipCodeValidator",
            typeParameters: [],
            extends: [],
            implements: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "StringValidator",
                    asType: undefined,
                    typeAssertion: undefined,
                },
            ],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "isAcceptable",
                    typeParameters: [],
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            isReadonly: false,
                            name: "s",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        },
                    ],
                    returnType: undefined,
                    hasBody: true,
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
                    kind: IntermediateKind.IntermediateLetDeclaration,
                    docBlock: undefined,
                    isConstant: false,
                    isReadonly: false,
                    name: "strings",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateArrayLiteral,
                        elements: [
                            {
                                kind: IntermediateKind.IntermediateStringLiteral,
                                value: "Hello",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateStringLiteral,
                                value: "98052",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateStringLiteral,
                                value: "101",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                        ],
                        asType: undefined,
                        typeAssertion: undefined,
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
                    kind: IntermediateKind.IntermediateLetDeclaration,
                    docBlock: undefined,
                    isConstant: false,
                    isReadonly: false,
                    name: "validators",
                    typeRef: {
                        kind: IntermediateKind.IntermediateAnonymousClassType,
                        members: [
                            {
                                kind: IntermediateKind.IntermediateIndexSignature,
                                sigIsReadonly: false,
                                index: {
                                    indexName: "s",
                                    indexTypeRef: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "string",
                                    },
                                },
                                value: {
                                    valueTypeRef: {
                                        kind: IntermediateKind.IntermediateFixedTypeReference,
                                        typeName: "StringValidator",
                                    },
                                },
                            },
                        ],
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateObjectLiteral,
                        properties: [],
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateBinaryExpression,
            left: {
                kind: IntermediateKind.IntermediateElementAccessExpression,
                element: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "validators",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                accessKey: {
                    kind: IntermediateKind.IntermediateStringLiteral,
                    value: "ZIP code",
                    asType: undefined,
                    typeAssertion: undefined,
                },
            },
            operator: IntermediateExpressionOperator.EQUALS,
            right: {
                kind: IntermediateKind.IntermediateNewExpression,
                typeRef: {
                    kind: IntermediateKind.IntermediateFixedTypeReference,
                    typeName: "ZipCodeValidator",
                },
                arguments: [],
                asType: undefined,
            },
        },
        {
            kind: IntermediateKind.IntermediateBinaryExpression,
            left: {
                kind: IntermediateKind.IntermediateElementAccessExpression,
                element: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "validators",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                accessKey: {
                    kind: IntermediateKind.IntermediateStringLiteral,
                    value: "Letters only",
                    asType: undefined,
                    typeAssertion: undefined,
                },
            },
            operator: IntermediateExpressionOperator.EQUALS,
            right: {
                kind: IntermediateKind.IntermediateNewExpression,
                typeRef: {
                    kind: IntermediateKind.IntermediateFixedTypeReference,
                    typeName: "LettersOnlyValidator",
                },
                arguments: [],
                asType: undefined,
            },
        },
        {
            kind: IntermediateKind.IntermediateForOfLoop,
            initializer: {
                kind: IntermediateKind.IntermediateVariableDeclarations,
                isDeclared: false,
                isExported: false,
                isDefaultExport: false,
                variables: [
                    {
                        kind: IntermediateKind.IntermediateLetDeclaration,
                        docBlock: undefined,
                        isConstant: false,
                        isReadonly: false,
                        name: "s",
                        typeRef: undefined,
                        initializer: undefined,
                    },
                ],
            },
            loopTarget: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "strings",
                asType: undefined,
                typeAssertion: undefined,
            },
            contents: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateForInLoop,
                        initializer: {
                            kind: IntermediateKind.IntermediateVariableDeclarations,
                            isDeclared: false,
                            isExported: false,
                            isDefaultExport: false,
                            variables: [
                                {
                                    kind: IntermediateKind.IntermediateLetDeclaration,
                                    docBlock: undefined,
                                    isConstant: false,
                                    isReadonly: false,
                                    name: "name",
                                    typeRef: undefined,
                                    initializer: undefined,
                                },
                            ],
                        },
                        loopTarget: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "validators",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                        contents: {
                            kind: IntermediateKind.IntermediateBlock,
                            children: [
                                {
                                    kind: IntermediateKind.IntermediateVariableDeclarations,
                                    isDeclared: false,
                                    isDefaultExport: false,
                                    isExported: false,
                                    variables: [
                                        {
                                            kind: IntermediateKind.IntermediateLetDeclaration,
                                            docBlock: undefined,
                                            isConstant: false,
                                            isReadonly: false,
                                            name: "isMatch",
                                            typeRef: undefined,
                                            initializer: {
                                                kind: IntermediateKind.IntermediateCallExpression,
                                                expression: {
                                                    kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                                    target: {
                                                        kind: IntermediateKind.IntermediateElementAccessExpression,
                                                        element: {
                                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                                            name: "validators",
                                                            asType: undefined,
                                                            typeAssertion: undefined,
                                                        },
                                                        accessKey: {
                                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                                            name: "name",
                                                            asType: undefined,
                                                            typeAssertion: undefined,
                                                        },
                                                    },
                                                    propName: "isAcceptable",
                                                },
                                                typeArguments: [],
                                                arguments: [
                                                    {
                                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                                        name: "s",
                                                        asType: undefined,
                                                        typeAssertion: undefined,
                                                    },
                                                ],
                                                asType: undefined,
                                                typeAssertion: undefined,
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
                                            name: "console",
                                            asType: undefined,
                                            typeAssertion: undefined,
                                        },
                                        propName: "log",
                                    },
                                    typeArguments: [],
                                    arguments: [
                                        {
                                            kind: IntermediateKind.IntermediateTemplateExpression,
                                            head: "'",
                                            spans: [
                                                {
                                                    kind: IntermediateKind.IntermediateTemplateExpressionSpan,
                                                    expression: {
                                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                                        name: "s",
                                                        asType: undefined,
                                                        typeAssertion: undefined,
                                                    },
                                                    tail: "' ",
                                                },
                                                {
                                                    kind: IntermediateKind.IntermediateTemplateExpressionSpan,
                                                    expression: {
                                                        kind: IntermediateKind.IntermediateConditionalExpression,
                                                        condition: {
                                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                                            name: "isMatch",
                                                            asType: undefined,
                                                            typeAssertion: undefined,
                                                        },
                                                        whenTrue: {
                                                            kind: IntermediateKind.IntermediateStringLiteral,
                                                            value: "matches",
                                                            asType: undefined,
                                                            typeAssertion: undefined,
                                                        },
                                                        whenFalse: {
                                                            kind: IntermediateKind.IntermediateStringLiteral,
                                                            value: "does not match",
                                                            asType: undefined,
                                                            typeAssertion: undefined,
                                                        },
                                                    },
                                                    tail: " '",
                                                },
                                                {
                                                    kind: IntermediateKind.IntermediateTemplateExpressionSpan,
                                                    expression: {
                                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                                        name: "name",
                                                        asType: undefined,
                                                        typeAssertion: undefined,
                                                    },
                                                    tail: "'.",
                                                },
                                            ],
                                        },
                                    ],
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
    referencedFiles: [],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;