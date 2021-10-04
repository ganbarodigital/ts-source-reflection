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

import { DispatchMap, searchDispatchMap } from "@safelytyped/core-types";
import {
    IntermediateBinaryExpression,
    IntermediateExpression,
    IntermediateExpressionOperator
} from "../../IntermediateTypes";
import { processVariableAssignment } from "./processVariableAssignment";

/**
 * OperatorProcessor is a function signature. It describes any function that
 * can transform an IntermediateBinaryExpression into a more specific
 * operation.
 *
 * All of the processor functions in this module must be OperatorProcessors.
 */
type OperatorProcessor = (input: IntermediateBinaryExpression) => IntermediateExpression;

/**
 * PROCESSOR_MAP is a dispatch map. It's a list of which operators we have
 * written transformers for.
 */
const PROCESSOR_MAP: DispatchMap<string, OperatorProcessor> = {
    [IntermediateExpressionOperator.EQUALS]: processVariableAssignment,
}

export function processIntermediateBinaryExpression(
    input: IntermediateBinaryExpression
): IntermediateExpression
{
    // let's find a way to transform this binary expression
    const processor = searchDispatchMap(
        PROCESSOR_MAP,
        [input.operator],
        () => input
    )

    // call it, and return the results
    return processor(input);
}