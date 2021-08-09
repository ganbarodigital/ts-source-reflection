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

import { InterfaceDeclaration, Statement } from "typescript";
import * as AST from "../AST";
import { hasDeclaredModifier } from "../AST";
import { mustBeInterfaceDeclaration } from "../AST/mustBeInterfaceDeclaration";
import {
    IntermediateInterface,
    IntermediateKind,
    IntermediateTypeArgument
} from "../IntermediateTypes";
import { processExpressionWithTypeArguments } from "./processExpressionWithTypeArguments";
import { processMembers } from "./processMembers";
import { StatementProcessor } from "./StatementProcessor";

export const processInterfaceDeclaration: StatementProcessor = (
    input: Statement
): IntermediateInterface => {
    // make sure we're dealing with an actual interface
    const interfaceDec = mustBeInterfaceDeclaration(input);

    // all done
    return {
        kind: IntermediateKind.IntermediateInterface,
        declared: hasDeclaredModifier(input.modifiers),
        name: interfaceDec.name.text,
        docBlock: {
            kind: IntermediateKind.IntermediateDocBlock,
            text: AST.findDocBlockText(interfaceDec),
        },
        exported: AST.isNodeExported(interfaceDec),
        extends: getBaseInterfaceTypes(interfaceDec),
        members: processMembers(interfaceDec.members),
    }
}

function getBaseInterfaceTypes(
    input: InterfaceDeclaration
): IntermediateTypeArgument[] {
    // our return value
    const retval: IntermediateTypeArgument[] = [];

    // find the implement clauses (if any)
    const heritageClauses = AST.findExtendsHeritageClauses(input);
    for (const clause of heritageClauses) {
        for (const clauseType of clause.types) {
            retval.push(processExpressionWithTypeArguments(clauseType));
        }
    }

    return retval;
}