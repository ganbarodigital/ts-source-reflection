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

import {
    DEFAULT_DATA_PATH,
    getClassNames,
    UnsupportedTypeError
} from "@safelytyped/core-types";
import {
    ClassElement,
    isConstructorDeclaration,
    isGetAccessorDeclaration,
    isMethodDeclaration,
    isPropertyDeclaration,
    isSetAccessorDeclaration,
    NodeArray, SyntaxKind
} from "typescript";
import { AST } from "../AST";
import { IntermediateMemberDeclaration } from "../IntermediateTypes";
import { processConstructorDeclaration } from "./processConstructorDeclaration";
import { processGetAccessorDeclaration } from "./processGetAccessorDeclaration";
import { processIndexSignatureDeclaration } from "./processIndexSignatureDeclaration";
import { ProcessingContext } from "./ProcessingContext";
import { processMethodDeclaration } from "./processMethodDeclaration";
import { processPropertyDeclaration } from "./processPropertyDeclaration";
import { processSetAccessorDeclaration } from "./processSetAccessorDeclaration";

export function processMemberDeclarations(
    processCtx: ProcessingContext,
    input: NodeArray<ClassElement>
): IntermediateMemberDeclaration[]
{
    const retval: IntermediateMemberDeclaration[] = [];

    for (const member of input) {
        if (isPropertyDeclaration(member)) {
            retval.push(processPropertyDeclaration(processCtx, member));
            continue;
        }

        if (isConstructorDeclaration(member)) {
            retval.push(processConstructorDeclaration(processCtx, member));
            continue;
        }

        if (isMethodDeclaration(member)) {
            retval.push(processMethodDeclaration(processCtx, member));
            continue;
        }

        if (isGetAccessorDeclaration(member)) {
            retval.push(processGetAccessorDeclaration(processCtx, member));
            continue;
        }

        if (isSetAccessorDeclaration(member)) {
            retval.push(processSetAccessorDeclaration(processCtx, member));
            continue;
        }

        if (AST.isIndexSignature(member)) {
            retval.push(processIndexSignatureDeclaration(processCtx, member));
            continue;
        }

        // if we get here, we have an unsupported type
        // tslint:disable-next-line: no-console
        console.log(getClassNames(member), SyntaxKind[member.kind]);

        throw new UnsupportedTypeError({
            public: {
                dataPath: DEFAULT_DATA_PATH,
                expected: "a supported member type",
                actual: getClassNames(member)[0],
            }
        });
    }

    // all done
    return retval;
}