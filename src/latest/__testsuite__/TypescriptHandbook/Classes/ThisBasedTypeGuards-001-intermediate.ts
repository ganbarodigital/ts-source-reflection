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
    IntermediateRestrictableScope,
    IntermediateSourceFile
} from "../../../IntermediateTypes";

const expectedResult: IntermediateSourceFile = {
    children: [
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            declared: false,
            exported: false,
            isAbstract: false,
            name: "FileSystemObject",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDefinition,
                    docBlock: undefined,
                    static: false,
                    accessModifier: undefined,
                    name: "isFile",
                    typeParameters: [],
                    parameters: [],
                    returnType: {
                        kind: IntermediateKind.IntermediateTypePredicate,
                        parameterName: "this",
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "FileRep",
                        },
                    },
                    hasBody: true,
                },
                {
                    kind: IntermediateKind.IntermediateMethodDefinition,
                    docBlock: undefined,
                    static: false,
                    accessModifier: undefined,
                    name: "isDirectory",
                    typeParameters: [],
                    parameters: [],
                    returnType: {
                        kind: IntermediateKind.IntermediateTypePredicate,
                        parameterName: "this",
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Directory",
                        },
                    },
                    hasBody: true,
                },
                {
                    kind: IntermediateKind.IntermediateMethodDefinition,
                    docBlock: undefined,
                    static: false,
                    accessModifier: undefined,
                    name: "isNetworked",
                    typeParameters: [],
                    parameters: [],
                    returnType: {
                        kind: IntermediateKind.IntermediateTypePredicate,
                        parameterName: "this",
                        typeRef: {
                            kind: IntermediateKind.IntermediateIntersectionType,
                            typeRefs: [
                                {
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "Networked",
                                },
                                {
                                    kind: IntermediateKind.IntermediateThisType,
                                },
                            ],
                        },
                    },
                    hasBody: true,
                },
                {
                    kind: IntermediateKind.IntermediateConstructorDefinition,
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedConstructorParameterDefinition,
                            paramName: "path",
                            readonly: false,
                            optional: false,
                            setsPropertyWithScope: IntermediateRestrictableScope.PUBLIC,
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        },
                        {
                            kind: IntermediateKind.IntermediateTypedConstructorParameterDefinition,
                            paramName: "networked",
                            readonly: false,
                            optional: false,
                            setsPropertyWithScope: IntermediateRestrictableScope.PRIVATE,
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "boolean",
                            },
                            initializer: undefined,
                        },
                    ],
                    returnType: undefined,
                }
            ],
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            declared: false,
            exported: false,
            isAbstract: false,
            name: "FileRep",
            typeParameters: [],
            extends: [
                {
                    kind: IntermediateKind.IntermediateFixedTypeArgument,
                    name: "FileSystemObject",
                },
            ],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateConstructorDefinition,
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedConstructorParameterDefinition,
                            paramName: "path",
                            readonly: false,
                            optional: false,
                            setsPropertyWithScope: undefined,
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        },
                        {
                            kind: IntermediateKind.IntermediateTypedConstructorParameterDefinition,
                            paramName: "content",
                            readonly: false,
                            optional: false,
                            setsPropertyWithScope: IntermediateRestrictableScope.PUBLIC,
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        },
                    ],
                    returnType: undefined,
                }
            ],
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            declared: false,
            exported: false,
            isAbstract: false,
            name: "Directory",
            typeParameters: [],
            extends: [
                {
                    kind: IntermediateKind.IntermediateFixedTypeArgument,
                    name: "FileSystemObject",
                },
            ],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDefinition,
                    propName: "children",
                    propIsOptional: false,
                    propIsReadonly: false,
                    propIsStatic: false,
                    accessModifier: undefined,
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "FileSystemObject",
                        },
                    },
                    initializer: undefined,
                }
            ],
        },
        {
            kind: IntermediateKind.IntermediateInterface,
            docBlock: undefined,
            name: "Networked",
            exported: false,
            declared: false,
            extends: [],
            typeParameters: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    propName: "host",
                    propIsOptional: false,
                    propIsReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                }
            ]
        }
    ],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;