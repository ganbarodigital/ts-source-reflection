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
            isDeclared: false,
            isDefaultExport: false,
            isExported: true,
            variables: [
                {
                    kind: IntermediateKind.IntermediateVarDeclaration,
                    docBlock: undefined,
                    isConstant: false,
                    isReadonly: false,
                    name: "pi",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "3.14",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            isDeclared: false,
            isDefaultExport: false,
            isExported: true,
            variables: [
                {
                    kind: IntermediateKind.IntermediateLetDeclaration,
                    docBlock: undefined,
                    isConstant: false,
                    isReadonly: false,
                    name: "squareTwo",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "1.41",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            isDeclared: false,
            isDefaultExport: false,
            isExported: true,
            variables: [
                {
                    kind: IntermediateKind.IntermediateConstDeclaration,
                    docBlock: undefined,
                    isConstant: true,
                    isReadonly: false,
                    name: "phi",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNumericLiteral,
                        value: "1.61",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
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
            isExported: true,
            name: "RandomNumberGenerator",
            typeParameters: [],
            extends: [],
            implements: [],
            members: [],
        },
        {
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            isExported: true,
            isDeclared: false,
            isDefaultExport: false,
            name: "absolute",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                    decorators: [],
                    name: "num",
                    isOptional: false,
                    isReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                    initializer: undefined,
                },
            ],
            returnType: undefined,
            hasBody: true,
        }
    ],
    referencedFiles: [],
    referencedLibs: [],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;