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
            name: "Todo",
            typeParameters: [],
            extends: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    name: "title",
                    isOptional: false,
                    isReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    name: "description",
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
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "updateTodo",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    name: "todo",
                    isOptional: false,
                    isReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Todo",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    name: "fieldsToUpdate",
                    isOptional: false,
                    isReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateGenericTypeReference,
                        typeName: "Partial",
                        typeArguments: [
                            {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Todo",
                            },
                        ],
                    },
                    initializer: undefined,
                },
            ],
            returnType: undefined,
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
                    name: "todo1",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateObjectLiteral,
                        properties: [
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "title",
                                initializer: {
                                    kind: IntermediateKind.IntermediateStringLiteral,
                                    value: "organize desk",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "description",
                                initializer: {
                                    kind: IntermediateKind.IntermediateStringLiteral,
                                    value: "clear clutter",
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
                    name: "todo2",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "updateTodo",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "todo1",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateObjectLiteral,
                                properties: [
                                    {
                                        kind: IntermediateKind.IntermediatePropertyAssignment,
                                        propertyName: "description",
                                        initializer: {
                                            kind: IntermediateKind.IntermediateStringLiteral,
                                            value: "throw out trash",
                                            asType: undefined,
                                            typeAssertion: undefined,
                                        },
                                    },
                                ],
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
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;