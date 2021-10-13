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
import { Filepath } from "@safelytyped/filepath";
import { expect } from "chai";
import { processSourceFile } from "../../../../Processors/processSourceFile";
import { buildTestsuiteName } from "../../../buildTestsuiteName";
import { getTestCompiler } from "../../../getTestCompiler";
import { loadTestFiles } from "../../../loadTestFiles";

//
// Our individual test cases are automatically loaded from files
// in the same folder as this file.
//
// * XXX-input.ts - the Typescript that we will send to the compiler
//   and then process using our code
// * XXX-intermediate.ts - what we expect our code to generate from
//   the given input Typescript code
//
// To add a new test, just drop the `XXX-input.ts` and corresponding
// `XXX-intermediate.ts` files into this folder.
//
// If you forget to add the corresponding `XXX-intermediate.ts` file,
// we'll automatically turn that into a failing test for you :)
//

const testSuiteName = buildTestsuiteName(__dirname);
const TEST_FILES = loadTestFiles(__dirname, "-input", "-intermediate");

describe(testSuiteName + " intermediate processing", () => {
    for (const testdata of TEST_FILES) {
        it("parses " + testdata.sourceFile + " correctly", () => {
            // ----------------------------------------------------------------
            // setup your test

            const inputFile = new Filepath(__dirname + "/" + testdata.sourceFile);
            const compiler = getTestCompiler(inputFile);
            const sourceFile = compiler.getAstForFile(inputFile);

            // we need may need to inject the full source file path
            // into the result
            testdata.preprocessor(inputFile, testdata.expectedResult);

            // ----------------------------------------------------------------
            // perform the change

            const actualResult = processSourceFile(compiler, sourceFile);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).to.eql(testdata.expectedResult);
        });
    }
});