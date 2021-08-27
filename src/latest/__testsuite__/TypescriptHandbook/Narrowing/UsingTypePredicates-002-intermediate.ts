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
            typeName: "Pet",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateAnonymousClassType,
                members: [
                    {
                        kind: IntermediateKind.IntermediateTypedPropertySignature,
                        propName: "name",
                        propIsOptional: false,
                        propIsReadonly: false,
                        typeRef: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "string",
                        },
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateInterface,
            docBlock: undefined,
            name: "Fish",
            exported: false,
            declared: false,
            extends: [
                {
                    kind: IntermediateKind.IntermediateFixedTypeArgument,
                    name: "Pet",
                },
            ],
            typeParameters: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    propName: "swim",
                    propIsOptional: false,
                    propIsReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateFunctionTypeSignature,
                        typeParameters: [],
                        parameters: [],
                        returnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "void",
                        },
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateInterface,
            docBlock: undefined,
            name: "Bird",
            exported: false,
            declared: false,
            extends: [
                {
                    kind: IntermediateKind.IntermediateFixedTypeArgument,
                    name: "Pet",
                },
            ],
            typeParameters: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    propName: "fly",
                    propIsOptional: false,
                    propIsReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateFunctionTypeSignature,
                        typeParameters: [],
                        parameters: [],
                        returnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "void",
                        },
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            declared: false,
            exported: false,
            name: "isFish",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDefinition,
                    paramName: "pet",
                    typeRef: {
                        kind: IntermediateKind.IntermediateUnionType,
                        typeRefs: [
                            {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: 'Fish',
                            },
                            {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: 'Bird',
                            },
                        ],
                    },
                    optional: false,
                    readonly: false,
                    initializer: undefined,
                },
            ],
            returnType: {
                kind: IntermediateKind.IntermediateTypePredicate,
                parameterName: "pet",
                typeRef: {
                    kind: IntermediateKind.IntermediateFixedTypeReference,
                    typeName: 'Fish',
                },
            },
            hasBody: true,
        },
        {
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            declared: false,
            exported: false,
            name: "getSmallPet",
            typeParameters: [],
            parameters: [],
            returnType: {
                kind: IntermediateKind.IntermediateUnionType,
                typeRefs: [
                    {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Fish",
                    },
                    {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Bird",
                    },
                ],
            },
            hasBody: true,
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            variables: [
                {
                    kind: IntermediateKind.IntermediateVariableDeclaration,
                    variableName: "zoo",
                    constant: true,
                    exported: false,
                    declared: false,
                    readonly: false,
                    docBlock: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateArrayLiteral,
                        elements: [
                            {
                                kind: IntermediateKind.IntermediateCallableExpression,
                                target: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "getSmallPet",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                                typeArguments: [],
                                arguments: [],
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateCallableExpression,
                                target: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "getSmallPet",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                                typeArguments: [],
                                arguments: [],
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            {
                                kind: IntermediateKind.IntermediateCallableExpression,
                                target: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "getSmallPet",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                                typeArguments: [],
                                arguments: [],
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        ],
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateParenthesizedType,
                            typeRef: {
                                kind: IntermediateKind.IntermediateUnionType,
                                typeRefs: [
                                    {
                                        kind: IntermediateKind.IntermediateFixedTypeReference,
                                        typeName: "Fish",
                                    },
                                    {
                                        kind: IntermediateKind.IntermediateFixedTypeReference,
                                        typeName: "Bird",
                                    },
                                ],
                            },
                        },
                    },
                }
            ],
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            variables: [
                {
                    kind: IntermediateKind.IntermediateVariableDeclaration,
                    docBlock: undefined,
                    exported: false,
                    declared: false,
                    constant: true,
                    readonly: false,
                    variableName: "underWater1",
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Fish",
                        },
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateCallableExpression,
                        target: {
                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                            target: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "zoo",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                            propName: "filter",
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "isFish",
                                asType: undefined,
                                typeAssertion: undefined,
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
            variables: [
                {
                    kind: IntermediateKind.IntermediateVariableDeclaration,
                    docBlock: undefined,
                    exported: false,
                    declared: false,
                    constant: true,
                    readonly: false,
                    variableName: "underWater2",
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Fish",
                        },
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateCallableExpression,
                        target: {
                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                            target: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "zoo",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                            propName: "filter",
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "isFish",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                        ],
                        typeAssertion: undefined,
                        asType: {
                            kind: IntermediateKind.IntermediateArrayTypeReference,
                            typeRef: {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Fish",
                            },
                        },
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            variables: [
                {
                    kind: IntermediateKind.IntermediateVariableDeclaration,
                    docBlock: undefined,
                    exported: false,
                    declared: false,
                    constant: true,
                    readonly: false,
                    variableName: "underWater3",
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Fish",
                        },
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateCallableExpression,
                        target: {
                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                            target: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "zoo",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                            propName: "filter",
                        },
                        typeArguments: [],
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateArrowFunction,
                                typeParameters: [],
                                parameters: [
                                    {
                                        kind: IntermediateKind.IntermediateUntypedCallableParameterDefinition,
                                        paramName: "pet",
                                        optional: false,
                                        initializer: undefined,
                                    },
                                ],
                                returnType: {
                                    kind: IntermediateKind.IntermediateTypePredicate,
                                    parameterName: "pet",
                                    typeRef: {
                                        kind: IntermediateKind.IntermediateFixedTypeReference,
                                        typeName: "Fish",
                                    },
                                },
                                hasBody: true,
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