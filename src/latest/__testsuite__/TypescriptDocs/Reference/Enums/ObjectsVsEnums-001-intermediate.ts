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
            kind: IntermediateKind.IntermediateEnum,
            docBlock: undefined,
            isConstant: true,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "EDirection",
            members: [
                {
                    kind: IntermediateKind.IntermediateEnumMember,
                    name: "Up",
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateEnumMember,
                    name: "Down",
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateEnumMember,
                    name: "Left",
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateEnumMember,
                    name: "Right",
                    initializer: undefined,
                },
            ],
        },
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
                    name: "ODirection",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateObjectLiteral,
                        properties: [
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "Up",
                                initializer: {
                                    kind: IntermediateKind.IntermediateNumericLiteral,
                                    value: "0",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "Down",
                                initializer: {
                                    kind: IntermediateKind.IntermediateNumericLiteral,
                                    value: "1",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "Left",
                                initializer: {
                                    kind: IntermediateKind.IntermediateNumericLiteral,
                                    value: "2",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediatePropertyAssignment,
                                propertyName: "Right",
                                initializer: {
                                    kind: IntermediateKind.IntermediateNumericLiteral,
                                    value: "3",
                                    typeAssertion: undefined,
                                    asType: undefined,
                                },
                            },
                        ],
                        typeAssertion: undefined,
                        asType: {
                            kind: IntermediateKind.IntermediateConstTypeCast,
                        },
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateAnonymousClassType,
                        members: [
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                docBlock: undefined,
                                isOptional: false,
                                isReadonly: true,
                                name: "Up",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateNumericLiteralType,
                                    typeName: "0",
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                docBlock: undefined,
                                isOptional: false,
                                isReadonly: true,
                                name: "Down",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateNumericLiteralType,
                                    typeName: "1",
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                docBlock: undefined,
                                isOptional: false,
                                isReadonly: true,
                                name: "Left",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateNumericLiteralType,
                                    typeName: "2",
                                },
                            },
                            {
                                kind: IntermediateKind.IntermediateTypedPropertySignature,
                                docBlock: undefined,
                                isOptional: false,
                                isReadonly: true,
                                name: "Right",
                                typeRef: {
                                    kind: IntermediateKind.IntermediateNumericLiteralType,
                                    typeName: "3",
                                },
                            },
                        ],
                    },
                },
            ],
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
}

export default expectedResult;