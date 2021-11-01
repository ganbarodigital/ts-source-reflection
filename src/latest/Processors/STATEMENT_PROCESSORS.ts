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

import { processBlock } from "./processBlock";
import { processClassDeclaration } from "./processClassDeclaration";
import { processEmptyStatement } from "./processEmptyStatement";
import { processEnumDeclaration } from "./processEnumDeclaration";
import { processExportAssignment } from "./processExportAssignment";
import { processExportDeclaration } from "./processExportDeclaration";
import { processExpressionStatement } from "./processExpressionStatement";
import { processForInStatement } from "./processForInStatement";
import { processForOfStatement } from "./processForOfStatement";
import { processForStatement } from "./processForStatement";
import { processFunctionDeclaration } from "./processFunctionDeclaration";
import { processIfStatement } from "./processIfStatement";
import { processImportDeclaration } from "./processImportDeclaration";
import { processImportEqualsDeclaration } from "./processImportEqualsDeclaration";
import { processInterfaceDeclaration } from "./processInterfaceDeclaration";
import { processModuleDeclaration } from "./processModuleDeclaration";
// import { processReturnStatement } from "./processReturnStatement";
import { processThrowStatement } from "./processThrowStatement";
import { processTryStatement } from "./processTryStatement";
import { processTypeAliasDeclaration } from "./processTypeAliasDeclaration";
import { processVariableStatement } from "./processVariableStatement";

// STATEMENT_PROCESSORS is untyped, to avoid circular dependencies
export const STATEMENT_PROCESSORS = {
    Block: processBlock,
    ClassDeclaration: processClassDeclaration,
    EmptyStatement: processEmptyStatement,
    EnumDeclaration: processEnumDeclaration,
    ExpressionStatement: processExpressionStatement,
    ExportAssignment: processExportAssignment,
    ExportDeclaration: processExportDeclaration,
    ForInStatement: processForInStatement,
    ForOfStatement: processForOfStatement,
    ForStatement: processForStatement,
    FunctionDeclaration: processFunctionDeclaration,
    IfStatement: processIfStatement,
    ImportDeclaration: processImportDeclaration,
    ImportEqualsDeclaration: processImportEqualsDeclaration,
    InterfaceDeclaration: processInterfaceDeclaration,
    ModuleDeclaration: processModuleDeclaration,
    // ReturnStatement: processReturnStatement,
    ThrowStatement: processThrowStatement,
    TryStatement: processTryStatement,
    TypeAliasDeclaration: processTypeAliasDeclaration,
    VariableStatement: processVariableStatement,
}
