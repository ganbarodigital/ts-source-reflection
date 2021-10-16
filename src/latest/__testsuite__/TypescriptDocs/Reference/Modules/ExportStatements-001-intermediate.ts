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
            kind: IntermediateKind.IntermediateImportDeclaration,
            isTypeOnly: false,
            items: [
                {
                    kind: IntermediateKind.IntermediateImportBinding,
                    name: {
                        kind: IntermediateKind.IntermediateIdentifierReference,
                        name: "StringValidator",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
            ],
            source: {
                kind: IntermediateKind.IntermediateStringLiteral,
                value: "./ExportingDeclaration-001-StringValidator",
                asType: undefined,
                typeAssertion: undefined,
            },
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
                    name: "numberRegexp",
                    typeRef: undefined,
                    initializer: {
                        kind: IntermediateKind.IntermediateRegexLiteral,
                        value: "/^[0-9]+$/",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                    inferredType: {
                        kind: IntermediateKind.IntermediateFixedTypeReference,
                        typeName: "RegExp",
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
            isExported: false,
            name: "ZipCodeValidator",
            typeParameters: [],
            extends: [],
            implements: [
                {
                    kind: IntermediateKind.IntermediateIdentifierReference,
                    name: "StringValidator",
                    asType: undefined,
                    typeAssertion: undefined,
                },
            ],
            members: [
                {
                    kind: IntermediateKind.IntermediateMethodDeclaration,
                    docBlock: undefined,
                    decorators: [],
                    isAbstract: false,
                    isStatic: false,
                    accessModifier: undefined,
                    name: "isAcceptable",
                    typeParameters: [],
                    parameters: [
                        {
                            kind: IntermediateKind.IntermediateTypedCallableParameterDeclaration,
                            decorators: [],
                            isOptional: false,
                            isReadonly: false,
                            name: "s",
                            typeRef: {
                                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                typeName: "string",
                            },
                            initializer: undefined,
                        },
                    ],
                    returnType: undefined,
                    hasBody: true,
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateExportedIdentifiers,
            items: [
                {
                    kind: IntermediateKind.IntermediateNamedExportItem,
                    name: {
                        kind: IntermediateKind.IntermediateIdentifierReference,
                        name: "ZipCodeValidator",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateExportedIdentifiers,
            items: [
                {
                    kind: IntermediateKind.IntermediateAliasedExportItem,
                    name: {
                        kind: IntermediateKind.IntermediateIdentifierReference,
                        name: "mainValidator",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
                    exportedName: {
                        kind: IntermediateKind.IntermediateIdentifierReference,
                        name: "ZipCodeValidator",
                        asType: undefined,
                        typeAssertion: undefined,
                    },
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