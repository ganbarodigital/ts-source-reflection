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
} from "../../../../IntermediateTypes";

const expectedResult: IntermediateSourceFile = {
    children: [
        {
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "configurable",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "value",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "boolean",
                    },
                    initializer: undefined,
                },
            ],
            returnType: undefined,
            hasBody: true,
        },
        {
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            decorators: [],
            isAbstract: false,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Point",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: IntermediateRestrictableScope.PRIVATE,
                    name: "_x",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: IntermediateRestrictableScope.PRIVATE,
                    name: "_y",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateConstructorDeclaration,
                    docBlock: undefined,
                    accessModifier: undefined,
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedConstructorParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            isReadonly: false,
                            setsPropertyWithScope: undefined,
                            name: "x",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "number",
                            },
                            initializer: undefined,
                        },
                        {
                            kind: IntermediateKind.IntermediateTypedConstructorParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            isReadonly: false,
                            setsPropertyWithScope: undefined,
                            name: "y",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "number",
                            },
                            initializer: undefined,
                        },
                    ],
                    returnType: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateGetter,
                    docBlock: undefined,
                    decorators: [
                        {
                            kind: IntermediateKind.IntermediateDecorator,
                            expression: {
                                kind: IntermediateKind.IntermediateCallExpression,
                                expression: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "configurable",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                                typeArguments: [],
                                arguments: [
                                    {
                                        kind: IntermediateKind.IntermediateBooleanLiteral,
                                        value: "false",
                                        asType: undefined,
                                        typeAssertion: undefined,
                                    },
                                ],
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                        },
                    ],
                    name: "x",
                    typeParameters: [],
                    returnType: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateGetter,
                    docBlock: undefined,
                    decorators: [
                        {
                            kind: IntermediateKind.IntermediateDecorator,
                            expression: {
                                kind: IntermediateKind.IntermediateCallExpression,
                                expression: {
                                    kind: IntermediateKind.IntermediateIdentifierReference,
                                    name: "configurable",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                                typeArguments: [],
                                arguments: [
                                    {
                                        kind: IntermediateKind.IntermediateBooleanLiteral,
                                        value: "false",
                                        asType: undefined,
                                        typeAssertion: undefined,
                                    },
                                ],
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                        },
                    ],
                    name: "y",
                    typeParameters: [],
                    returnType: undefined,
                },
            ],
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;