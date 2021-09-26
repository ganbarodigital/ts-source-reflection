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

import { isComputedPropertyName, isIdentifier, isNumericLiteral, isStringLiteral, PropertyName } from "typescript";
import { IntermediateIdentifierName } from "../IntermediateTypes";
import { processComputedPropertyName } from "./processComputedPropertyName";
import { processNumericLiteral } from "./processNumericLiteral";
import { processPrivateIdentifier } from "./processPrivateIdentifier";
import { processStringLiteral } from "./processStringLiteral";

export function processPropertyName(
    input: PropertyName
): IntermediateIdentifierName
{
    // special case - an identifier
    //
    // for now, we've decided to represent these as simple strings
    // we may reverse this decision when we write the code for the
    // other layers
    if (isIdentifier(input)) {
        return input.getText();
    }

    if (isStringLiteral(input)) {
        return processStringLiteral(input);
    }

    if (isNumericLiteral(input)) {
        return processNumericLiteral(input);
    }

    if (isComputedPropertyName(input)) {
        return processComputedPropertyName(input);
    }

    // at this point, it must be a private identifier
    return processPrivateIdentifier(input);
}