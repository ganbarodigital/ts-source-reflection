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
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "reportableClassDecorator",
            typeParameters: [
                {
                    kind: IntermediateKind.IntermediateGenericType,
                    name: "T",
                    constraint: {
                        kind: IntermediateKind.IntermediateAnonymousClassType,
                        members: [
                            {
                                kind: IntermediateKind.IntermediateConstructorSignature,
                                parameters: [
                                    {
                                        kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
                                        isOptional: false,
                                        isReadonly: false,
                                        name: "args",
                                        typeRef: {
                                            kind: IntermediateKind.IntermediateRestType,
                                            typeRef: {
                                                kind: IntermediateKind.IntermediateArrayTypeReference,
                                                typeRef: {
                                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                                    typeName: "any",
                                                },
                                            },
                                        },
                                    },
                                ],
                                returnType: {
                                    kind: IntermediateKind.IntermediateEmptyObjectType,
                                },
                            },
                        ],
                    },
                    defaultType: undefined,
                },
            ],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "constructor",
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "T",
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
            decorators: [
                {
                    kind: IntermediateKind.IntermediateDecorator,
                    expression: {
                        kind: IntermediateKind.IntermediateIdentifierReference,
                        name: "reportableClassDecorator",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
            ],
            isAbstract: false,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "BugReport",
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
                    name: "type",
                    initializer: {
                        kind: IntermediateKind.IntermediateStringLiteral,
                        value: "report",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "title",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
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
                            name: "t",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        }
                    ],
                    returnType: undefined,
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    docBlock: undefined,
                    isConstant: true,
                    isReadonly: false,
                    name: "bug",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNewExpression,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "BugReport",
                        },
                        arguments: [
                            {
                                kind: IntermediateKind.IntermediateStringLiteral,
                                value: "Needs dark mode",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                        ],
                        asType: undefined,
                    },
                },
            ],
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;