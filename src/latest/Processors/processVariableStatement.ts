// tslint:disable: no-bitwise
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

import { Statement } from "typescript";
import { AST } from "../AST";
import {
    IntermediateKind,
    IntermediateVariableDeclarations
} from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { processDocBlock } from "./processDocBlock";
import { ProcessingContext } from "./ProcessingContext";
import { processVariableDeclarationList } from "./processVariableDeclarationList";

export function processVariableStatement (
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: Statement
): IntermediateVariableDeclarations
{
    // make sure we have the right kind of statement
    const variableStmt = AST.mustBeVariableStatement(input);

    return {
        kind: IntermediateKind.IntermediateVariableDeclarations,
        docBlock: processDocBlock(processCtx, input),
        isDeclared: AST.hasDeclaredModifier(variableStmt.modifiers),
        isDefaultExport: AST.hasDefaultModifier(variableStmt.modifiers),
        isExported: AST.isNodeExported(variableStmt),
        variables: processVariableDeclarationList(
            processCtx,
            parentCtx,
            variableStmt.declarationList,
        ),
    }
}