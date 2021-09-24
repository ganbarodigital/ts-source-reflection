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
            kind: IntermediateKind.IntermediateInterface,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "CatInfo",
            typeParameters: [],
            extends: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    name: "age",
                    isOptional: false,
                    isReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    name: "breed",
                    isOptional: false,
                    isReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isDefaultExport: false,
            isExported: false,
            name: "CatName",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateUnionType,
                typeRefs: [
                    {
                        kind: IntermediateKind.IntermediateLiteralType,
                        typeName: '"miffy"',
                    },
                    {
                        kind: IntermediateKind.IntermediateLiteralType,
                        typeName: '"boris"',
                    },
                    {
                        kind: IntermediateKind.IntermediateLiteralType,
                        typeName: '"mordred"',
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            isDefaultExport: false,
            isExported: false,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    docBlock: undefined,
                    isConstant: true,
                    isDeclared: false,
                    isReadonly: false,
                    name: "cats",
                    typeRef: {
                        kind: IntermediateKind.IntermediateGenericTypeReference,
                        typeName: "Record",
                        typeArguments: [
                            {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "CatName",
                            },
                            {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "CatInfo",
                            },
                        ],
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateObjectLiteral,
                        properties: [
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "miffy",
                                initializer: {
                                    kind: IntermediateKind.IntermediateObjectLiteral,
                                    properties: [
                                        {
                                            kind: IntermediateKind.IntermediatePropertyAssignment,
                                            propertyName: "age",
                                            initializer: {
                                                kind: IntermediateKind.IntermediateNumericLiteral,
                                                value: "10",
                                                asType: undefined,
                                                typeAssertion: undefined,
                                            },
                                        },
                                        {
                                            kind: IntermediateKind.IntermediatePropertyAssignment,
                                            propertyName: "breed",
                                            initializer: {
                                                kind: IntermediateKind.IntermediateStringLiteral,
                                                value: "Persian",
                                                asType: undefined,
                                                typeAssertion: undefined,
                                            },
                                        },
                                    ],
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "boris",
                                initializer: {
                                    kind: IntermediateKind.IntermediateObjectLiteral,
                                    properties: [
                                        {
                                            kind: IntermediateKind.IntermediatePropertyAssignment,
                                            propertyName: "age",
                                            initializer: {
                                                kind: IntermediateKind.IntermediateNumericLiteral,
                                                value: "5",
                                                asType: undefined,
                                                typeAssertion: undefined,
                                            },
                                        },
                                        {
                                            kind: IntermediateKind.IntermediatePropertyAssignment,
                                            propertyName: "breed",
                                            initializer: {
                                                kind: IntermediateKind.IntermediateStringLiteral,
                                                value: "Maine Coon",
                                                asType: undefined,
                                                typeAssertion: undefined,
                                            },
                                        },
                                    ],
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "mordred",
                                initializer: {
                                    kind: IntermediateKind.IntermediateObjectLiteral,
                                    properties: [
                                        {
                                            kind: IntermediateKind.IntermediatePropertyAssignment,
                                            propertyName: "age",
                                            initializer: {
                                                kind: IntermediateKind.IntermediateNumericLiteral,
                                                value: "16",
                                                asType: undefined,
                                                typeAssertion: undefined,
                                            },
                                        },
                                        {
                                            kind: IntermediateKind.IntermediatePropertyAssignment,
                                            propertyName: "breed",
                                            initializer: {
                                                kind: IntermediateKind.IntermediateStringLiteral,
                                                value: "British Shorthair",
                                                asType: undefined,
                                                typeAssertion: undefined,
                                            },
                                        },
                                    ],
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            },
                        ],
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                },
            ],
        },
    ],
    referencedFiles: [],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;