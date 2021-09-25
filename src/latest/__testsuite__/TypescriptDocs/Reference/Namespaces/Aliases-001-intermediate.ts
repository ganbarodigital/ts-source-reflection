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
            kind: IntermediateKind.IntermediateNamespace,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "Shapes",
            children: [
                {
                    kind: IntermediateKind.IntermediateNamespace,
                    docBlock: undefined,
                    isDeclared: false,
                    isDefaultExport: false,
                    isExported: true,
                    name: "Polygons",
                    children: [
                        {
                            kind: IntermediateKind.IntermediateClass,
                            docBlock: undefined,
                            decorators: [],
                            isAbstract: false,
                            isDeclared: false,
                            isDefaultExport: false,
                            isExported: true,
                            name: "Triangle",
                            typeParameters: [],
                            extends: [],
                            implements: [],
                            members: [],
                        },
                        {
                            kind: IntermediateKind.IntermediateClass,
                            docBlock: undefined,
                            decorators: [],
                            isAbstract: false,
                            isDeclared: false,
                            isDefaultExport: false,
                            isExported: true,
                            name: "Square",
                            typeParameters: [],
                            extends: [],
                            implements: [],
                            members: [],
                        },
                    ],
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateImportAssignment,
            name: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "polygons",
                asType: undefined,
                typeAssertion: undefined,
            },
            modRef: {
                kind: IntermediateKind.IntermediateQualifiedName,
                left: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Shapes",
                    asType: undefined,
                    typeAssertion: undefined,
                },
                right: {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "Polygons",
                    asType: undefined,
                    typeAssertion: undefined,
                },
            },
        },
        {
            kind: IntermediateKind.IntermediateVariableDeclarations,
            isDefaultExport: false,
            isExported: false,
            variables: [
                {
                    kind: IntermediateKind.IntermediateLetDeclaration,
                    docBlock: undefined,
                    isConstant: false,
                    isDeclared: false,
                    isReadonly: false,
                    name: "sq",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateNewExpression,
                        typeRef: {
                            kind: IntermediateKind.IntermediateQualifiedTypeReference,
                            left: {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "polygons",
                            },
                            right: {
                                kind: IntermediateKind.IntermediateFixedTypeReference,
                                typeName: "Square"
                            },
                        },
                        arguments: [],
                        asType: undefined,
                    },
                },
            ],
        },
    ],
    referencedFiles: [],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;