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
    Filepath,
} from "@safelytyped/filepath";
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
            isExported: false,
            variables: [
                {
                    kind: IntermediateKind.IntermediateLetDeclaration,
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
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateStringLiteral,
                                value: "98052",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateStringLiteral,
                                value: "101",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        ],
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "string",
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
                    kind: IntermediateKind.IntermediateLetDeclaration,
                    isConstant: false,
                    isReadonly: false,
                    name: "validators",
                    typeRef: {
                        kind: IntermediateKind.IntermediateAnonymousClassType,
                        members: [
                            {
                                kind: IntermediateKind.IntermediateIndexSignature,
                                index: {
                                    indexName: "s",
                                    indexTypeRef: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "string",
                                    },
                                },
                                value: {
                                    valueTypeRef: {
                                        kind: IntermediateKind.IntermediateQualifiedName,
                                        left: {
                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                            name: "Validation",
                                            typeAssertion: undefined,
                                            asType: undefined,
                                        },
                                        right: {
                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                            name: "StringValidator",
                                            typeAssertion: undefined,
                                            asType: undefined,
                                        },
                                    },
                                },
                                sigIsReadonly: false,
                            },
                        ],
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateObjectLiteral,
                        properties: [],
                        typeAssertion: undefined,
                        asType: undefined,
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
                    typeAssertion: undefined,
                    asType: undefined,
                },
                accessKey: {
                    kind: IntermediateKind.IntermediateStringLiteral,
                    value: "ZIP code",
                    typeAssertion: undefined,
                    asType: undefined,
                },
            },
            operator: IntermediateExpressionOperator.EQUALS,
            right: {
                kind: IntermediateKind.IntermediateNewExpression,
                typeRef: {
                    kind: IntermediateKind.IntermediateQualifiedTypeReference,
                    left: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Validation",
                    },
                    right: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "ZipCodeValidator",
                    },
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
                    typeAssertion: undefined,
                    asType: undefined,
                },
                accessKey: {
                    kind: IntermediateKind.IntermediateStringLiteral,
                    value: "Letters only",
                    typeAssertion: undefined,
                    asType: undefined,
                },
            },
            operator: IntermediateExpressionOperator.EQUALS,
            right: {
                kind: IntermediateKind.IntermediateNewExpression,
                typeRef: {
                    kind: IntermediateKind.IntermediateQualifiedTypeReference,
                    left: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Validation",
                    },
                    right: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "LettersOnlyValidator",
                    },
                },
                arguments: [],
                asType: undefined,
            },
        },
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
                        name: "s",
                        typeRef: undefined,
                        initializer: undefined,
                        inferredType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "string",
                        },
                    },
                ],
            },
            loopTarget: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "strings",
                typeAssertion: undefined,
                asType: undefined,
            },
            contents: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateForInLoop,
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
                                    name: "name",
                                    typeRef: undefined,
                                    initializer: undefined,
                                    inferredType: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "string",
                                    },
                                },
                            ],
                        },
                        loopTarget: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "validators",
                            typeAssertion: undefined,
                            asType: undefined,
                        },
                        contents: {
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
                                                            typeAssertion: undefined,
                                                            asType: undefined,
                                                        },
                                                        accessKey: {
                                                            kind: IntermediateKind.IntermediateIdentifierReference,
                                                            name: "name",
                                                            typeAssertion: undefined,
                                                            asType: undefined,
                                                        },
                                                    },
                                                    propName: "isAcceptable",
                                                },
                                                typeArguments: [],
                                                arguments: [
                                                    {
                                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                                        name: "s",
                                                        typeAssertion: undefined,
                                                        asType: undefined,
                                                    },
                                                ],
                                                inferredReturnType: {
                                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                    typeName: "boolean",
                                                },
                                                typeAssertion: undefined,
                                                asType: undefined,
                                            },
                                            inferredType: {
                                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                typeName: "boolean",
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
                                            typeAssertion: undefined,
                                            asType: undefined,
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
                                                        typeAssertion: undefined,
                                                        asType: undefined,
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
                                                            typeAssertion: undefined,
                                                            asType: undefined,
                                                        },
                                                        whenTrue: {
                                                            kind: IntermediateKind.IntermediateStringLiteral,
                                                            value: "matches",
                                                            typeAssertion: undefined,
                                                            asType: undefined,
                                                        },
                                                        whenFalse: {
                                                            kind: IntermediateKind.IntermediateStringLiteral,
                                                            value: "does not match",
                                                            typeAssertion: undefined,
                                                            asType: undefined,
                                                        },
                                                    },
                                                    tail: " '",
                                                },
                                                {
                                                    kind: IntermediateKind.IntermediateTemplateExpressionSpan,
                                                    expression: {
                                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                                        name: "name",
                                                        typeAssertion: undefined,
                                                        asType: undefined,
                                                    },
                                                    tail: "'.",
                                                },
                                            ],
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
                        },
                    },
                ],
            },
        },
    ],
    referencedFiles: [
        new Filepath("MultiFileNamespaces-001-Validation.ts"),
        new Filepath("MultiFileNamespaces-001-LettersOnlyValidator.ts"),
        new Filepath("MultiFileNamespaces-001-ZipCodeValidator.ts"),
    ],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
}

export default expectedResult;