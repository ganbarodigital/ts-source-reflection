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
import { MethodSignature } from "typescript";
import {
    IntermediateKind,
    IntermediateMethodSignature
} from "../IntermediateTypes";
import { processCallableParameterSignatures } from "./processCallableParameterSignatures";
import { processDocBlock } from "./processDocBlock";
import { processReturnTypeFromNode } from "./processReturnTypeFromNode";
import { processTypeParametersFromNode } from "./processTypeParametersFromNode";



export function processMethodSignature(
    input: MethodSignature
): IntermediateMethodSignature
{
    return {
        kind: IntermediateKind.IntermediateMethodSignature,
        docBlock: processDocBlock(input),
        // this is a placeholder for now
        static: false,
        // this is a placeholder for now
        accessModifier: undefined,
        name: input.name.getText(),
        parameters: processCallableParameterSignatures(input.parameters),
        typeParameters: processTypeParametersFromNode(input),
        returnType: processReturnTypeFromNode(input),
    }
}