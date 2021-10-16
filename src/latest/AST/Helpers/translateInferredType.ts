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
import { Node } from "typescript";
import { Compiler } from "../../Compiler";
import {
    IntermediateExpression,
    IntermediateKind,
    IntermediateTypeReference,
    isIntermediateCallExpression,
    isIntermediateTypeofTypeReference
} from "../../IntermediateTypes";

export function translateInferredType(
    compiler: Compiler,
    input: Node,
    inferredType: IntermediateTypeReference,
    initializer: Maybe<IntermediateExpression>
): Maybe<IntermediateTypeReference>
{
    // nice and simple
    if (!initializer) {
        return inferredType;
    }

    // the easiest way to keep complexity down is to treat all of the
    // individual translators as a form of middleware
    //
    // if we get a whole bunch of these, we will convert them into middleware
    // at that point
    let retval = inferredType;

    // special case - a self-referential inferred type
    retval = handleSelfReferentialSymbol(compiler, input, inferredType, initializer);

    // all done
    return retval;
}

function handleSelfReferentialSymbol(
    compiler: Compiler,
    input: Node,
    inferredType: IntermediateTypeReference,
    initializer: IntermediateExpression
): IntermediateTypeReference
{
    // step 1: make sure we're looking at a self-referential symbol
    if (!isIntermediateCallExpression(initializer)) {
        return inferredType;
    }
    if (!isIntermediateTypeofTypeReference(inferredType)) {
        return inferredType;
    }
    if (!isSymbolReference(initializer.expression)) {
        return inferredType;
    }

    // if we get here, we're good

    return {
        kind: IntermediateKind.IntermediateSymbolType,
        identifierName: inferredType.entityName,
    }
}

function isSymbolReference(
    input: IntermediateExpression
): boolean
{
    if (input.kind !== IntermediateKind.IntermediateIdentifierReference) {
        return false;
    }
    if (input.name !== "Symbol") {
        return false;
    }

    return true;
}