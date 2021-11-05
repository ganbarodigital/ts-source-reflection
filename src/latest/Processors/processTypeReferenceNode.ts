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
import { mustBeString } from "@safelytyped/core-types";
import { isQualifiedName, TypeReferenceNode } from "typescript";
import { IntermediateKind, IntermediateTypeReference } from "../IntermediateTypes";
import { ParentContext } from "./ParentContext";
import { ProcessingContext } from "./ProcessingContext";
import { processQualifiedName } from "./processQualifiedName";
import { processTypeNode } from "./processTypeNode";


export function processTypeReferenceNode(
    processCtx: ProcessingContext,
    parentCtx: ParentContext,
    input: TypeReferenceNode
): IntermediateTypeReference
{
    // shorthand
    const compiler = processCtx.compiler;

    // this is necessary to avoid runtime exceptions being thrown
    // by Typescript
    let typeName: string;
    try {
        typeName = mustBeString(
            compiler.getTextForNode(input.typeName)
        );
    } catch (e) {
        // if this happens, we've no idea what we are looking at
        // and are currently out of options
        // tslint:disable-next-line: no-console
        // console.log(input);
        return {
            kind: IntermediateKind.IntermediateUndiscoverableType,
        }
    }

    // special case - found in the "as const" suffix
    // this tells the compiler to convert all the values to also be
    // type literals!
    if (typeName === "const") {
        return {
            kind: IntermediateKind.IntermediateConstTypeCast,
        }
    }

    // special case - generic type
    if (input.typeArguments) {
        const typeArguments: IntermediateTypeReference[] = [];
        input.typeArguments.forEach((member) => {
            typeArguments.push(processTypeNode(processCtx, parentCtx, member));
        });

        return {
            kind: IntermediateKind.IntermediateGenericTypeReference,
            typeName,
            typeArguments,
        }
    }

    // special case - qualified name
    if (isQualifiedName(input.typeName)) {
        return processQualifiedName(processCtx, input.typeName);
    }

    // we will return to this and add support for other cases
    // as our test suite grows!
    return {
        kind: IntermediateKind.IntermediateFixedTypeReference,
        typeName,
    }
}