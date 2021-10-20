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

import { Maybe, mustBeString } from "@safelytyped/core-types";
import { Filepath } from "@safelytyped/filepath";
import path from "path";
import { ImportTypeNode } from "typescript";
import { Compiler } from "../Compiler";
import { IntermediateKind, IntermediateTypeReference } from "../IntermediateTypes";
import { processEntityName } from "./processEntityName";
import { processTypeNode } from "./processTypeNode";

export function processImportTypeNodeDuringTypeProcessing(
    compiler: Compiler,
    input: ImportTypeNode,
): IntermediateTypeReference
{
    // a word or two about the ImportTypeNode
    //
    // I've only seen it appear when working with inferred types (so far).
    // They occur when the inferred type contains references to types that
    // are not directly imported into the source file where we are doing
    // our direct processing.
    //
    // We've got two pieces of information:
    //
    // - `input.argument` contains a path to the file to import the type
    //   from
    // - `input.qualifier` contains the name of the type exported from
    //   that file
    //
    // Unfortunately, `input.argument` isn't guaranteed to be the source
    // file where the type is defined. It can be (and often appears to be!)
    // an index file.
    //
    // That makes it impossible for us to resolve this type in the
    // Intermediate layer.

    // we are working with a synthetic type node here. This can and will
    // go wrong from time to time.
    try {
        // we need to convert the import path into a relative path
        const pathNode = processTypeNode(
            compiler,
            input.argument
        );
        const importPath = mustBeString(
            getTypeNameFromTypeReference(pathNode)
        );

        if (path.isAbsolute(importPath)) {
            // convert it to a relative path, relative to the source file
            // that is being processed
        }

        if (input.qualifier) {
            return {
                kind: IntermediateKind.IntermediateImportedType,
                importPath: new Filepath(importPath),
                entityName: processEntityName(compiler, input.qualifier),
            }
        }

        // if we get here, then I don't know what to do with this
        return {
            kind: IntermediateKind.IntermediateUndiscoverableType,
        }
    }
    catch (e) {
        // tslint:disable-next-line: no-console
        console.log(input);
        return {
            kind: IntermediateKind.IntermediateUndiscoverableType,
        }
    }

}

type IntermediateTypeReferenceWithTypeName = {
    typeName: string;
}

function getTypeNameFromTypeReference(
    input: IntermediateTypeReference
): Maybe<string>
{
    // quick and dirty
    if ((input as IntermediateTypeReferenceWithTypeName).typeName) {
        return (input as IntermediateTypeReferenceWithTypeName).typeName;
    }

    return undefined;
}