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
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    docBlock: undefined,
                    isConstant: true,
                    isDeclared: false,
                    isDefaultExport: false,
                    isExported: false,
                    isReadonly: false,
                    name: "Pausable",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateArrowFunction,
                        typeParameters: [],
                        parameters: [
                            {
                                kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                                decorators: [],
                                isOptional: false,
                                isReadonly: false,
                                name: "target",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateTypeofTypeReference,
                                    entityName: "Player",
                                },
                                initializer: undefined,
                            },
                        ],
                        returnType: undefined,
                        hasBody: true,
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            decorators: [
                {
                    kind: IntermediateKind.IntermediateDecorator,
                    expression: {
                        kind: IntermediateKind.IntermediateIdentifierReference,
                        name: "Pausable",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
            ],
            isAbstract: false,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Player",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "x",
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "0",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "y",
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "0",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: undefined,
            isDefaultExport: false,
            isExported: false,
            name: "FreezablePlayer",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateIntersectionType,
                typeRefs: [
                    {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Player",
                    },
                    {
                        kind: IntermediateKind.IntermediateAnonymousClassType,
                        members: [
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                isOptional: false,
                                isReadonly: false,
                                name: "shouldFreeze",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "boolean",
                                },
                            },
                        ],
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    docBlock: undefined,
                    isConstant: true,
                    isDeclared: false,
                    isDefaultExport: false,
                    isExported: false,
                    isReadonly: false,
                    name: "playerTwo",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateParenthesizedExpression,
                        expression: {
                            kind: IntermediateKind.IntermediateNewExpression,
                            typeRef: {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Player",
                            },
                            arguments: [],
                            asType: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "unknown",
                            },
                        },
                        asType: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "FreezablePlayer",
                        },
                        typeAssertion: undefined,
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediatePropertyAccessExpression,
            target: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "playerTwo",
                asType: undefined,
                typeAssertion: undefined,
            },
            propName: "shouldFreeze",
        },
    ],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;