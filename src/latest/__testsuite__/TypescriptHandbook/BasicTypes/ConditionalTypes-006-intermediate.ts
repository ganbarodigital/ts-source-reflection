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
} from "../../../IntermediateTypes";

const expectedResult: IntermediateSourceFile = {
    children: [
        {
            kind: IntermediateKind.IntermediateTypeAliasDefinition,
            typeName: "GetReturnType",
            typeParameters: [
                {
                    kind: IntermediateKind.IntermediateGenericType,
                    name: "Type",
                    constraint: undefined,
                    defaultType: undefined,
                }
            ],
            typeRef: {
                kind: IntermediateKind.IntermediateConditionalType,
                checkTypeRef: {
                    kind: IntermediateKind.IntermediateFixedTypeReference,
                    typeName: "Type",
                },
                extendsTypeRef: {
                    kind: IntermediateKind.IntermediateFunctionTypeSignature,
                    typeParameters: [],
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedCallableParameter,
                            paramName: "args",
                            optional: false,
                            readonly: false,
                            typeRef: {
                                kind: IntermediateKind.IntermediateRestType,
                                typeRef: {
                                    kind: IntermediateKind.IntermediateArrayTypeReference,
                                    typeRef: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "never",
                                    },
                                },
                            },
                            initializer: undefined,
                        },
                    ],
                    returnType: {
                        kind: IntermediateKind.IntermediateInferType,
                        typeParameter: {
                            kind: IntermediateKind.IntermediateGenericType,
                            name: "Return",
                            constraint: undefined,
                            defaultType: undefined,
                        },
                    },
                },
                trueTypeRef: {
                    kind: IntermediateKind.IntermediateFixedTypeReference,
                    typeName: "Return",
                },
                falseTypeRef: {
                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                    typeName: "never",
                },
            },
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDefinition,
            typeName: "Num",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateGenericTypeReference,
                typeName: "GetReturnType",
                typeArguments: [
                    {
                        kind: IntermediateKind.IntermediateFunctionTypeSignature,
                        typeParameters: [],
                        parameters: [],
                        returnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "number",
                        },
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDefinition,
            typeName: "Str",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateGenericTypeReference,
                typeName: "GetReturnType",
                typeArguments: [
                    {
                        kind: IntermediateKind.IntermediateFunctionTypeSignature,
                        typeParameters: [],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameter,
                                paramName: "x",
                                optional: false,
                                readonly: false,
                                typeRef: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "string",
                                },
                                initializer: undefined,
                            },
                        ],
                        returnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "string",
                        },
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDefinition,
            typeName: "Bools",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateGenericTypeReference,
                typeName: "GetReturnType",
                typeArguments: [
                    {
                        kind: IntermediateKind.IntermediateFunctionTypeSignature,
                        typeParameters: [],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameter,
                                paramName: "a",
                                optional: false,
                                readonly: false,
                                typeRef: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "boolean",
                                },
                                initializer: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameter,
                                paramName: "b",
                                optional: false,
                                readonly: false,
                                typeRef: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "boolean",
                                },
                                initializer: undefined,
                            },
                        ],
                        returnType: {
                            kind: IntermediateKind.IntermediateArrayTypeReference,
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "boolean",
                            },
                        },
                    },
                ],
            },
        },
    ],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;