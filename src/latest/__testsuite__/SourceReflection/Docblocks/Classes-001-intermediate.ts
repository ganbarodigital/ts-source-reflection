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
            docBlock: {
                kind: IntermediateKind.IntermediateDocBlock,
                text: "/**\n * this is a test of docblocks for classes\n */"
            },
            decorators: [],
            isAbstract: false,
            isDeclared: false,
            isExported: true,
            isDefaultExport: false,
            name: "Classes001",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for prop1\n     */",
                    },
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: IntermediateRestrictableScope.PUBLIC,
                    name: "prop1",
                    initializer: undefined,
                    inferredType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "any",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for prop2\n     */",
                    },
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: IntermediateRestrictableScope.PROTECTED,
                    name: "prop2",
                    initializer: undefined,
                    inferredType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "any",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for prop3\n     */",
                    },
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: IntermediateRestrictableScope.PRIVATE,
                    name: "prop3",
                    initializer: undefined,
                    inferredType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "any",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for prop4\n     */",
                    },
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: {
                        kind: IntermediateKind.IntermediatePrivatePropertyIdentifier,
                        name: "#prop4",
                    },
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "0",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for prop5\n     */",
                    },
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "prop5",
                    initializer: undefined,
                    inferredType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "any",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertyDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for prop6\n     */",
                    },
                    decorators: [],
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "prop6",
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateConstructorDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for the constructor\n     *\n     * @param param1 our first parameter\n     * @param param2 our second parameter\n     */",
                    },
                    accessModifier: IntermediateRestrictableScope.PUBLIC,
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedConstructorParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            isReadonly: false,
                            setsPropertyWithScope: undefined,
                            name: "param1",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        },
                        {
                            kind: IntermediateKind.IntermediateTypedConstructorParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            isReadonly: false,
                            setsPropertyWithScope: undefined,
                            name: "param2",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "number",
                            },
                            initializer: undefined,
                        },
                    ],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Classes001"
                    }
                },
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for method01\n     */"
                    },
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: IntermediateRestrictableScope.PUBLIC,
                    name: "method01",
                    typeParameters: [],
                    parameters: [],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "void",
                    },
                    hasBody: true,
                },
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for method02\n     */"
                    },
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: IntermediateRestrictableScope.PROTECTED,
                    name: "method02",
                    typeParameters: [],
                    parameters: [],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "void",
                    },
                    hasBody: true,
                },
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for method03\n     */",
                    },
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: IntermediateRestrictableScope.PRIVATE,
                    name: "method03",
                    typeParameters: [],
                    parameters: [],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "void",
                    },
                    hasBody: true,
                },
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for method04\n     */"
                    },
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "method04",
                    typeParameters: [],
                    parameters: [],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "void",
                    },
                    hasBody: true,
                },
                {
                    kind: IntermediateKind.IntermediateGetter,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for fakeProp5's getter\n     */"
                    },
                    decorators: [],
                    accessModifier: IntermediateRestrictableScope.PUBLIC,
                    name: "fakeProp5",
                    typeParameters: [],
                    returnType: undefined,
                    inferredReturnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "string",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateSetter,
                    docBlock: {
                        kind: IntermediateKind.IntermediateDocBlock,
                        text: "/**\n     * this is the docblock for fakeProp1's setter\n     */",
                    },
                    decorators: [],
                    accessModifier: IntermediateRestrictableScope.PUBLIC,
                    name: "fakeProp5",
                    typeParameters: [],
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            isReadonly: false,
                            name: "input",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        },
                    ],
                }
            ],
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;