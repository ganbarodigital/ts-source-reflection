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
                    name: "identity",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateFunctionExpression,
                        typeParameters: [
                            {
                                kind: IntermediateKind.IntermediateGenericType,
                                name: "T",
                                constraint: undefined,
                                defaultType: undefined,
                            },
                        ],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                                decorators: [],
                                isOptional: false,
                                isReadonly: false,
                                name: "x",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "T",
                                },
                                initializer: undefined,
                            },
                        ],
                        returnType: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "T",
                        },
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateFunctionTypeSignature,
                        typeParameters: [
                            {
                                kind: IntermediateKind.IntermediateGenericType,
                                name: "T",
                                constraint: undefined,
                                defaultType: undefined,
                            },
                        ],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                isOptional: false,
                                isReadonly: false,
                                name: "x",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "T",
                                },
                            },
                        ],
                        returnType: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "T",
                        },
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
                    name: "reverse",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateFunctionExpression,
                        typeParameters: [
                            {
                                kind: IntermediateKind.IntermediateGenericType,
                                name: "U",
                                constraint: undefined,
                                defaultType: undefined,
                            },
                        ],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                                decorators: [],
                                isOptional: false,
                                isReadonly: false,
                                name: "y",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "U",
                                },
                                initializer: undefined,
                            },
                        ],
                        returnType: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "U",
                        },
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateFunctionTypeSignature,
                        typeParameters: [
                            {
                                kind: IntermediateKind.IntermediateGenericType,
                                name: "U",
                                constraint: undefined,
                                defaultType: undefined,
                            },
                        ],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                isOptional: false,
                                isReadonly: false,
                                name: "y",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "U",
                                },
                            },
                        ],
                        returnType: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "U",
                        },
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateVarAssignment,
            target: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "identity",
                asType: undefined,
                typeAssertion: undefined,
            },
            initializer: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "reverse",
                asType: undefined,
                typeAssertion: undefined,
            },
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;