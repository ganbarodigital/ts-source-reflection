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
    isObjectBindingPattern,
    isTypeOperatorNode,
    ParameterDeclaration,
    SyntaxKind
} from "typescript";
import { AST } from "../AST";
import { Compiler } from "../Compiler";
import {
    IntermediateCallableParameterSignature,
    IntermediateKind,
    IntermediateRestCallableParameterSignature,
    IntermediateTypedCallableParameterSignature,
    IntermediateUntypedCallableParameterSignature
} from "../IntermediateTypes";
import { processObjectBindingPatternForSignatures } from "./processObjectBindingPatternForSignatures";
import { processQuestionToken } from "./processQuestionToken";
import { processTypeNode } from "./processTypeNode";

export function processParameterSignature(
    compiler: Compiler,
    paramDec: ParameterDeclaration
): IntermediateCallableParameterSignature
{
    // special case - destructured object
    if (isObjectBindingPattern(paramDec.name)) {
        return processObjectBindingPatternForSignatures(
            compiler,
            {
                param: paramDec.name,
                paramType: paramDec.type,
            }
        );
    }

    // special case - rest parameter
    if (AST.hasDotDotDotToken(paramDec.dotDotDotToken)) {
        const paramClone = { ...paramDec };
        paramClone.dotDotDotToken = undefined;
        return <IntermediateRestCallableParameterSignature>{
            kind: IntermediateKind.IntermediateRestCallableParameterSignature,
            parameter: processParameterSignature(compiler, paramClone),
        };
    }

    // special case - untyped parameter
    //
    // NOTE: untyped parameters cannot be `readonly`
    if (!paramDec.type) {
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        return <IntermediateUntypedCallableParameterSignature>{
            kind: IntermediateKind.IntermediateUntypedCallableParameterSignature,
            name: paramDec.name.getText(),
            isOptional: processQuestionToken(compiler, paramDec.questionToken),
        };
    }

    // special case - parameter is readonly
    //
    // instead of being a modifier, this is buried in the parameter
    // type instead
    let isReadonly: boolean = false;
    let paramType = paramDec.type;
    if (paramType && isTypeOperatorNode(paramType)) {
        if (paramType.operator === SyntaxKind.ReadonlyKeyword) {
            isReadonly = true;
            paramType = paramType.type;
        }
    }


    // general case - typed parameter
    return <IntermediateTypedCallableParameterSignature>{
        kind: IntermediateKind.IntermediateTypedCallableParameterSignature,
        name: paramDec.name.getText(),
        typeRef: processTypeNode(compiler, paramType),
        isOptional: processQuestionToken(compiler, paramDec.questionToken),
        isReadonly,
    };
}