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
            kind: IntermediateKind.IntermediateAmbientModuleDefinition,
            isDeclared: true,
            name: '"testurl"',
            contents: {
                kind: IntermediateKind.IntermediateModuleBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateInterface,
                        docBlock: undefined,
                        isDeclared: false,
                        isDefaultExport: false,
                        isExported: true,
                        name: "Url",
                        typeParameters: [],
                        extends: [],
                        members: [
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                isOptional: true,
                                isReadonly: false,
                                name: "protocol",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "string",
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                isOptional: true,
                                isReadonly: false,
                                name: "hostname",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "string",
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                isOptional: true,
                                isReadonly: false,
                                name: "pathname",
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
                        isExported: true,
                        name: "parse",
                        typeParameters: [],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                                decorators: [],
                                isOptional: false,
                                isReadonly: false,
                                name: "urlStr",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "string",
                                },
                                initializer: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateUntypedCallableParameterDeclaration,
                                decorators: [],
                                isOptional: true,
                                name: "parseQueryString",
                                initializer: undefined,
                                inferredType: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "any",
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediateUntypedCallableParameterDeclaration,
                                decorators: [],
                                isOptional: true,
                                name: "slashesDenoteHost",
                                initializer: undefined,
                                inferredType: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "any",
                                },
                            },
                        ],
                        returnType: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Url",
                        },
                        hasBody: false,
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateAmbientModuleDefinition,
            isDeclared: true,
            name: '"path"',
            contents: {
                kind: IntermediateKind.IntermediateModuleBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateFunction,
                        docBlock: undefined,
                        isDeclared: false,
                        isDefaultExport: false,
                        isExported: true,
                        name: "normalize",
                        typeParameters: [],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                                decorators: [],
                                isOptional: false,
                                isReadonly: false,
                                name: "p",
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
                        hasBody: false,
                    },
                    {
                        kind: IntermediateKind.IntermediateFunction,
                        docBlock: undefined,
                        isDeclared: false,
                        isDefaultExport: false,
                        isExported: true,
                        name: "join",
                        typeParameters: [],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateRestCallableParameterDeclaration,
                                parameter: {
                                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                                    decorators: [],
                                    isOptional: false,
                                    isReadonly: false,
                                    name: "paths",
                                    typeRef: {
                                        kind: IntermediateKind.IntermediateArrayTypeReference,
                                        typeRef: {
                                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                            typeName: "any",
                                        },
                                    },
                                    initializer: undefined,
                                },
                            },
                        ],
                        returnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "string",
                        },
                        hasBody: false,
                    },
                    {
                        kind: IntermediateKind.IntermediateVariableDeclarations,
                        isDeclared: false,
                        isDefaultExport: false,
                        isExported: true,
                        variables: [
                            {
                                kind: IntermediateKind.IntermediateVarDeclaration,
                                docBlock: undefined,
                                isConstant: false,
                                isReadonly: false,
                                name: "sep",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "string",
                                },
                                initializer: undefined,
                            },
                        ],
                    },
                ],
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