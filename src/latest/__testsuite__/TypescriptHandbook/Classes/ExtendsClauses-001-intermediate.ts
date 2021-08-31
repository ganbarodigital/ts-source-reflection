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
            isDeclared: false,
            isExported: false,
            isDefaultExport: false,
            isAbstract: false,
            typeParameters: [],
            name: "Animal",
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDefinition,
                    docBlock: undefined,
                    accessModifier: undefined,
                    isStatic: false,
                    isAbstract: false,
                    name: "move",
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
            isDeclared: false,
            isExported: false,
            isDefaultExport: false,
            isAbstract: false,
            name: "Dog",
            typeParameters: [],
            extends: [
                {
                    kind: IntermediateKind.IntermediateFixedTypeArgument,
                    name: "Animal",
                },
            ],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDefinition,
                    docBlock: undefined,
                    name: "woof",
                    accessModifier: undefined,
                    isStatic: false,
                    isAbstract: false,
                    typeParameters: [],
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedCallableParameterDefinition,
                            name: "times",
                            isOptional: false,
                            isReadonly: false,
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "number",
                            },
                            initializer: undefined,
                        }
                    ],
                    returnType: undefined,
                    hasBody: true,
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    docBlock: undefined,
                    isDeclared: false,
                    isExported: false,
                    isDefaultExport: false,
                    isReadonly: false,
                    isConstant: true,
                    name: "d",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNewExpression,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Dog",
                        },
                        arguments: [],
                    },
                }
            ]
        },
        {
            kind: IntermediateKind.IntermediateCallExpression,
            typeArguments: [],
            typeAssertion: undefined,
            asType: undefined,
            expression: {
                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                target: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "d",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                propName: "move",
            },
            arguments: [],
        },
        {
            kind: IntermediateKind.IntermediateCallExpression,
            typeArguments: [],
            typeAssertion: undefined,
            asType: undefined,
            expression: {
                kind: IntermediateKind.IntermediatePropertyAccessExpression,
                target: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "d",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                propName: "woof",
            },
            arguments: [
                {
                    kind: IntermediateKind.IntermediateNumericLiteral,
                    value: "3",
                    asType: undefined,
                    typeAssertion: undefined,
                },
            ],
        },
    ],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;