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
            kind: IntermediateKind.IntermediateNamespace,
            docBlock: undefined,
            isDeclared: true,
            isDefaultExport: false,
            isExported: false,
            name: "D3",
            children: [
                {
                    kind: IntermediateKind.IntermediateInterface,
                    docBlock: undefined,
                    isDeclared: false,
                    isDefaultExport: false,
                    isExported: true,
                    name: "Selectors",
                    typeParameters: [],
                    extends: [],
                    members: [
                        {
                            kind: IntermediateKind.IntermediateTypedPropertySignature,
                            docBlock: undefined,
                            isOptional: false,
                            isReadonly: false,
                            name: "select",
                            typeRef: {
                                kind: IntermediateKind.IntermediateAnonymousClassType,
                                members: [
                                    {
                                        kind: IntermediateKind.IntermediateCallSignature,
                                        typeParameters: [],
                                        parameters: [
                                            {
                                                kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                                isOptional: false,
                                                isReadonly: false,
                                                name: "selector",
                                                typeRef: {
                                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                    typeName: "string",
                                                },
                                            },
                                        ],
                                        returnType: {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Selection",
                                        },
                                    },
                                    {
                                        kind: IntermediateKind.IntermediateCallSignature,
                                        typeParameters: [],
                                        parameters: [
                                            {
                                                kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                                isOptional: false,
                                                isReadonly: false,
                                                name: "element",
                                                typeRef: {
                                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                                    typeName: "EventTarget",
                                                },
                                            },
                                        ],
                                        returnType: {
                                            kind: IntermediateKind.IntermediateFixedTypeReference,
                                            typeName: "Selection",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    kind: IntermediateKind.IntermediateInterface,
                    docBlock: undefined,
                    isDeclared: false,
                    isDefaultExport: false,
                    isExported: true,
                    name: "Event",
                    typeParameters: [],
                    extends: [],
                    members: [
                        {
                            kind: IntermediateKind.IntermediateTypedPropertySignature,
                            docBlock: undefined,
                            isOptional: false,
                            isReadonly: false,
                            name: "x",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "number",
                            },
                        },
                        {
                            kind: IntermediateKind.IntermediateTypedPropertySignature,
                            docBlock: undefined,
                            isOptional: false,
                            isReadonly: false,
                            name: "y",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "number",
                            },
                        },
                    ],
                },
                {
                    kind: IntermediateKind.IntermediateInterface,
                    docBlock: undefined,
                    isDeclared: false,
                    isDefaultExport: false,
                    isExported: true,
                    name: "Base",
                    typeParameters: [],
                    extends: [
                        {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "Selectors",
                            typeAssertion: undefined,
                            asType: undefined,
                        },
                    ],
                    members: [
                        {
                            kind: IntermediateKind.IntermediateTypedPropertySignature,
                            docBlock: undefined,
                            isOptional: false,
                            isReadonly: false,
                            name: "event",
                            typeRef: {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Event",
                            },
                        },
                    ],
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            docBlock: undefined,
            isDeclared: true,
            isDefaultExport: false,
            isExported: false,
            variables: [
                {
                    kind: IntermediateKind.IntermediateVarDeclaration,
                    isConstant: false,
                    isReadonly: false,
                    name: "d3",
                    typeRef: {
                        kind: IntermediateKind.IntermediateQualifiedName,
                        left: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "D3",
                            typeAssertion: undefined,
                            asType: undefined,
                        },
                        right: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "Base",
                            typeAssertion: undefined,
                            asType: undefined,
                        },
                    },
                    initializer: undefined,
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