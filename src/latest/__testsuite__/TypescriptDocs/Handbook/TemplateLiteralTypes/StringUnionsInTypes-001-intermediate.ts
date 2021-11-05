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
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isDefaultExport: false,
            isExported: false,
            name: "PropEventSource",
            typeParameters: [
                {
                    kind: IntermediateKind.IntermediateGenericType,
                    name: "Type",
                    constraint: undefined,
                    defaultType: undefined,
                },
            ],
            typeRef: {
                kind: IntermediateKind.IntermediateAnonymousClassType,
                members: [
                    {
                        kind: IntermediateKind.IntermediateMethodSignature,
                        docBlock: undefined,
                        isStatic: false,
                        name: "on",
                        typeParameters: [],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                isOptional: false,
                                isReadonly: false,
                                name: "eventName",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateTemplateLiteralType,
                                    head: "",
                                    spans: [
                                        {
                                            kind: IntermediateKind.IntermediateTemplateLiteralSpan,
                                            typeRef: {
                                                kind: IntermediateKind.IntermediateIntersectionType,
                                                typeRefs: [
                                                    {
                                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                        typeName: "string",
                                                    },
                                                    {
                                                        kind: IntermediateKind.IntermediateKeyofTypeReference,
                                                        typeRef: {
                                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                                            typeName: "Type",
                                                        },
                                                    },
                                                ],
                                            },
                                            tail: "Changed",
                                        },
                                    ],
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                isOptional: false,
                                isReadonly: false,
                                name: "callback",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateFunctionTypeSignature,
                                    typeParameters: [],
                                    parameters: [
                                        {
                                            kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                            isOptional: false,
                                            isReadonly: false,
                                            name: "newValue",
                                            typeRef: {
                                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                typeName: "any",
                                            },
                                        },
                                    ],
                                    returnType: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "void",
                                    },
                                },
                            },
                        ],
                        returnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "void",
                        },
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateAmbientFunction,
            docBlock: undefined,
            isDeclared: true,
            isDefaultExport: false,
            isExported: false,
            name: "makeWatchedObject",
            typeParameters: [
                {
                    kind: IntermediateKind.IntermediateGenericType,
                    name: "Type",
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
                    name: "obj",
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Type",
                    },
                    initializer: undefined,
                },
            ],
            returnType: {
                kind: IntermediateKind.IntermediateIntersectionType,
                typeRefs: [
                    {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Type",
                    },
                    {
                        kind: IntermediateKind.IntermediateGenericTypeReference,
                        typeName: "PropEventSource",
                        typeArguments: [
                            {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Type",
                            },
                        ],
                    },
                ],
            },
            hasBody: false,
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
}

export default expectedResult;