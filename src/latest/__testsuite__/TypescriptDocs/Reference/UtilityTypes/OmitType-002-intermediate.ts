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
            kind: IntermediateKind.IntermediateInterface,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Todo",
            typeParameters: [],
            extends: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    docBlock: undefined,
                    isOptional: false,
                    isReadonly: false,
                    name: "title",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    docBlock: undefined,
                    isOptional: false,
                    isReadonly: false,
                    name: "description",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    docBlock: undefined,
                    isOptional: false,
                    isReadonly: false,
                    name: "completed",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "boolean",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    docBlock: undefined,
                    isOptional: false,
                    isReadonly: false,
                    name: "createdAt",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isDefaultExport: false,
            isExported: false,
            name: "TodoInfo",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateGenericTypeReference,
                typeName: "Omit",
                typeArguments: [
                    {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Todo",
                    },
                    {
                        kind: IntermediateKind.IntermediateUnionType,
                        typeRefs: [
                            {
                                kind: IntermediateKind.IntermediateStringLiteralType,
                                typeName: "completed",
                            },
                            {
                                kind: IntermediateKind.IntermediateStringLiteralType,
                                typeName: "createdAt",
                            },
                        ],
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
                    name: "todoInfo",
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "TodoInfo",
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateObjectLiteral,
                        properties: [
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "title",
                                initializer: {
                                    kind: IntermediateKind.IntermediateStringLiteral,
                                    value: "Pick up kids",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "description",
                                initializer: {
                                    kind: IntermediateKind.IntermediateStringLiteral,
                                    value: "Kindergarten closes at 5pm",
                                    typeAssertion: undefined,
                                    asType: undefined,
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
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
}

export default expectedResult;