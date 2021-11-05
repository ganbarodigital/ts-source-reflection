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
    ExportDeclaration,
    Expression,
    isNamedExports,
    isNamespaceExport, NamedExports,
    NamespaceExport, Statement,
    SyntaxKind
} from "typescript";
import { AST } from "../AST";
import {
    IntermediateExportDeclaration,
    IntermediateExportedIdentifiers,
    IntermediateExportItem,
    IntermediateKind,
    IntermediateNamespaceExport,
    IntermediateReExportIdentifiers
} from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { processExpression } from "./processExpression";
import { processIdentifier } from "./processIdentifier";
import { ProcessingContext } from "./ProcessingContext";

export function processExportDeclaration (
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: Statement
): IntermediateExportDeclaration
{
    // make sure we have the right kind of statement
    const exportDec = AST.mustBeExportDeclaration(input);

    // special case - we're re-exporting everything from
    // somewhere else, as a namespace
    if (isExportDeclarationWithNamespaceExport(exportDec)) {
        return processNamespaceExport(processCtx, parentCtx, exportDec);
    }

    // special case - we're exporting a list of items,
    // possible as a re-export
    if (isExportDeclarationWithNamedExports(exportDec)) {
        return processExportClause(processCtx, parentCtx, exportDec);
    }

    // special case - we're re-exporting everything from
    // somewhere else
    if (isExportDeclarationWithModuleSpecifier(exportDec)) {
        return {
            kind: IntermediateKind.IntermediateReExportAll,
            source: processExpression(processCtx, parentCtx, exportDec.moduleSpecifier)
        }
    }

    // if we get here, we've got an export declaration that
    // we currently do not support
    // tslint:disable-next-line: no-console
    console.log(getClassNames(input), SyntaxKind[ input.kind ]);
    throw new UnsupportedTypeError({
        public: {
            dataPath: DEFAULT_DATA_PATH,
            expected: "a supported export declaration",
            actual: getClassNames(input)[ 0 ],
        },
    });
}

type ExportDeclarationWithNamedExports =
    ExportDeclaration
    &
    {
        exportClause: NamedExports
    }

function isExportDeclarationWithNamedExports(
    input: ExportDeclaration
): input is ExportDeclarationWithNamedExports {
    if (input.exportClause && isNamedExports(input.exportClause)) {
        return true;
    }

    return false;
}

function processExportClause(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: ExportDeclarationWithNamedExports
): IntermediateExportDeclaration {
    // how many things are we exporting?
    const items = processNamedExports(processCtx, parentCtx, input.exportClause);

    // special case
    if (items.length === 0) {
        return {
            kind: IntermediateKind.IntermediateEmptyExport
        }
    }

    // special case - we're exporting from somewhere else
    if (input.moduleSpecifier) {
        return <IntermediateReExportIdentifiers>{
            kind: IntermediateKind.IntermediateReExportIdentifiers,
            items,
            source: processExpression(processCtx, parentCtx, input.moduleSpecifier)
        }
    }

    // general case
    return <IntermediateExportedIdentifiers>{
        kind: IntermediateKind.IntermediateExportedIdentifiers,
        items,
    }
}

function processNamedExports(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: NamedExports
): IntermediateExportItem[] {
    // this is what we'll return to the caller
    const retval: IntermediateExportItem[] = [];

    for (const member of input.elements) {
        // are we renaming an export?
        if (member.propertyName) {
            retval.push({
                kind: IntermediateKind.IntermediateAliasedExportItem,
                exportedName: processExpression(processCtx, parentCtx, member.propertyName),
                name: processExpression(processCtx, parentCtx, member.name),
            });
        }
        else {
            retval.push({
                kind: IntermediateKind.IntermediateNamedExportItem,
                name: processExpression(processCtx, parentCtx, member.name),
            });
        }
    }

    // all done
    return retval;
}

type ExportDeclarationWithModuleSpecifier =
    ExportDeclaration
    &
    {
        moduleSpecifier: Expression
    }

function isExportDeclarationWithModuleSpecifier(
    input: ExportDeclaration
): input is ExportDeclarationWithModuleSpecifier {
    if (input.moduleSpecifier) {
        return true;
    }

    return false;
}

type ExportDeclarationWithNamespaceExport =
    ExportDeclaration
    & ExportDeclarationWithModuleSpecifier
    &
    {
        exportClause: NamespaceExport
    }

function isExportDeclarationWithNamespaceExport(
    input: ExportDeclaration
): input is ExportDeclarationWithNamespaceExport {
    if (input.exportClause && isNamespaceExport(input.exportClause)) {
        return true;
    }

    return false;
}

function processNamespaceExport(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: ExportDeclarationWithNamespaceExport
): IntermediateNamespaceExport {
    return {
        kind: IntermediateKind.IntermediateNamespaceExport,
        name: processIdentifier(processCtx, input.exportClause.name),
        source: processExpression(processCtx, parentCtx, input.moduleSpecifier),
    }

}