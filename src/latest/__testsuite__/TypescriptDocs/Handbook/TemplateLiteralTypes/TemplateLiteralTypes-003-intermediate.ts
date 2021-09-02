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
            kind: IntermediateKind.IntermediateTypeAliasDefinition,
            docBlock: undefined,
            isExported: false,
            isDefaultExport: false,
            name: "EmailLocaleIDs",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateUnionType,
                typeRefs: [
                    {
                        kind: IntermediateKind.IntermediateLiteralType,
                        typeName: '"welcome_email"',
                    },
                    {
                        kind: IntermediateKind.IntermediateLiteralType,
                        typeName: '"email_heading"',
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDefinition,
            docBlock: undefined,
            isExported: false,
            isDefaultExport: false,
            name: "FooterLocaleIDs",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateUnionType,
                typeRefs: [
                    {
                        kind: IntermediateKind.IntermediateLiteralType,
                        typeName: '"footer_title"',
                    },
                    {
                        kind: IntermediateKind.IntermediateLiteralType,
                        typeName: '"footer_sendoff"',
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDefinition,
            docBlock: undefined,
            isExported: false,
            isDefaultExport: false,
            name: "AllLocaleIDs",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateTemplateLiteralType,
                head: "",
                spans: [
                    {
                        kind: IntermediateKind.IntermediateTemplateLiteralSpan,
                        typeRef: {
                            kind: IntermediateKind.IntermediateUnionType,
                            typeRefs: [
                                {
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "EmailLocaleIDs",
                                },
                                {
                                    kind: IntermediateKind.IntermediateFixedTypeReference,
                                    typeName: "FooterLocaleIDs",
                                },
                            ],
                        },
                        tail: "_id",
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDefinition,
            docBlock: undefined,
            isExported: false,
            isDefaultExport: false,
            name: "Lang",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateUnionType,
                typeRefs: [
                    {
                        kind: IntermediateKind.IntermediateLiteralType,
                        typeName: '"en"',
                    },
                    {
                        kind: IntermediateKind.IntermediateLiteralType,
                        typeName: '"ja"',
                    },
                    {
                        kind: IntermediateKind.IntermediateLiteralType,
                        typeName: '"pt"',
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDefinition,
            docBlock: undefined,
            isExported: false,
            isDefaultExport: false,
            name: "LocaleMessageIDs",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateTemplateLiteralType,
                head: "",
                spans: [
                    {
                        kind: IntermediateKind.IntermediateTemplateLiteralSpan,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "Lang",
                        },
                        tail: "_",
                    },
                    {
                        kind: IntermediateKind.IntermediateTemplateLiteralSpan,
                        typeRef: {
                            kind: IntermediateKind.IntermediateFixedTypeReference,
                            typeName: "AllLocaleIDs",
                        },
                        tail: "",
                    },
                ],
            },
        },
    ],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;