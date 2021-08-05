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
import { FunctionPointerTable, searchFunctionPointerTable } from "@safelytyped/core-types";
import { Filepath } from "@safelytyped/filepath";
import { NodeArray, SourceFile, Statement } from "typescript";
import { getStatementKind } from "../AST";
import { IntermediateKind, IntermediateSourceFile, IntermediateSourceFileChildren } from "../IntermediateTypes";
import { processClassDeclaration } from "./processClassDeclaration";
import { processFunctionDeclaration } from "./processFunctionDeclaration";
import { processInterfaceDeclaration } from "./processInterfaceDeclaration";
import { processTypeAliasDeclaration } from "./processTypeAliasDeclaration";
import { processVariableStatement } from "./processVariableStatement";
import { StatementProcessor } from "./StatementProcessor";



const statementProcessors: FunctionPointerTable<string, StatementProcessor> = {
    'InterfaceDeclaration': processInterfaceDeclaration,
    'ClassDeclaration': processClassDeclaration,
    'FunctionDeclaration': processFunctionDeclaration,
    'TypeAliasDeclaration': processTypeAliasDeclaration,
    'VariableStatement': processVariableStatement,
}

export function processSourceFile(
    parsedSource: SourceFile
): IntermediateSourceFile
{
    // we need this, to help our process functions
    const retval: IntermediateSourceFile = {
        path: new Filepath(parsedSource.fileName),
        kind: IntermediateKind.IntermediateSourceFile,
        children: {},
    };

    // what's in the file?
    retval.children = processStatements(retval, parsedSource.statements);

    // all done
    return retval;
}

function processStatements(
    sourceFile: IntermediateSourceFile,
    statements: NodeArray<Statement>
): IntermediateSourceFileChildren
{
    const result: IntermediateSourceFileChildren = {};

    for(const statement of statements) {
        // shorthand
        const kind = getStatementKind(statement);

        // did we get a statement that we support?
        if (!kind) {
            continue;
        }

        // tslint:disable-next-line: no-console
        console.log("Processing node: " + kind);

        const statementProcessor = searchFunctionPointerTable(
            statementProcessors,
            [kind],
            () => { return undefined }
        );

        const processedItem = statementProcessor(
            statement
        );

        if (processedItem) {
            if (!result[kind]) {
                result[kind] = [];
            }
            // we have to override the compiler here :(
            result[kind]!.push(processedItem as any);
        }
    };

    // all done
    return result;
}