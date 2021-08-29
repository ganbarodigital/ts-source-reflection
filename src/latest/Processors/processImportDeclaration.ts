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

import { AnyHashMap } from "@safelytyped/core-types";
import { isNamedImports, Node, Statement } from "typescript";
import { AST } from "../AST";
import {
    IntermediateImportItem,
    IntermediateKind,
    IntermediateSourceFile
} from "../IntermediateTypes";

// const childProcessors: FunctionPointerTable<string, NodeProcessor> = {
//     ImportClause: processImportClause,
// }

export function processImportDeclaration(
    sourceFile: IntermediateSourceFile,
    input: Statement
): IntermediateImportItem[]
{
    // make sure we have what we expect
    const importDec = AST.mustBeImportDeclaration(input);

    let retval: IntermediateImportItem[] = [];

    if (importDec.importClause) {
        retval = [ ...retval, ...processImportClause(importDec.importClause, importDec.moduleSpecifier.getText()) ];
    }

    return retval;
}

function processImportClause(input: Node, origin: string): IntermediateImportItem[]
{
    const importClause = AST.mustBeImportClause(input);

    const data = input as AnyHashMap;
    data.parent = null;

    // tslint:disable-next-line: no-console
    console.log(data);

    const items: IntermediateImportItem[] = [];

    if (importClause.namedBindings && isNamedImports(importClause.namedBindings)) {
        for (const member of importClause.namedBindings.elements) {
            items.push({
                name: member.name.text,
                from: origin,
                kind: IntermediateKind.IntermediateImportItem,
            });
        }
    }

    return items;
}