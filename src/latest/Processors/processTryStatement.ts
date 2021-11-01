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

import { Maybe } from "@safelytyped/core-types";
import { Statement, VariableDeclaration } from "typescript";
import { AST } from "../AST";
import {
    IntermediateKind,
    IntermediateStatement,
    IntermediateTryCatch,
    IntermediateVariableDeclaration,
    mustBeIntermediateStatement
} from "../IntermediateTypes";
import { processExpression } from "./processExpression";
import { ProcessingContext } from "./ProcessingContext";
import { processMaybe } from "./processMaybe";
import { processStatement } from "./processStatement";
import { processTypeNode } from "./processTypeNode";

export function processTryStatement(
    processCtx: ProcessingContext,
    input: Statement
): IntermediateTryCatch
{
    const tryStmt = AST.mustBeTryStatement(input);

    // do we have a catch block?
    let catchClause: Maybe<IntermediateVariableDeclaration>;
    let catchBlock: Maybe<IntermediateStatement>;
    if (tryStmt.catchClause) {
        catchClause = processMaybe(
            tryStmt.catchClause.variableDeclaration,
            (value) => processCatchClauseVariableDeclaration(processCtx, value),
        );
        catchBlock = mustBeIntermediateStatement(
            processStatement(processCtx, tryStmt.catchClause.block)
        );
    }
    return {
        kind: IntermediateKind.IntermediateTryCatch,
        tryBlock: mustBeIntermediateStatement(
            processStatement(processCtx, tryStmt.tryBlock)
        ),
        catchClause,
        catchBlock,
        finallyBlock: processMaybe(
            tryStmt.finallyBlock,
            (value) => processStatement(processCtx, value),
        ),
    }
}

function processCatchClauseVariableDeclaration(
    processCtx: ProcessingContext,
    input: VariableDeclaration
): IntermediateVariableDeclaration
{
    return {
        kind: IntermediateKind.IntermediateCaughtVarDeclaration,
        name: input.name.getText(),
        typeRef: processMaybe(
            input.type,
            (value) => processTypeNode(processCtx, value),
        ),
        initializer: processMaybe(
            input.initializer,
            (value) => processExpression(processCtx, value),
        )
    }
}