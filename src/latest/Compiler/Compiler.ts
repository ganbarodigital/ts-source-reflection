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

import { Value } from "@safelytyped/core-types";
import { Filepath } from "@safelytyped/filepath";
import * as ts from "typescript";

// TODO: move this over to core-types!
function unpackValues<T>(input: Value<T>[]): T[] {
    const retval: T[] = [];

    for (const value of input) {
        retval.push(value.valueOf());
    }

    // all done
    return retval;
}

/**
 * Compiler is how we access the Typescript compiler itself.
 */
export class Compiler
{
    /**
     * tsHost is a services provider to the main Typescript compiler
     */
    protected tsHost: ts.CompilerHost;

    /**
     * tsCompiler is our instance of the main Typescript compiler
     */
    protected tsCompiler: ts.Program;

    /**
     * sourceFilepaths is a list of the files/folders that we asked
     * the main Typescript compiler to compile
     */
    protected sourceFilepaths: Filepath[];

    /**
     * our constructor bootstraps the Typescript compiler, so that
     * you don't have to.
     *
     * NOTE: if you want to change the list of files to compile at a
     * later stage, you'll need to create a new instance of Compiler.
     *
     * @remarks
     *
     * use {@link loadCompilerOptions} if you want Compiler
     * to use your project's `tsconfig.json` file.
     *
     * @param filesToCompile a list of files/folders to compile
     * @param compilerOptions your tsconfig file's contents
     */
    public constructor(
        filesToCompile: Filepath[],
        compilerOptions: ts.CompilerOptions = {
            strict: true,
            target: ts.ScriptTarget.Latest,
        }
    )
    {
        // let's keep a copy of the list of files/folders that
        // we've been asked to compile
        this.sourceFilepaths = filesToCompile;

        // we have to create a compilerHost first. It's the only way
        // to tell TS that we need the AST parent fields set.
        //
        // without those set, the rest of the TS functions error out
        // when we call them :(
        this.tsHost = ts.createCompilerHost(compilerOptions, true);
        this.tsCompiler = ts.createProgram(
            unpackValues(filesToCompile),
            compilerOptions,
            this.tsHost,
        );
    }

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
    public getAstForFile(input: Filepath): ts.SourceFile
    {
        const retval = this.tsCompiler.getSourceFile(input.valueOf());
        if (retval) {
            return retval;
        }

        // TEMPORARY
        throw new Error("source file unknown to the compiler");
    }
}