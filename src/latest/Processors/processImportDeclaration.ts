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
    isNamedImports,
    NamedImportBindings,
    NamedImports,
    NamespaceImport,
    Statement
} from "typescript";
import { AST } from "../AST";
import {
    IntermediateImportDeclaration,
    IntermediateImportItem,
    IntermediateKind
} from "../IntermediateTypes";
import { processExpression } from "./processExpression";
import { processIdentifier } from "./processIdentifier";

export function processImportDeclaration(
    input: Statement
): IntermediateImportDeclaration
{
    // make sure we have what we expect
    const importDec = AST.mustBeImportDeclaration(input);

    const retval: IntermediateImportDeclaration = {
        kind: IntermediateKind.IntermediateImportDeclaration,
        isTypeOnly: false,
        items: [],
        source: processExpression(importDec.moduleSpecifier),
    };

    // special case - we have no import clause
    //
    // this happens when an import statement is basically
    // used to trigger the loading & processing of another file
    if (!importDec.importClause) {
        return retval;
    }

    // at this point, we have an import clause to process
    const importClause = importDec.importClause;

    // special case - do we have an `import type` situation?
    retval.isTypeOnly = importClause.isTypeOnly;

    // special case - have we imported an `export default` item?
    if (importClause.name) {
        retval.items.push({
            kind: IntermediateKind.IntermediateDefaultImport,
            name: processIdentifier(importClause.name),
        });
    }

    // do we have any `{ XXX }` parts to the import?
    if (importClause.namedBindings) {
        retval.items = [
            ...retval.items,
            ...processNamedBindings(importClause.namedBindings)
        ];
    }

    // add other import bindings here

    return retval;
}

function processNamedBindings(
    input: NamedImportBindings
): IntermediateImportItem[]
{
    // what kind of named bindings do we have?
    if (isNamedImports(input)) {
        return processNamedImports(input);
    }

    return processNamespaceImport(input);
}

function processNamedImports(input: NamedImports): IntermediateImportItem[]
{
    const retval: IntermediateImportItem[] = [];

    for (const member of input.elements) {
        // are we renaming an import?
        if (member.propertyName) {
            retval.push({
                kind: IntermediateKind.IntermediateAliasedImportBinding,
                exportedName: processExpression(member.propertyName),
                name: processExpression(member.name),
            });
        } else {
            retval.push({
                kind: IntermediateKind.IntermediateImportBinding,
                name: processExpression(member.name),
            });
        }
    }

    return retval;
}

function processNamespaceImport(
    input: NamespaceImport
): IntermediateImportItem[]
{
    return [
        {
            kind: IntermediateKind.IntermediateNamespaceImport,
            name: processIdentifier(input.name),
        }
    ];
}