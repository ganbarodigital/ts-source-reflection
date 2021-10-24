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
import { Filepath } from "@safelytyped/filepath";
import * as ts from "typescript";
import { IntermediateExpression, IntermediateTypeReference } from "../IntermediateTypes";
import { ProcessingContext } from "../Processors/ProcessingContext";

/**
 * Compiler is how we access the Typescript compiler itself.
 */
export interface Compiler
{
    /**
     * getAstForFile() returns the Typescript abstract syntax tree (AST)
     * for the given filepath.
     *
     * NOTE: `input` must either be one of the filepaths you passed into
     * the constructor, OR it must be a file that the Typescript compiler
     * would have pulled in (e.g. via an import).
     *
     * @param input the path to the file that you want
     * @returns the compiled Typescript, as an abstract syntax tree
     */
    getAstForFile(input: Filepath): ts.SourceFile;

    /**
     * getTypeChecker() returns the underlying compiler's TypeChecker
     * object
     *
     * @deprecated
     */
    getTypeChecker(): ts.TypeChecker;

    /**
     * getTextForNode() is an alternative to calling `input.getText()`
     *
     * @remarks
     *
     * I've had to add this, to work around runtime errors within the
     * Typescript library itself. We get `TypeError: cannot read property
     * 'text' of undefined` whenever we are trying to get the text out
     * of a node that has no parent (and therefore, no link back to its
     * source file).
     *
     * @param input the node that you want the text from
     * @returns the escaped text from that node
     */
    getTextForNode(
        input: ts.Node
    ): Maybe<string>;

    // ================================================================
    //
    // TYPE INFERENCE SUPPORT
    //
    // ----------------------------------------------------------------

    /**
     * getInferredType() attempts to work out what type `input` is.
     *
     * @param processCtx
     * @param input
     * @param initializer
     */
    getInferredType(
        processCtx: ProcessingContext,
        input: NodeWithName,
        initializer?: IntermediateExpression,
    ): Maybe<IntermediateTypeReference>;

    /**
     * getInferredCallSignatureReturnType attempts to work out what type
     * the given expression returns.
     *
     * @param processCtx
     * @param input
     * @param initializer
     */
    getInferredCallSignatureReturnType(
        processCtx: ProcessingContext,
        input: ts.CallLikeExpression,
        initializer?: IntermediateExpression
    ): Maybe<IntermediateTypeReference>;

    /**
     * getInferredReturnType attempts to work out what type the given
     * callable returns
     *
     * @param processCtx
     * @param input
     * @param initializer
     */
    getInferredReturnType(
        processCtx: ProcessingContext,
        input: ts.SignatureDeclaration,
        initializer?: IntermediateExpression
    ): Maybe<IntermediateTypeReference>
}

export type NodeWithName = ts.Node & { name: ts.BindingName | ts.PropertyName }