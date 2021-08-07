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
import { isObjectBindingPattern, ParameterDeclaration } from "typescript";

import {
    IntermediateCallableParameter,
    IntermediateExpression,
    IntermediateKind,
    IntermediateTypedCallableParameter,
    IntermediateUntypedCallableParameter,
} from "../IntermediateTypes";
import { processInitializer } from "./processInitializer";
import { processObjectBindingPattern } from "./processObjectBindingPattern";
import { processQuestionToken } from "./processQuestionToken";
import { processTypeNode } from "./processTypeNode";


export function processParameterDeclaration(
    paramDec: ParameterDeclaration
): IntermediateCallableParameter
{
    // this is a placeholder for now
    //
    // we will be expanding this as we add more test cases, and
    // eventually we will have to refactor it to handle edge cases
    // better & without introducing complexity

    // NOTE: the caller has to implement support for rest parameters,
    // to avoid infinite recursion!

    // special case - deconstructed object
    //
    // why it hides in the parameter name is beyond me!
    if (isObjectBindingPattern(paramDec.name)) {
        return processObjectBindingPattern(paramDec.name);
    }

    // do we have a default value for the parameter?
    let initializer: Maybe<IntermediateExpression>;
    if (paramDec.initializer) {
        initializer = processInitializer(paramDec.initializer);
    }

    // special case - untyped parameter
    if (!paramDec.type) {
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        return <IntermediateUntypedCallableParameter>{
            kind: IntermediateKind.IntermediateUntypedCallableParameter,
            paramName: paramDec.name.getText(),
            initializer,
            optional: processQuestionToken(paramDec.questionToken),
        };
    }

    // general case - typed parameter
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    return <IntermediateTypedCallableParameter>{
        kind: IntermediateKind.IntermediateTypedCallableParameter,
        paramName: paramDec.name.getText(),
        typeRef: processTypeNode(paramDec.type),
        optional: processQuestionToken(paramDec.questionToken),
        initializer,
    };
}