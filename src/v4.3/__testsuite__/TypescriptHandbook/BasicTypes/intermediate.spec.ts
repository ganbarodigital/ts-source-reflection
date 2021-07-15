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
import { HashMap, isObject } from "@safelytyped/core-types";
import { Filepath } from "@safelytyped/filepath";
import { expect } from "chai";
import * as fs from "fs";
import * as ts from "typescript";

import { processSourceFile } from "../../../Processors/processSourceFile";


type PreprocessorFn = (inputPath: string, expectedResult: any) => void;

interface TestFile {
    sourceFile: string;
    expectedResult: any;
    preprocessor: PreprocessorFn;
}

function injectPathIntoExpectedResult(inputPath: string, expectedResult: any)
{
    if (!isObject(expectedResult)) {
        return;
    }

    (expectedResult as HashMap<any>).path = new Filepath(inputPath);
}

const TEST_FILES: TestFile[] = [
    {
        sourceFile: "BasicFunction-001-input.ts",
        expectedResult: require("./BasicFunction-001-intermediate").default,
        preprocessor: injectPathIntoExpectedResult,
    },
    {
        sourceFile: "BasicFunction-002-input.ts",
        expectedResult: require("./BasicFunction-002-intermediate").default,
        preprocessor: injectPathIntoExpectedResult,
    },
];

describe("basic functions intermediate processing", () => {
    for (const testdata of TEST_FILES) {
        it("parses as a function", () => {
            // ----------------------------------------------------------------
            // setup your test

            const inputFile = process.cwd() + "/src/v4.3/__testsuite__/TypescriptHandbook/BasicTypes/" + testdata.sourceFile;
            const sourceCode = fs.readFileSync(inputFile, 'utf-8');
            const sourceFile = ts.createSourceFile(inputFile, sourceCode, ts.ScriptTarget.Latest, true);

            // we need may need to inject the full source file path
            // into the result
            testdata.preprocessor(inputFile, testdata.expectedResult);

            // ----------------------------------------------------------------
            // perform the change

            const actualResult = processSourceFile(sourceFile);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).to.eql(testdata.expectedResult);
        });
    }
});