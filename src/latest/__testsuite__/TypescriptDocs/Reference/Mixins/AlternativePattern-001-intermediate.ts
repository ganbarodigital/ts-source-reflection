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
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            decorators: [],
            isAbstract: false,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Jumpable",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "jump",
                    typeParameters: [],
                    parameters: [],
                    returnType: undefined,
                    hasBody: true,
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            decorators: [],
            isAbstract: false,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Duckable",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "duck",
                    typeParameters: [],
                    parameters: [],
                    returnType: undefined,
                    hasBody: true,
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            decorators: [],
            isAbstract: false,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Sprite",
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
            kind: IntermediateKind.IntermediateInterface,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Sprite",
            typeParameters: [],
            extends: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Jumpable",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Duckable",
                    asType: undefined,
                    typeAssertion: undefined,
                },
            ],
            members: [],
        },
        {
            kind: IntermediateKind.IntermediateCallExpression,
            expression: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "applyMixins",
                asType: undefined,
                typeAssertion: undefined,
            },
            typeArguments: [],
            arguments: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Sprite",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateArrayLiteral,
                    elements: [
                        {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "Jumpable",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                        {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "Duckable",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                    ],
                    asType: undefined,
                    typeAssertion: undefined,
                },
            ],
            asType: undefined,
            typeAssertion: undefined,
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            variables: [
                {
                    kind: IntermediateKind.IntermediateLetDeclaration,
                    docBlock: undefined,
                    isConstant: false,
                    isDeclared: false,
                    isDefaultExport: false,
                    isExported: false,
                    isReadonly: false,
                    name: "player",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNewExpression,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Sprite",
                        },
                        arguments: [],
                        asType: undefined,
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateCallExpression,
            typeArguments: [],
            expression: {
                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                target: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "player",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                propName: "jump",
            },
            arguments: [],
            asType: undefined,
            typeAssertion: undefined,
        },
        {
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "applyMixins",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "derivedCtor",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "any",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "constructors",
                    typeRef: {
                        kind: IntermediateKind.IntermediateArrayTypeReference,
                        typeRef: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "any",
                        },
                    },
                    initializer: undefined,
                },
            ],
            returnType: undefined,
            hasBody: true,
        },
    ],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;