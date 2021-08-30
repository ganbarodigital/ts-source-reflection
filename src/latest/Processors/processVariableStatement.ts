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
import {
    isTypeOperatorNode,
    NodeFlags,
    Statement,
    SyntaxKind,
    VariableDeclaration
} from "typescript";
import { AST } from "../AST";
import {
    IntermediateExpression,
    IntermediateKind,
    IntermediateTypeReference,
    IntermediateVariableDeclaration,
    IntermediateVariableDeclarations
} from "../IntermediateTypes";
import { processDocBlock } from "./processDocBlock";
import { processExpression } from "./processExpression";
import { processTypeNode } from "./processTypeNode";
import { StatementProcessor } from "./StatementProcessor";

export const processVariableStatement: StatementProcessor = (
    input: Statement
): IntermediateVariableDeclarations => {
    // make sure we have the right kind of statement
    const variableStmt = AST.mustBeVariableStatement(input);

    // this will be our return valie
    const retval: IntermediateVariableDeclarations = {
        kind: IntermediateKind.IntermediateVariableDeclarations,
        variables: []
    }

    // some information about the variables are actually stored
    // at the list level (doh!)
    const contextFlags = {
        exported: AST.isNodeExported(input),
        constant: false,
    }
    // tslint:disable-next-line: no-bitwise
    if (variableStmt.declarationList.flags & NodeFlags.Const) {
        contextFlags.constant = true;
    }

    // what do we have?
    for (const member of variableStmt.declarationList.declarations) {
        retval.variables.push(
            processVariableDeclaration(member, contextFlags)
        );
    }

    // all done
    return retval;
}

function processVariableDeclaration(
    input: VariableDeclaration,
    contextFlags: {
        exported: boolean;
        constant: boolean;
    }
): IntermediateVariableDeclaration
{
    // special case - variable is readonly
    //
    // instead of being a modifier, this is buried in the variable
    // type instead
    let isReadonly: boolean = false;
    let varType = input.type;
    if (varType && isTypeOperatorNode(varType)) {
        if (varType.operator === SyntaxKind.ReadonlyKeyword) {
            isReadonly = true;
            varType = varType.type;
        }
    }

    // does this variable have an explicit type?
    let typeRef: Maybe<IntermediateTypeReference>;
    if (varType) {
        typeRef = processTypeNode(varType);
    }

    // does this variable have an initial value?
    let initialiser: Maybe<IntermediateExpression>;
    if (input.initializer) {
        initialiser = processExpression(input.initializer);
    }

    // this will be our return value
    return <IntermediateVariableDeclaration>{
        kind: IntermediateKind.IntermediateVariableDeclaration,
        docBlock: processDocBlock(input),
        isDeclared: AST.hasDeclaredModifier(input.modifiers),
        isConstant: contextFlags.constant,
        isExported: contextFlags.exported,
        isDefaultExport: AST.hasDefaultModifier(input.modifiers),
        isReadonly,
        name: input.name.getText(),
        initializer: initialiser,
        typeRef,
    }
}

