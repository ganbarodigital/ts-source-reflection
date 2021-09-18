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
import { DispatchMap, searchDispatchMap } from "@safelytyped/core-types";
import { NodeArray, Statement, SyntaxKind } from "typescript";
import { AST } from "../AST";
import {
    IntermediateStatement
} from "../IntermediateTypes";
import { StatementProcessor } from "./StatementProcessor";
import { STATEMENT_PROCESSORS } from "./STATEMENT_PROCESSORS";

export function processStatements(
    statements: NodeArray<Statement>
): IntermediateStatement[]
{
    const result: IntermediateStatement[] = [];

    for(const statement of statements) {
        // shorthand
        const kind = AST.getStatementKind(statement);

        // did we get a statement that we support?
        if (!kind) {
            // tslint:disable-next-line: no-console
            console.log("Skipping unsupported statement " + SyntaxKind[statement.kind]);
            continue;
        }

        // tslint:disable-next-line: no-console
        // console.log("Processing node: " + kind);

        const statementProcessor = searchDispatchMap(
            // the `as` is necessary to allow our fallback to return
            // an `undefined` value
            //
            // do not be surprised if a future version of TS
            // stops us doing this!
            STATEMENT_PROCESSORS as DispatchMap<string, StatementProcessor>,
            [kind],
            () => { return undefined }
        );

        const processedItem = statementProcessor(
            statement
        );

        if (processedItem) {
            result.push(processedItem);
        }
    }

    // all done
    return result;
}