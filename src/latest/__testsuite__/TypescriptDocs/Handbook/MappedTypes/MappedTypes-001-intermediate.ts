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
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isExported: false,
            isDefaultExport: false,
            name: "OnlyBoolsAndHorses",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateAnonymousClassType,
                members: [
                    {
                        kind: IntermediateKind.IntermediateIndexSignature,
                        index: {
                            indexName: "key",
                            indexTypeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                        },
                        value: {
                            valueTypeRef: {
                                kind: IntermediateKind.IntermediateUnionType,
                                typeRefs: [
                                    {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "boolean",
                                    },
                                    {
                                        kind: IntermediateKind.IntermediateFixedTypeReference,
                                        typeName: "Horse",
                                    },
                                ],
                            },
                        },
                        sigIsReadonly: false,
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            isDeclared: false,
            isExported: false,
            isDefaultExport: false,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    docBlock: undefined,
                    name: "conforms",
                    isConstant: true,
                    isReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "OnlyBoolsAndHorses",
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateObjectLiteral,
                        properties: [
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "del",
                                initializer: {
                                    kind: IntermediateKind.IntermediateBooleanLiteral,
                                    value: "true",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "rodney",
                                initializer: {
                                    kind: IntermediateKind.IntermediateBooleanLiteral,
                                    value: "false",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            },
                        ],
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                }
            ]
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referenceNoDefaultLib: false,
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;