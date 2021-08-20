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
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            declared: false,
            exported: false,
            name: "BeeKeeper",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDefinition,
                    propName: "hasMask",
                    propIsOptional: false,
                    propIsReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "boolean",
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateBooleanLiteral,
                        value: "true",
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            declared: false,
            exported: false,
            name: "ZooKeeper",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDefinition,
                    propName: "nametag",
                    propIsOptional: false,
                    propIsReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateStringLiteral,
                        value: "Mikle",
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            declared: false,
            exported: false,
            name: "Animal",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDefinition,
                    propName: "numLegs",
                    propIsOptional: false,
                    propIsReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "4",
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            declared: false,
            exported: false,
            name: "Bee",
            typeParameters: [],
            extends: [
                {
                    kind: IntermediateKind.IntermediateFixedTypeArgument,
                    name: "Animal"
                },
            ],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDefinition,
                    propName: "keeper",
                    propIsOptional: false,
                    propIsReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "BeeKeeper",
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateNewExpression,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "BeeKeeper",
                        },
                        arguments: [],
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            declared: false,
            exported: false,
            name: "Lion",
            typeParameters: [],
            extends: [
                {
                    kind: IntermediateKind.IntermediateFixedTypeArgument,
                    name: "Animal"
                },
            ],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDefinition,
                    propName: "keeper",
                    propIsOptional: false,
                    propIsReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "ZooKeeper",
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateNewExpression,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "ZooKeeper",
                        },
                        arguments: [],
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            declared: false,
            name: "createInstance",
            typeParameters: [
                {
                    kind: IntermediateKind.IntermediateGenericType,
                    name: "A",
                    constraint: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Animal",
                    },
                    defaultType: undefined,
                },
            ],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameter,
                    paramName: "c",
                    optional: false,
                    readonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateConstructorDefinition,
                        typeParameters: [],
                        parameters: [],
                        returnType: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "A",
                        },
                    },
                    initializer: undefined,
                },
            ],
            returnType: {
                kind: IntermediateKind.IntermediateFixedTypeReference,
                typeName: "A",
            },
            hasBody: true,
        }
    ],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;