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
import {
    BindingElement,
    Expression,
    NodeArray,
    ObjectBindingPattern, TypeNode
} from "typescript";
import { AST } from "../AST";
import {
    AnyIntermediateDestructuredIdentifierDeclaration,
    IntermediateDestructuredIdentifierDeclaration,
    IntermediateDestructuredParameterDeclaration, IntermediateKind,
    IntermediateTypeReference
} from "../IntermediateTypes";
import { processExpression } from "./processExpression";
import { ProcessingContext } from "./ProcessingContext";
import { processMaybe } from "./processMaybe";
import { processTypeNode } from "./processTypeNode";

export function processObjectBindingPatternForParameters(
    processCtx: ProcessingContext,
    {
        param,
        paramType,
        paramInitializer,
    }: {
        param: ObjectBindingPattern,
        paramType: Maybe<TypeNode>,
        paramInitializer: Maybe<Expression>,
    }
): IntermediateDestructuredParameterDeclaration
{
    let typeRef: Maybe<IntermediateTypeReference>;
    if (paramType) {
        typeRef = processTypeNode(processCtx, paramType);
    }

    // all done
    return {
        kind: IntermediateKind.IntermediateDestructuredParameterDeclaration,
        parameters: processBindingElements(processCtx, param.elements),
        typeRef,
        initializer: processMaybe(
            processCtx,
            paramInitializer,
            processExpression
        )
    };
}

function processBindingElements(
    processCtx: ProcessingContext,
    input: NodeArray<BindingElement>
): AnyIntermediateDestructuredIdentifierDeclaration[]
{
    // our return value
    const retval: ReturnType<typeof processBindingElements> = [];

    input.forEach((bindingElement) => {
        retval.push(processBindingElement(processCtx, bindingElement));
    });

    // all done
    return retval;
}

function processBindingElement(
    processCtx: ProcessingContext,
    input: BindingElement
): AnyIntermediateDestructuredIdentifierDeclaration
{
    // do we have a default value for the parameter?
    const initializer = processMaybe(
        processCtx,
        input.initializer,
        processExpression
    )

    // do we have a receiver alias set?
    //
    // this is where:
    //
    // - the caller sets the property using `paramName`,
    // - but the receiving function accesses the value using the
    //   `receiverAlias`

    if (input.propertyName) {
        return <IntermediateDestructuredIdentifierDeclaration>{
            kind: IntermediateKind.IntermediateDestructuredIdentifierDeclaration,
            name: input.propertyName.getText(),
            initializer,
            from: input.name.getText(),
        }
    }

    // is this a rest parameter?
    //
    // note that REST parameters cannot have receiver aliases
    if (AST.hasDotDotDotToken(input.dotDotDotToken)) {
        return {
            kind: IntermediateKind.IntermediateDestructuredRestIdentifierDeclaration,
            name: input.name.getText(),
            initializer
        }
    }

    return <IntermediateDestructuredIdentifierDeclaration>{
        kind: IntermediateKind.IntermediateDestructuredIdentifierDeclaration,
        name: input.name.getText(),
        initializer,
        from: undefined,
    }
}