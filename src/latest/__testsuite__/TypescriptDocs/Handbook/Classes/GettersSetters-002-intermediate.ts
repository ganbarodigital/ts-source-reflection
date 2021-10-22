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
            isAbstract: false,
            name: "Thing",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateUntypedPropertyDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    name: "_size",
                    isOptional: false,
                    isReadonly: false,
                    isStatic: false,
                    accessModifier: undefined,
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
                    kind: IntermediateKind.IntermediateGetter,
                    docBlock: undefined,
                    decorators: [],
                    typeParameters: [],
                    name: "size",
                    returnType: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateSetter,
                    docBlock: undefined,
                    decorators: [],
                    typeParameters: [],
                    name: "size",
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                            decorators: [],
                            name: "value",
                            isOptional: false,
                            isReadonly: false,
                            typeRef: {
                                kind: IntermediateKind.IntermediateUnionType,
                                typeRefs: [
                                    {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "string",
                                    },
                                    {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "number",
                                    },
                                    {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "boolean",
                                    },
                                ],
                            },
                            initializer: undefined,
                        },
                    ],
                },
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