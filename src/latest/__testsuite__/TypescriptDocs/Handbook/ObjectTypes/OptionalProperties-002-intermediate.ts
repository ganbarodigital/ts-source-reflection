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
            kind: IntermediateKind.IntermediateInterface,
            isDeclared: false,
            name: "PaintOptions",
            isExported: false,
            isDefaultExport: false,
            docBlock: undefined,
            typeParameters: [],
            extends: [],
            members: [
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    name: "shape",
                    isOptional: false,
                    isReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "Shape",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    name: "xPos",
                    isOptional: true,
                    isReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                },
                {
                    kind: IntermediateKind.IntermediateTypedPropertySignature,
                    name: "yPos",
                    isOptional: true,
                    isReadonly: false,
                    typeRef: {
                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                        typeName: "number",
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateFunction,
            docBlock: undefined,
            isDeclared: false,
            isExported: false,
            isDefaultExport: false,
            name: "paintShape",
            typeParameters: [],
            parameters: [
                {
                    kind: IntermediateKind.IntermediateObjectBindingParameter,
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateObjectBindingElement,
                            name: "shape",
                            initializer: undefined,
                            receiverAlias: undefined,
                        },
                        {
                            kind: IntermediateKind.IntermediateObjectBindingElement,
                            name: "xPos",
                            initializer: {
                                kind: IntermediateKind.IntermediateNumericLiteral,
                                value: "0",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                            receiverAlias: undefined,
                        },
                        {
                            kind: IntermediateKind.IntermediateObjectBindingElement,
                            name: "yPos",
                            initializer: {
                                kind: IntermediateKind.IntermediateNumericLiteral,
                                value: "0",
                                asType: undefined,
                                typeAssertion: undefined,
                            },
                            receiverAlias: undefined,
                        },
                    ],
                    typeRef: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "PaintOptions",
                    },
                },
            ],
            returnType: undefined,
            hasBody: true,
        },
    ],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;