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
            kind: IntermediateKind.IntermediateFunctionImplementation,
            docBlock: undefined,
            isDeclared: false,
            isDefaultExport: false,
            isExported: false,
            name: "f",
            typeParameters: [],
            parameters: [],
            returnType: undefined,
            inferredReturnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "number",
            },
            hasBody: true,
            body: {
                kind: IntermediateKind.IntermediateBlock,
                children: [
                    {
                        kind: IntermediateKind.IntermediateVariableDeclarations,
                        docBlock: undefined,
                        isDeclared: false,
                        isDefaultExport: false,
                        isExported: false,
                        variables: [
                            {
                                kind: IntermediateKind.IntermediateVarDeclaration,
                                isConstant: false,
                                isReadonly: false,
                                name: "a",
                                typeRef: undefined,
                                inferredType: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "number",
                                },
                                initializer: {
                                    kind: IntermediateKind.IntermediateNumericLiteral,
                                    value: "1",
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            },
                        ],
                    },
                    {
                        kind: IntermediateKind.IntermediateVarAssignment,
                        target: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "a",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                        initializer: {
                            kind: IntermediateKind.IntermediateNumericLiteral,
                            value: "2",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                    },
                    {
                        kind: IntermediateKind.IntermediateVariableDeclarations,
                        docBlock: undefined,
                        isDeclared: false,
                        isDefaultExport: false,
                        isExported: false,
                        variables: [
                            {
                                kind: IntermediateKind.IntermediateVarDeclaration,
                                isConstant: false,
                                isReadonly: false,
                                name: "b",
                                typeRef: undefined,
                                inferredType: {
                                    kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                    typeName: "number",
                                },
                                initializer: {
                                    kind: IntermediateKind.IntermediateCallExpression,
                                    expression: {
                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                        name: "g",
                                        asType: undefined,
                                        typeAssertion: undefined,
                                    },
                                    typeArguments: [],
                                    arguments: [],
                                    inferredReturnType: {
                                        kind: IntermediateKind.IntermediateBuiltInTypeReference,
                                        typeName: "number",
                                    },
                                    asType: undefined,
                                    typeAssertion: undefined,
                                },
                            },
                        ],
                    },
                    {
                        kind: IntermediateKind.IntermediateVarAssignment,
                        target: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "a",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                        initializer: {
                            kind: IntermediateKind.IntermediateNumericLiteral,
                            value: "3",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                    },
                    {
                        kind: IntermediateKind.IntermediateReturnStatement,
                        expression: {
                            kind: IntermediateKind.IntermediateIdentifierReference,
                            name: "b",
                            asType: undefined,
                            typeAssertion: undefined,
                        },
                    },
                    {
                        kind: IntermediateKind.IntermediateFunctionImplementation,
                        docBlock: undefined,
                        isDeclared: false,
                        isDefaultExport: false,
                        isExported: false,
                        name: "g",
                        typeParameters: [],
                        parameters: [],
                        returnType: undefined,
                        inferredReturnType: {
                            kind: IntermediateKind.IntermediateBuiltInTypeReference,
                            typeName: "number",
                        },
                        hasBody: true,
                        body: {
                            kind: IntermediateKind.IntermediateBlock,
                            children: [
                                {
                                    kind: IntermediateKind.IntermediateReturnStatement,
                                    expression: {
                                        kind: IntermediateKind.IntermediateIdentifierReference,
                                        name: "a",
                                        asType: undefined,
                                        typeAssertion: undefined,
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: IntermediateKind.IntermediateCallExpression,
            expression: {
                kind: IntermediateKind.IntermediateIdentifierReference,
                name: "f",
                asType: undefined,
                typeAssertion: undefined,
            },
            typeArguments: [],
            arguments: [],
            typeAssertion: undefined,
            asType: undefined,
            inferredReturnType: {
                kind: IntermediateKind.IntermediateBuiltInTypeReference,
                typeName: "number",
            },
        },
    ],
    referencedFiles: [],
    referencedLibs: [],
    referencedTypes: [],
    referenceNoDefaultLib: false,
    kind: IntermediateKind.IntermediateSourceFile,
}

export default expectedResult;