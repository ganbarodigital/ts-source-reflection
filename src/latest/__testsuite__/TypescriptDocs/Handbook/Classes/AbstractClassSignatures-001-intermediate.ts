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
            kind: IntermediateKind.IntermediateClass,
            docBlock: undefined,
            decorators: [],
            isAbstract: true,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Base",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isAbstract: true,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "getName",
                    typeParameters: [],
                    parameters: [],
                    returnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    hasBody: false,
                },
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "printName",
                    typeParameters: [],
                    parameters: [],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "void",
                    },
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
            name: "Derived",
            typeParameters: [],
            extends: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Base",
                    typeAssertion: undefined,
                    asType: undefined,
                },
            ],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "getName",
                    typeParameters: [],
                    parameters: [],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    hasBody: true,
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "greet",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    name: "ctor",
                    typeRef: {
                        kind: IntermediateKind.IntermediateConstructorType,
                        parameters: [],
                        returnType: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Base",
                        },
                    },
                    initializer: undefined,
                },
            ],
            returnType: undefined,
            inferredReturnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "void",
            },
            hasBody: true,
            body: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateVariableDeclarations,
                        docBlock: undefined,
                        isDeclared: false,
                        isDefaultExport: false,
                        isExported: false,
                        variables: [
                            {
                                kind: IntermediateKind.IntermediateConstDeclaration,
                                isConstant: true,
                                isReadonly: false,
                                name: "instance",
                                typeRef: undefined,
                                initializer: {
                                    kind: IntermediateKind.IntermediateNewExpression,
                                    typeRef: {
                                        kind: IntermediateKind.IntermediateFixedTypeReference,
                                        typeName: "ctor",
                                    },
                                    arguments: [],
                                    asType: undefined,
                                },
                                inferredType: {
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "Base",
                                },
                            },
                        ],
                    },
                    {
                        kind: IntermediateKind.IntermediateCallExpression,
                        expression: {
                            kind: IntermediateKind.IntermediatePropertyAccessExpression,
                            target: {
                                kind: IntermediateKind.IntermediateIdentifierReference,
                                name: "instance",
                                typeAssertion: undefined,
                                asType: undefined,
                            },
                            propName: "printName",
                        },
                        typeArguments: [],
                        arguments: [],
                        inferredReturnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "void",
                        },
                        typeAssertion: undefined,
                        asType: undefined,
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateCallExpression,
            expression: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "greet",
                typeAssertion: undefined,
                asType: undefined,
            },
            typeArguments: [],
            arguments: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Derived",
                    typeAssertion: undefined,
                    asType: undefined,
                },
            ],
            inferredReturnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "void",
            },
            typeAssertion: undefined,
            asType: undefined,
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
}

export default expectedResult;