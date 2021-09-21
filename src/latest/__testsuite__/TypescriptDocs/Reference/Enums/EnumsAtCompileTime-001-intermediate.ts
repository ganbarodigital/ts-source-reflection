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
            kind: IntermediateKind.IntermediateEnum,
            docBlock: undefined,
            isConstant: false,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "LogLevel",
            members: [
                {
                    kind: IntermediateKind.IntermediateEnumMember,
                    name: "ERROR",
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateEnumMember,
                    name: "WARN",
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateEnumMember,
                    name: "INFO",
                    initializer: undefined,
                },
                {
                    kind: IntermediateKind.IntermediateEnumMember,
                    name: "DEBUG",
                    initializer: undefined,
                },
            ],
        },
        {
            kind: IntermediateKind.IntermediateTypeAliasDeclaration,
            docBlock: {
                kind: IntermediateKind.IntermediateDocBlock,
                text: "/**\n * This is equivalent to:\n * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';\n */",
            },
            isDefaultExport: false,
            isExported: false,
            name: "LogLevelStrings",
            typeParameters: [],
            typeRef: {
                kind: IntermediateKind.IntermediateKeyofTypeReference,
                typeRef: {
                    kind: IntermediateKind.IntermediateTypeofTypeReference,
                    entityName: "LogLevel",
                },
            },
        },
    ],
    referencedFiles: [],
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;