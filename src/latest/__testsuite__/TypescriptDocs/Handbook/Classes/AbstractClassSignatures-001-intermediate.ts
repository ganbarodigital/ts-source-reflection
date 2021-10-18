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
            isDeclared: false,
            isExported: false,
            isDefaultExport: false,
            isAbstract: true,
            name: "Base",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    name: "getName",
                    accessModifier: undefined,
                    isStatic: false,
                    isAbstract: true,
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
                    name: "printName",
                    accessModifier: undefined,
                    isStatic: false,
                    isAbstract: false,
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
            isDeclared: false,
            isAbstract: false,
            isExported: false,
            isDefaultExport: false,
            docBlock: undefined,
            decorators: [],
            name: "Derived",
            typeParameters: [],
            extends: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Base",
                    asType: undefined,
                    typeAssertion: undefined,
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
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            isDeclared: false,
            isExported: false,
            isDefaultExport: false,
            name: "greet",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    name: "ctor",
                    isOptional: false,
                    isReadonly: false,
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
        },
        {
            kind: IntermediateKind.IntermediateCallExpression,
            typeArguments: [],
            expression: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "greet",
                asType: undefined,
                typeAssertion: undefined,
            },
            arguments: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Derived",
                    asType: undefined,
                    typeAssertion: undefined,
                },
            ],
            inferredReturnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "void",
            },
            typeAssertion: undefined,
            asType: undefined,
        }
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;