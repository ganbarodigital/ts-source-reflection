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
    DEFAULT_DATA_PATH,
    getClassNames,
    UnsupportedTypeError
} from "@safelytyped/core-types";
import {
    // isNamedExports,
    NamedExportBindings,
    NamedExports,
    // NamespaceExport,
    Statement,
    SyntaxKind
} from "typescript";
import { AST } from "../AST";
import {
    IntermediateExportDeclaration,
    IntermediateExportItem,
    IntermediateKind
} from "../IntermediateTypes";
import { processExpression } from "./processExpression";
// import { processIdentifier } from "./processIdentifier";
import { StatementProcessor } from "./StatementProcessor";

export const processExportDeclaration: StatementProcessor = (
    input: Statement
): IntermediateExportDeclaration => {
    // make sure we have the right kind of statement
    const exportDec = AST.mustBeExportDeclaration(input);

    // what are we exporting?
    if (exportDec.exportClause) {
        return {
            kind: IntermediateKind.IntermediateExportDeclaration,
            items: processNamedBindings(exportDec.exportClause),
        }
    }

    // if we get here, we've got an export declaration that
    // we currently do not support
    // tslint:disable-next-line: no-console
    console.log(getClassNames(input), SyntaxKind[input.kind]);
    throw new UnsupportedTypeError({
        public: {
            dataPath: DEFAULT_DATA_PATH,
            expected: "a supported export declaration",
            actual: getClassNames(input)[0],
        },
    });
}

function processNamedBindings(
    input: NamedExportBindings
): IntermediateExportItem[]
{
    // if (isNamedExports(input)) {
        return processNamedExports(input as NamedExports);
    // }

    // return processNamespaceExport(input);
}

function processNamedExports(
    input: NamedExports
): IntermediateExportItem[]
{
    // this is what we'll return to the caller
    const retval: IntermediateExportItem[] = [];

    for (const member of input.elements) {
        // are we renaming an export?
        if (member.propertyName) {
            retval.push({
                kind: IntermediateKind.IntermediateAliasedExportItem,
                exportedName: processExpression(member.propertyName),
                name: processExpression(member.name),
            });
        }
        else {
            retval.push({
                kind: IntermediateKind.IntermediateNamedExportItem,
                name: processExpression(member.name),
            });
        }
    }

    // all done
    return retval;
}

// function processNamespaceExport(
//     input: NamespaceExport
// ): IntermediateExportItem[]
// {
//     return [
//         {
//             kind: IntermediateKind.IntermediateNamespaceExport,
//             name: processIdentifier(input.name),
//         }
//     ];
// }