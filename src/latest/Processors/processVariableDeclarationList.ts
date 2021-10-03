// tslint:disable: no-bitwise
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
    DEFAULT_DATA_PATH,
    getClassNames,
    Maybe,
    UnsupportedTypeError
} from "@safelytyped/core-types";
import {
    ArrayBindingElement,
    ArrayBindingPattern,
    isArrayBindingPattern,
    isBindingElement,
    isIdentifier,
    isObjectBindingPattern,
    isTypeOperatorNode,
    NodeFlags,
    ObjectBindingPattern,
    SyntaxKind,
    VariableDeclaration,
    VariableDeclarationList
} from "typescript";
import { AST } from "../AST";
import {
    IntermediateExpression,
    IntermediateIdentifierName,
    IntermediateKind,
    IntermediateTypeReference,
    IntermediateVariableDeclaration
} from "../IntermediateTypes";
import { processBindingName } from "./processBindingName";
import { processDocBlock } from "./processDocBlock";
import { processExpression } from "./processExpression";
import { processTypeNode } from "./processTypeNode";
import { VariableDeclarationContextFlags } from "./VariableDeclarationContextFlags";

type VariableDeclarationWithArrayBinding =
    VariableDeclaration
    &
{
    name: ArrayBindingElement;
}
function isVariableDeclarationWithArrayBinding(
    input: VariableDeclaration
): input is VariableDeclarationWithArrayBinding
{
    return isArrayBindingPattern(input.name);
}

type VariableDeclarationWithObjectBinding =
    VariableDeclaration
    &
{
    name: ObjectBindingPattern;
}
function isVariableDeclarationWithObjectBinding(
    input: VariableDeclaration
): input is VariableDeclarationWithObjectBinding
{
    return isObjectBindingPattern(input.name);
}

export function processVariableDeclarationList (
    input: VariableDeclarationList,
): IntermediateVariableDeclaration[]
{
    // this will be our return value
    const retval: IntermediateVariableDeclaration[] = [];

    // what kind of variables are we defining?
    const contextFlags: VariableDeclarationContextFlags = {
        kind: IntermediateKind.IntermediateVarDeclaration,
    }

    if (input.flags & NodeFlags.Const) {
        contextFlags.kind = IntermediateKind.IntermediateConstDeclaration;
    }

    if (input.flags & NodeFlags.Let) {
        contextFlags.kind = IntermediateKind.IntermediateLetDeclaration;
    }

    // what do we have?
    for (const member of input.declarations) {
        // we can tell the type of variable apart by looking at
        // the member's name
        if (isIdentifier(member.name)) {
            retval.push(
                processVariableDeclaration(member, contextFlags)
            );
        }
        else if (isVariableDeclarationWithObjectBinding(member)) {
            retval.push(
                processDestructuredVariableDeclaration(member, contextFlags)
            )
        }
        else if (isVariableDeclarationWithArrayBinding(member)) {
            retval.push(
                processArrayBindingVariableDeclaration(member, contextFlags)
            )
        }
        else {
            // if we get here, we're looking at an array binding pattern
            // tslint:disable-next-line: no-console
            console.log("unsupported var name type: ", getClassNames(member.name), SyntaxKind[member.name.kind]);
            throw new UnsupportedTypeError({
                public: {
                    dataPath: DEFAULT_DATA_PATH,
                    expected: "supported var declaration name type",
                    actual: getClassNames(member.name)[0],
                }
            });
        }
    }

    // all done
    return retval;
}

function processVariableDeclaration(
    input: VariableDeclaration,
    contextFlags: VariableDeclarationContextFlags,
): IntermediateVariableDeclaration
{
    // special case - variable is readonly
    //
    // instead of being a modifier, this is buried in the variable
    // type instead
    let isReadonly: boolean = false;
    let varType = input.type;
    if (varType && isTypeOperatorNode(varType)) {
        if (varType.operator === SyntaxKind.ReadonlyKeyword) {
            isReadonly = true;
            varType = varType.type;
        }
    }

    // does this variable have an explicit type?
    let typeRef: Maybe<IntermediateTypeReference>;
    if (varType) {
        typeRef = processTypeNode(varType);
    }

    // does this variable have an initial value?
    let initialiser: Maybe<IntermediateExpression>;
    if (input.initializer) {
        initialiser = processExpression(input.initializer);
    }

    // this is necessary to keep the compiler happy
    if (contextFlags.kind === IntermediateKind.IntermediateConstDeclaration) {
        return {
            kind: contextFlags.kind,
            docBlock: processDocBlock(input),
            isConstant: true,
            isReadonly,
            name: input.name.getText(),
            initializer: initialiser,
            typeRef,
        }
    }

    // all done
    return {
        kind: contextFlags.kind,
        docBlock: processDocBlock(input),
        isConstant: false,
        isReadonly,
        name: input.name.getText(),
        initializer: initialiser,
        typeRef,
    }
}

