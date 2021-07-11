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
import { ClassDeclaration, Statement } from "typescript";
import { findExtendsHeritageClauses } from "../Ast/findExtendsHeritageClauses";
import { findImplementsHeritageClauses } from "../Ast/findImplementsHeritageClauses";
import { isNodeExported } from "../Ast/isNodeExported";
import { mustBeClassDeclaration } from "../Ast/mustBeClassDeclaration";
import { IntermediateClass } from "../IntermediateTypes/IntermediateClass/IntermediateClass";
import { IntermediateKind } from "../IntermediateTypes/IntermediateKind/IntermediateKind";
import { IntermediateSourceFile } from "../IntermediateTypes/IntermediateSourceFile/IntermediateSourceFile";
import { IntermediateTypeParameter } from "../IntermediateTypes/IntermediateTypeParameter/IntermediateTypeParameter";
import { findDocBlockText } from "./findDocBlockText";
import { processExpressionWithTypeArguments } from "./processExpressionWithTypeArguments";
import { StatementProcessor } from "./StatementProcessor";

export const processClassDeclaration: StatementProcessor = (
    sourceFile: IntermediateSourceFile,
    input: Statement
): IntermediateClass => {
    // make sure we have the right kind of statement
    const classDec = mustBeClassDeclaration(input);

    return {
        name: classDec.name?.text || '',
        kind: IntermediateKind.IntermediateClass,
        docBlock: {
            kind: IntermediateKind.IntermediateDocBlock,
            text: findDocBlockText(classDec),
        },
        exported: isNodeExported(classDec),
        extendsTypeParameter: getBaseClassType(sourceFile, classDec),
        implementsTypeParameters: getBaseInterfaceTypes(sourceFile, classDec),
    };
}

function getBaseClassType(
    sourceFile: IntermediateSourceFile,
    input: ClassDeclaration
): Maybe<IntermediateTypeParameter>
{
    // does this class extend anything?
    const heritageClauses = findExtendsHeritageClauses(input);
    if (heritageClauses.length === 0) {
        // no, it does not
        return undefined;
    }

    // if we get here, then yes it does (yay!)
    for (const clause of heritageClauses) {
        return processExpressionWithTypeArguments(sourceFile, clause.types[0]);
    }

    return undefined;
}

function getBaseInterfaceTypes(
    sourceFile: IntermediateSourceFile,
    input: ClassDeclaration
): IntermediateTypeParameter[] {
    // our return value
    const retval: IntermediateTypeParameter[] = [];

    // find the implement clauses (if any)
    const heritageClauses = findImplementsHeritageClauses(input);
    for (const clause of heritageClauses) {
        retval.push(processExpressionWithTypeArguments(sourceFile, clause.types[0]));
    }

    return retval;
}