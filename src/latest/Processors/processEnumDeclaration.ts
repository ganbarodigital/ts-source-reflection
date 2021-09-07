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
import { EnumMember, NodeArray, Statement } from "typescript";
import { AST } from "../AST";
import {
    IntermediateEnum,
    IntermediateEnumMember,
    IntermediateExpression,
    IntermediateKind
} from "../IntermediateTypes";
import { processDocBlock } from "./processDocBlock";
import { processExpression } from "./processExpression";
import { StatementProcessor } from "./StatementProcessor";

export const processEnumDeclaration: StatementProcessor = (
    input: Statement
): IntermediateEnum => {
    // make sure we have the right kind of statement
    const enumDec = AST.mustBeEnumDeclaration(input);

    return {
        kind: IntermediateKind.IntermediateEnum,
        docBlock: processDocBlock(enumDec),
        isConstant: AST.hasConstModifier(enumDec.modifiers),
        isExported: AST.hasExportModifier(enumDec.modifiers),
        isDefaultExport: AST.hasDefaultModifier(enumDec.modifiers),
        name: enumDec.name.getText(),
        members: processEnumMembers(enumDec.members),
    }
}

function processEnumMembers(
    input: NodeArray<EnumMember>
): IntermediateEnumMember[]
{
    // our return value
    const retval: IntermediateEnumMember[] = [];

    for (const member of input) {
        // does this enum member have a value?
        let initializer: Maybe<IntermediateExpression>;
        if (member.initializer) {
            initializer = processExpression(member.initializer);
        }

        retval.push(
            {
                kind: IntermediateKind.IntermediateEnumMember,
                name: member.name.getText(),
                initializer,
            }
        )
    }

    // all done
    return retval;
}