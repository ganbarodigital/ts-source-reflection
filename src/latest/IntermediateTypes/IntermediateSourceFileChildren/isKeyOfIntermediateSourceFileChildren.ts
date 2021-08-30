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

import { HashMap, RequireAllAttributesMap } from "@safelytyped/core-types";
import { IntermediateSourceFileChildren } from "./IntermediateSourceFileChildren";

//
// Let me explain what is happening here ...
//
// I'm trying to use the compiler to make sure that VALID_CHILREN
// *always* contains every AST node that:
//
// a) can appear as an immediate child of a source file, and
// b) that we can currently support
//
// This way, if we ever add support for more AST nodes at the
// source file level, the compiler should notice, and it should
// refuse to compile this file until we remember to add in
// the new nodes types :)
//
// There is probably a neater way to do this. Patches to do so
// are most welcome.
//
type ValidChildren = RequireAllAttributesMap<IntermediateSourceFileChildren, true>;

const VALID_CHILDREN: ValidChildren & HashMap<true> = {
    ClassDeclaration: true,
    ExportDeclaration: true,
    ExpressionStatement: true,
    FunctionDeclaration: true,
    ImportDeclaration: true,
    InterfaceDeclaration: true,
    TypeAliasDeclaration: true,
    VariableStatement: true,
}

export function isKeyOfIntermediateSourceFileChildren(
    input: string
): input is keyof IntermediateSourceFileChildren
{
    return VALID_CHILDREN[input] || false;
}