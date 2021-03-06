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

import { NodeArray, TypeParameterDeclaration } from "typescript";
import { IntermediateGenericType } from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { processGenericTypeDeclaration } from "./processGenericTypeDeclaration";
import { ProcessingContext } from "./ProcessingContext";

type NodeWithTypeParameters = {
    readonly typeParameters?: NodeArray<TypeParameterDeclaration>
}

export function processTypeParametersFromNode(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: NodeWithTypeParameters
): IntermediateGenericType[]
{
    const retval: IntermediateGenericType[] = [];

    // special case - no type parameters at all
    if (!input.typeParameters) {
        return retval;
    }

    // general case - we have type parameters to unpack
    for (const member of input.typeParameters) {
        retval.push(processGenericTypeDeclaration(processCtx, parentCtx, member));
    }

    // all done
    return retval;
}