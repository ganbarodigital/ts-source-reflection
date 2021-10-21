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
import { BindingName, Node } from "typescript";
import { IntermediateExpression, IntermediateTypeReference } from "../../IntermediateTypes";
import { ProcessingContext } from "../../Processors/ProcessingContext";
import { processTypeNode } from "../../Processors/processTypeNode";
import { translateInferredType } from "./translateInferredType";

type NodeWithName =
    Node
    &
{
    name: BindingName
}

export function getInferredType(
    processCtx: ProcessingContext,
    input: NodeWithName,
    initializer?: IntermediateExpression,
): Maybe<IntermediateTypeReference>
{
    // shorthand
    const compiler = processCtx.compiler;

    // what does the compiler think is happening?
    const typeChecker = compiler.getTypeChecker();
    const tsType = typeChecker.getTypeOfSymbolAtLocation(
        typeChecker.getSymbolAtLocation(input.name)!,
        input
    );

    if (!tsType) {
        // the compiler has no idea, so let's bail
        return undefined;
    }

    // if we get here, we *might* have something, but it's currently
    // in a format that we can't work with
    //
    // let's see if the typeChecker can convert it for us
    const typeNode = typeChecker.typeToTypeNode(tsType, input, undefined);
    if (!typeNode) {
        // no, it can't, so bail
        //
        // should we actually return an IntermediateUndiscoverableType here
        // instead?
        return undefined;
    }

    // at this point, we have something that we can *try* to work with
    //
    // not all of these typeNodes will process successfully atm.
    // workarounds / alternative approaches are most welcome!
    const inferredType = processTypeNode(
        processCtx,
        typeNode
    );

    // sometimes, the inferred type needs a little bit of help
    // from us
    return translateInferredType(
        compiler,
        input,
        inferredType,
        initializer
    );
}
