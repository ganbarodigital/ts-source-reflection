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

import { isCallSignatureDeclaration, isPropertySignature, TypeLiteralNode } from "typescript";
import * as AST from "../AST";
import { IntermediateAnonymousClassType, IntermediateFunctionTypeSignature, IntermediateKind, IntermediatePropertyDefinition } from "../IntermediateTypes";
import { processCallSignatureDeclaration } from "./processCallSignatureDeclaration";
import { processPropertySignature } from "./processPropertySignature";


export function processAnonymousClassType(
    input: TypeLiteralNode
): IntermediateAnonymousClassType {
    return {
        kind: IntermediateKind.IntermediateAnonymousClassType,
        properties: processProperties(input),
        callSignatures: processCallSignatures(input),
    }
}

function processCallSignatures(
    input: TypeLiteralNode
): IntermediateFunctionTypeSignature[]
{
    // this will be our return value
    const retval: IntermediateFunctionTypeSignature[] = [];

    // find and process all the call signatures in this anonymous
    // class
    for (const member of input.members.filter(
        (candidate) => { return isCallSignatureDeclaration(candidate)}
    )) {
        // keep the compiler happy
        const callSig = AST.mustBeCallSignatureDeclaration(member);

        retval.push(processCallSignatureDeclaration(callSig));
    }

    // all done
    return retval;
}

function processProperties(
    input: TypeLiteralNode
): IntermediatePropertyDefinition[]
{
    // this will be our return value
    const retval: IntermediatePropertyDefinition[] = [];

    // find and process all the property definitions in this
    // anonymous class
    for(const member of input.members.filter(
        (candidate) => { return isPropertySignature(candidate); }
    )) {
        // keep the compiler happy ... even though we know
        // that each member already is a PropertySignature
        //
        // it is safer than doing a type assertion here!
        const propSig = AST.mustBePropertySignature(member);

        // when we get into parsing classes properly, we will return
        // and refactor this
        retval.push(processPropertySignature(propSig));
    }

    // all done
    return retval;
}