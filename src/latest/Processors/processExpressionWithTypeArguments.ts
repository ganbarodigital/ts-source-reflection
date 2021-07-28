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

import { ExpressionWithTypeArguments, isTypeReferenceNode, NodeArray, TypeNode } from "typescript";
import {
    IntermediateGenericTypeArgument,
    IntermediateKind,
    IntermediateSourceFile,
    IntermediateTypeArgument
} from "../IntermediateTypes";

export function processExpressionWithTypeArguments(
    sourceFile: IntermediateSourceFile,
    clause: ExpressionWithTypeArguments
): IntermediateTypeArgument {
    // do we have something simple?
    if (!clause.typeArguments) {
        return {
            name: clause.getText(),
            kind: IntermediateKind.IntermediateFixedTypeArgument
        }
    }

    // if we get here, we're looking at a generic type
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    return <IntermediateGenericTypeArgument>{
        kind: IntermediateKind.IntermediateGenericTypeArgument,
        name: clause.expression.getText(),
        typeParameters: processTypeReferences(clause.typeArguments)
    }
}

function processTypeReferences(input: NodeArray<TypeNode>): IntermediateTypeArgument[] {
    const retval: IntermediateTypeArgument[] = [];

    for (const member of input) {
        // theoretically possible
        if (!isTypeReferenceNode(member)) {
            continue;
        }

        if (!member.typeArguments) {
            retval.push({
                name: member.typeName.getText(),
                kind: IntermediateKind.IntermediateFixedTypeArgument
            });
        } else {
            retval.push({
                kind: IntermediateKind.IntermediateGenericTypeArgument,
                name: member.typeName.getText(),
                typeParameters: processTypeReferences(member.typeArguments)
            });
        }
    }

    // all done
    return retval;
}