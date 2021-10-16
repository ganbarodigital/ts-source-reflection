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

import { isNumericLiteral, isPrefixUnaryExpression, isStringLiteral, LiteralTypeNode } from "typescript";
import { AST } from "../AST";
import { Compiler } from "../Compiler";
import {
    AnyIntermediateLiteralType,
    IntermediateBuiltInTypeReference,
    IntermediateKind,
    IntermediateUndiscoverableType
} from "../IntermediateTypes";
import { isBuiltInType } from "./isBuiltinType";
import { processBuiltInType } from "./processBuiltInType";

export function processLiteralTypeNode(
    compiler: Compiler,
    input: LiteralTypeNode
): AnyIntermediateLiteralType | IntermediateBuiltInTypeReference | IntermediateUndiscoverableType
{
    // special case
    //
    // no idea why the TS compiler thinks `null` is a literal type
    if (isBuiltInType(input)) {
        return processBuiltInType(compiler, input);
    }

    // this is a necessary hack to avoid the Typescript library throwing
    // runtime errors
    const typeName = compiler.getTextForNode(input.literal);

    // special case - a literal type that does not have a typeName
    // is normally down to assignment to a constant
    if (!typeName) {
        // tslint:disable-next-line: no-console
        console.log(input.literal);
        return {
            kind: IntermediateKind.IntermediateUndiscoverableType,
        }
    }

    // alright, what kind of literal are we dealing with?
    const literal = input.literal;

    // special case - surprisingly, the compiler represents negative
    // numbers as PrefixUnaryExpressions ?!?
    if (isPrefixUnaryExpression(literal)) {
        return {
            kind: IntermediateKind.IntermediateNumericLiteralType,
            typeName,
        }
    }

    if (isStringLiteral(literal)) {
        return {
            kind: IntermediateKind.IntermediateStringLiteralType,
            typeName: literal.text,
        }
    }
    if (isNumericLiteral(literal)) {
        return {
            kind: IntermediateKind.IntermediateNumericLiteralType,
            typeName: literal.text,
        };
    }
    if (AST.isTrueKeyword(literal)) {
        return {
            kind: IntermediateKind.IntermediateBooleanLiteralType,
            typeName: "true",
        }
    }

    if (AST.isFalseKeyword(literal)) {
        return {
            kind: IntermediateKind.IntermediateBooleanLiteralType,
            typeName: "false",
        }
    }

    // general case
    return {
        kind: IntermediateKind.IntermediateLiteralType,
        typeName,
    }
}