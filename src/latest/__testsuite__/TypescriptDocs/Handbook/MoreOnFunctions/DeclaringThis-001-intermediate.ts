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
            isExported: false,
            isDefaultExport: false,
            isDeclared: false,
            name: "DB",
            typeParameters: [],
            extends: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodSignature,
                    docBlock: undefined,
                    isStatic:false,
                    accessModifier: undefined,
                    name: "filterUsers",
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                            name: "filter",
                            isOptional: false,
                            isReadonly: false,
                            typeRef: {
                                kind: IntermediateKind.IntermediateFunctionTypeSignature,
                                typeParameters: [],
                                parameters: [
                                    {
                                        kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                        name: "this",
                                        isOptional: false,
                                        isReadonly: false,
                                        typeRef: {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "User",
                                        },
                                    },
                                ],
                                returnType: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "boolean",
                                },
                            },
                        },
                    ],
                    typeParameters: [],
                    returnType: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "User",
                        },
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    isDeclared: false,
                    isExported: false,
                    isDefaultExport: false,
                    isConstant: true,
                    isReadonly: false,
                    name: "db",
                    docBlock: undefined,
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "getDB",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                        typeArguments: [],
                        arguments: [],
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    isDeclared: false,
                    isExported: false,
                    isDefaultExport: false,
                    isConstant: true,
                    isReadonly: false,
                    name: "admins",
                    docBlock: undefined,
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                            target: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "db",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                            propName: "filterUsers",
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateFunctionExpression,
                                typeParameters: [],
                                parameters: [
                                    {
                                        kind: IntermediateKind.IntermediateTypedCallableParameterDefinition,
                                        name: "this",
                                        isOptional: false,
                                        isReadonly: false,
                                        typeRef: {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "User",
                                        },
                                        initializer: undefined,
                                    },
                                ],
                                returnType: undefined,
                            },
                        ],
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                },
            ],
        },
    ],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;