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

import { HashMap, isObject } from "@safelytyped/core-types";
import { Filepath } from "@safelytyped/filepath";
import * as fileExists from "file-exists";
import * as fs from "fs";

//
type PreprocessorFn<T> = (inputPath: Filepath, expectedResult: T) => void;

interface TestFile<T> {
    sourceFile: string;
    expectedResult: T;
    preprocessor: PreprocessorFn<T>;
}

function injectPathIntoExpectedResult(inputPath: Filepath, expectedResult: any)
{
    if (!isObject(expectedResult)) {
        return;
    }

    (expectedResult as HashMap<any>).path = inputPath;
}

export function loadTestFiles<T>(
    folder: string,
    inputPattern: string,
    expectedPattern: string,
): TestFile<T>[]
{
    const retval: TestFile<T>[] = [];
    const localFiles = fs.readdirSync(folder);
    localFiles.forEach((filename) => {
        if (filename.match(new RegExp("/" + inputPattern + "\.ts/"))) {
            // if there is no corresponding intermediate results file,
            // we want that to appear as a test failure
            let expectedResult = {};
            const expectedResultsFile = filename.replace(inputPattern, expectedPattern);
            if (fileExists.sync(expectedResultsFile, {root: __dirname})) {
                expectedResult = require("./" + expectedResultsFile).default;
            }

            // add this to our list
            retval.push({
                sourceFile: filename,
                expectedResult: (expectedResult as unknown) as T,
                preprocessor: injectPathIntoExpectedResult
            });
        }
    });

    // all done
    return retval;
}