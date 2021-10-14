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
import { Statement } from "typescript";
import { AST } from "../AST";
import { Compiler } from "../Compiler";
import {
    IntermediateFunction,
    IntermediateKind
} from "../IntermediateTypes";
import { processDocBlock } from "./processDocBlock";
import { processFunctionParameters } from "./processFunctionParameters";
import { processReturnTypeFromNode } from "./processReturnTypeFromNode";
import { processTypeParametersFromNode } from "./processTypeParametersFromNode";

export function processFunctionDeclaration (
    compiler: Compiler,
    input: Statement
): IntermediateFunction
{
    // make sure we have what we need
    const funcDec = AST.mustBeFunctionDeclaration(input);

    // at this point, we *know* that we're looking at a function :)

    return {
        kind: IntermediateKind.IntermediateFunction,
        docBlock: processDocBlock(compiler, input),
        isDeclared: AST.hasDeclaredModifier(input.modifiers),
        isExported: AST.hasExportModifier(input.modifiers),
        isDefaultExport: AST.hasDefaultModifier(input.modifiers),
        typeParameters: processTypeParametersFromNode(compiler, funcDec),
        name: funcDec.name?.text,
        parameters: processFunctionParameters(compiler, funcDec.parameters),
        returnType: processReturnTypeFromNode(compiler, funcDec),
        hasBody: AST.hasBody(funcDec.body),
    }
}