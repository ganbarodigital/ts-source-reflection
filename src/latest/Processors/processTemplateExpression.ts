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

import { TemplateExpression, TemplateSpan } from "typescript";
import {
    IntermediateKind,
    IntermediateTemplateExpression,
    IntermediateTemplateExpressionSpan
} from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { processExpression } from "./processExpression";
import { ProcessingContext } from "./ProcessingContext";

export function processTemplateExpression(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: TemplateExpression
): IntermediateTemplateExpression
{
    // this will be our return value
    const retval: IntermediateTemplateExpression = {
        kind: IntermediateKind.IntermediateTemplateExpression,
        //
        // NOTE:
        //
        // we use `.text` here instead of `.getText()` because
        // they contain different values. `.getText()` includes
        // the `${` characters, which any downstream layer or
        // library would have to strip out for themselves
        //
        head: input.head.text,
        spans: [],
    }

    // add in the parts of the template
    for (const span of input.templateSpans) {
        retval.spans.push(processTemplateExpressionSpan(processCtx, parentCtx, span));
    }

    // all done
    return retval;
}

function processTemplateExpressionSpan(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: TemplateSpan
): IntermediateTemplateExpressionSpan
{
    return {
        kind: IntermediateKind.IntermediateTemplateExpressionSpan,
        expression: processExpression(processCtx, parentCtx, input.expression),
        //
        // NOTE:
        //
        // we use `.text` here instead of `.getText()` because
        // they contain different values. `.getText()` includes
        // the closing '}`' characters, which any downstream
        // layer or library would have to strip out for themselves
        //
        tail: input.literal.text,
    }
}