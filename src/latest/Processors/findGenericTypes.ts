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
import { ClassLikeDeclaration } from "typescript";

import {
    IntermediateGenericType,
    IntermediateKind,
    IntermediateSourceFile,
} from "../IntermediateTypes";


export function findGenericTypes(
    sourceFile: IntermediateSourceFile,
    input: ClassLikeDeclaration
): IntermediateGenericType[]
{
    // our return value
    const retval: IntermediateGenericType[] = [];

    // do we have any type parameter declarations to process?
    if (!input.typeParameters) {
        // no, we do not
        return retval;
    }

    input.typeParameters.forEach((typeParam) => {
        // shorthand
        const children = typeParam.getChildren();

        // this is simplistic
        //
        // I'm sure we'll have to revisit this at some point
        // in the future
        retval.push({
            kind: IntermediateKind.IntermediateGenericType,
            name: typeParam.name.text,
            constraint: children[2]?.getText(),
            defaultType: children[4]?.getText()
        });
    });

    // all done
    return retval;
}