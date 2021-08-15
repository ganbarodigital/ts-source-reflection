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
import { MethodSignature } from "typescript";
import {
    IntermediateGenericType,
    IntermediateKind,
    IntermediateMethodSignature,
    IntermediateTypeReference
} from "../IntermediateTypes";
import { processDocBlock } from "./processDocBlock";
import { processFunctionParameters } from "./processFunctionParameters";
import { processTypeNode } from "./processTypeNode";
import { processTypeParameters } from "./processTypeParameters";



export function processMethodSignature(
    input: MethodSignature
): IntermediateMethodSignature
{
    // do we have any type parameters?
    let typeParameters: IntermediateGenericType[] = [];
    if (input.typeParameters) {
        typeParameters = processTypeParameters(input.typeParameters);
    }

    // do we have a return type?
    let returnType: Maybe<IntermediateTypeReference>;
    if (input.type) {
        returnType = processTypeNode(input.type);
    }

    return {
        kind: IntermediateKind.IntermediateMethodSignature,
        docBlock: processDocBlock(input),
        // this is a placeholder for now
        static: false,
        // this is a placeholder for now
        accessModifier: undefined,
        name: input.name.getText(),
        parameters: processFunctionParameters(input.parameters),
        typeParameters,
        returnType,
    }
}