// we need to be able to map the single variable kinds
// onto the destructured kinds
type KindToMapFrom = IntermediateKind.IntermediateConstDeclaration
    | IntermediateKind.IntermediateLetDeclaration
    | IntermediateKind.IntermediateVarDeclaration;

type ValidDestructuredObjectKinds =
    IntermediateKind.IntermediateDestructuredConstDeclaration
    | IntermediateKind.IntermediateDestructuredLetDeclaration
    | IntermediateKind.IntermediateDestructuredVarDeclaration;

type KindMap<T> = {
    [ key in KindToMapFrom]: T;
}

const MapKindToDestructuredObject: KindMap<ValidDestructuredObjectKinds> = {
    [IntermediateKind.IntermediateConstDeclaration]: IntermediateKind.IntermediateDestructuredConstDeclaration,
    [IntermediateKind.IntermediateLetDeclaration]: IntermediateKind.IntermediateDestructuredLetDeclaration,
    [IntermediateKind.IntermediateVarDeclaration]: IntermediateKind.IntermediateDestructuredVarDeclaration,
}

function processDestructuredVariableDeclaration(
    input: VariableDeclarationWithObjectBinding,
    contextFlags: VariableDeclarationContextFlags
): IntermediateVariableDeclaration
{
    // special case - variable is readonly
    //
    // instead of being a modifier, this is buried in the variable
    // type instead
    let isReadonly: boolean = false;
    let varType = input.type;
    if (varType && isTypeOperatorNode(varType)) {
        if (varType.operator === SyntaxKind.ReadonlyKeyword) {
            isReadonly = true;
            varType = varType.type;
        }
    }

    // does this variable have an initial value?
    let initializer: Maybe<IntermediateExpression>;
    if (input.initializer) {
        initializer = processExpression(input.initializer);
    }

    const kind = MapKindToDestructuredObject[contextFlags.kind];

    if (kind === IntermediateKind.IntermediateDestructuredConstDeclaration) {
        return {
            kind,
            docBlock: processDocBlock(input),
            isConstant: true,
            isReadonly,
            members: processDestructuredObjectDeclaration(input.name),
            initializer,
        }
    }

    return {
        kind,
        docBlock: processDocBlock(input),
        isConstant: false,
        isReadonly,
        members: processDestructuredObjectDeclaration(input.name),
        initializer,
    }
}

function processDestructuredObjectDeclaration(
    input: ObjectBindingPattern
): IntermediateIdentifierName[]
{
    const retval: IntermediateIdentifierName[] = [];

    for (const element of input.elements) {
        retval.push(
            processBindingName(
                element.name,
                AST.hasDotDotDotToken(element.dotDotDotToken),
            ),
        );
    }

    return retval;
}

type ValidArrayBindingObjectKinds =
    IntermediateKind.IntermediateArrayBindingConstDeclaration
    | IntermediateKind.IntermediateArrayBindingLetDeclaration
    | IntermediateKind.IntermediateArrayBindingVarDeclaration;


const MapKindToArrayBindingObject: KindMap<ValidArrayBindingObjectKinds> = {
    [IntermediateKind.IntermediateConstDeclaration]: IntermediateKind.IntermediateArrayBindingConstDeclaration,
    [IntermediateKind.IntermediateLetDeclaration]: IntermediateKind.IntermediateArrayBindingLetDeclaration,
    [IntermediateKind.IntermediateVarDeclaration]: IntermediateKind.IntermediateArrayBindingVarDeclaration,
}

function processArrayBindingVariableDeclaration(
    input: VariableDeclarationWithArrayBinding,
    contextFlags: VariableDeclarationContextFlags
): IntermediateVariableDeclaration
{
    // special case - variable is readonly
    //
    // instead of being a modifier, this is buried in the variable
    // type instead
    let isReadonly: boolean = false;
    let varType = input.type;
    if (varType && isTypeOperatorNode(varType)) {
        if (varType.operator === SyntaxKind.ReadonlyKeyword) {
            isReadonly = true;
            varType = varType.type;
        }
    }

    // does this variable have an initial value?
    let initializer: Maybe<IntermediateExpression>;
    if (input.initializer) {
        initializer = processExpression(input.initializer);
    }

    const kind = MapKindToArrayBindingObject[contextFlags.kind];

    if (kind === IntermediateKind.IntermediateArrayBindingConstDeclaration) {
        return {
            kind,
            docBlock: processDocBlock(input),
            isConstant: true,
            isReadonly,
            members: processArrayBindingDeclaration(input.name),
            initializer,
        }
    }

    return {
        kind,
        docBlock: processDocBlock(input),
        isConstant: false,
        isReadonly,
        members: processArrayBindingDeclaration(input.name),
        initializer,
    }
}

function processArrayBindingDeclaration(
    input: ArrayBindingPattern
): IntermediateIdentifierName[]
{
    const retval: IntermediateIdentifierName[] = [];

    for (const element of input.elements) {
        if (isBindingElement(element)) {
            retval.push(
                processBindingName(
                    element.name,
                    AST.hasDotDotDotToken(element.dotDotDotToken)
                )
            );
        }
    }

    return retval;
}