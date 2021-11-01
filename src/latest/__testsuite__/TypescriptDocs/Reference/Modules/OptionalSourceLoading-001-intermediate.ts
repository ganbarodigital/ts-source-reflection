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
            kind: IntermediateKind.IntermediateAmbientFunction,
            docBlock: undefined,
            isDeclared: true,
            isDefaultExport: false,
            isExported: false,
            name: "require",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "moduleName",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    initializer: undefined,
                },
            ],
            returnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "any",
            },
            hasBody: false,
        },
        {
            kind: IntermediateKind.IntermediateImportDeclaration,
            isTypeOnly: false,
            items: [
                {
                    kind: IntermediateKind.IntermediateAliasedImportBinding,
                    exportedName: {
                        kind: IntermediateKind.IntermediateIdentifierReference,
                        name: "ZipCodeValidator",
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                    name: {
                        kind: IntermediateKind.IntermediateIdentifierReference,
                        name: "Zip",
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                },
            ],
            source: {
                kind: IntermediateKind.IntermediateStringLiteral,
                value: "./ExportingDeclaration-001-input",
                asType: undefined,
                typeAssertion: undefined,
            },
        },
        {
            kind: IntermediateKind.IntermediateIfStatement,
            condition: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "needZipValidation",
                typeAssertion: undefined,
                asType: undefined,
            },
            thenBlock: {
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
                                name: "ZipCodeValidator",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateTypeofTypeReference,
                                    entityName: "Zip",
                                },
                                initializer: {
                                    kind: IntermediateKind.IntermediateCallExpression,
                                    expression: {
                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                        name: "require",
                                        asType: undefined,
                                        typeAssertion: undefined,
                                    },
                                    typeArguments: [],
                                    arguments: [
                                        {
                                            kind: IntermediateKind.IntermediateStringLiteral,
                                            value: "./ZipCodeValidator",
                                            asType: undefined,
                                            typeAssertion: undefined,
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
                                name: "validator",
                                typeRef: undefined,
                                initializer: {
                                    kind: IntermediateKind.IntermediateNewExpression,
                                    typeRef: {
                                        kind: IntermediateKind.IntermediateFixedTypeReference,
                                        typeName: "ZipCodeValidator",
                                    },
                                    arguments: [],
                                    asType: undefined,
                                },
                                inferredType: {
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "Zip",
                                }
                            },
                        ],
                    },
                    {
                        kind: IntermediateKind.IntermediateIfStatement,
                        condition: {
                            kind: IntermediateKind.IntermediateCallExpression,
                            expression: {
                                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                                target: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "validator",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                                propName: "isAcceptable",
                            },
                            typeArguments: [],
                            arguments: [
                                {
                                    kind: IntermediateKind.IntermediateStringLiteral,
                                    value: "...",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            ],
                            inferredReturnType: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "boolean",
                            },
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                        thenBlock: {
                            kind: IntermediateKind.IntermediateBlock,
                            children: [],
                        },
                        elseBlock: undefined,
                    }
                ],
            },
            elseBlock: undefined,
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;