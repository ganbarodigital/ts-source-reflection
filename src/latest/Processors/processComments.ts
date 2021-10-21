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
    CommentRange,
    getLeadingCommentRanges,
    getTrailingCommentRanges,
    Node
} from "typescript";
import {
    IntermediateComment,
    IntermediateCommentableItem,
    IntermediateKind
} from "../IntermediateTypes";
import { ProcessingContext } from "./ProcessingContext";

export function processComments(
    processCtx: ProcessingContext,
    input: Node
): IntermediateCommentableItem
{
    const retval: IntermediateCommentableItem = {
        leadingComments: [],
        trailingComments: [],
    };

    // do we have any comments before this node?
    const leadingCommentRanges = getLeadingCommentRanges(
        input.getFullText(),
        input.pos
    ) || [];

    retval.leadingComments.push(
        ...processCommentRanges(input, leadingCommentRanges)
    );

    // what about after this node?
    const trailingCommentRanges = getTrailingCommentRanges(
        input.getFullText(),
        input.pos
    ) || [];

    retval.trailingComments.push(
        ...processCommentRanges(input, trailingCommentRanges)
    );

    // all done
    return retval;
}

function processCommentRanges(
    source: Node,
    input: CommentRange[]
): IntermediateComment[] {
    // our return value
    const retval: IntermediateComment[] = [];

    for (const member of input) {
        retval.push(processCommentRange(source, member));
    }

    // all done
    return retval;
}

function processCommentRange(
    source: Node,
    input: CommentRange
): IntermediateComment {
    // naive approach to get us started
    return {
        kind: IntermediateKind.IntermediateComment,
        content: source.getFullText().substr(
            input.pos,
            input.end,
        ),
        startsOnOwnLine: rangeStartsOnNewLine(source, input),
    }
}

function rangeStartsOnNewLine(
    source: Node,
    input: CommentRange
): boolean {
    // placeholder for now
    return false;
}