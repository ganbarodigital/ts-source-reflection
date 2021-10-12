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
import * as ts from "typescript";
import * as fileExists from "file-exists";
import * as fs from "fs";

/**
 * loadCompilerOptions() will load your `tsconfig.json` file, and convert
 * it into a structure that the Typescript compiler will accept
 *
 * @remarks
 *
 * If you use multiple tsconfig files in your code base (e.g. if you're using
 * something like NestJS, and have things like `tsconfig.app.json` files),
 * then you'll need to pass in the full path to the correct config file.
 *
 * @param input where to look for your tsconfig. If you're not sure, pass in
 * the `__dirname` constant, and we'll look in parent folders for you.
 * @returns your `tsconfig.json` file, converted into the list of options
 * that the Typescript compiler can accept
 */
export function loadCompilerOptions(
    input: Filepath,
): ts.CompilerOptions
{
    // where is the tsconfig.json file?
    const configFilename = ts.findConfigFile(input.valueOf(), fileExists.sync);
    if (configFilename === undefined) {
        // temporary!
        throw new Error("unable to find compiler config file");
    }

    // we have to jump through some hoops, because the tsconfig.json file
    // supports JSONC, not plain JSON
    const configText = fs.readFileSync(configFilename, "utf-8");
    const maybeConfig = ts.parseConfigFileTextToJson(configFilename, configText)
    if (maybeConfig.error === undefined) {
        return maybeConfig.config;
    }

    // if we get here, the compiler does not like the options given
    // tslint:disable-next-line: no-console
    console.log("tsconfig file contains errors: ", maybeConfig.error);
    throw new Error("tsconfig file contains errors");
}