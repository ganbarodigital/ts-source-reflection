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

import { IntermediateBlock } from "..";
import { IntermediateAbstractItem } from "../IntermediateAbstractItem";
import { IntermediateCallableDeclaration } from "../IntermediateCallableDeclaration";
import { IntermediateDecoratableItem } from "../IntermediateDecoratableItem";
import { IntermediateDocumentedItem } from "../IntermediateDocumentedItem";
import { IntermediateGenericable } from "../IntermediateGenericable";
import { IntermediateIdentifiedItem } from "../IntermediateIdentifiedItem";
import { IntermediateItem } from "../IntermediateItem";
import { IntermediateKind } from "../IntermediateKind";
import { IntermediateRestrictableScopeItem } from "../IntermediateRestrictableScopeItem";
import { IntermediateStaticItem } from "../IntermediateStaticItem";

export type IntermediateMethodDeclaration
    = IntermediateAmbientMethod
    | IntermediateMethodImplementation
    | IntermediateMethodOverload
    | IntermediateTmpMethod
    ;

type IntermediateTmpMethod
= IntermediateItem<IntermediateKind.IntermediateMethodDeclaration>
& IntermediateAbstractItem
& IntermediateCallableDeclaration
& IntermediateDecoratableItem
& IntermediateDocumentedItem
& IntermediateGenericable
& IntermediateIdentifiedItem
& IntermediateRestrictableScopeItem
& IntermediateStaticItem
&
{
    hasBody: boolean;
    body?: IntermediateBlock;
}

export type IntermediateMethodImplementation
    = IntermediateItem<IntermediateKind.IntermediateMethodImplementation>
    & IntermediateAbstractItem
    & IntermediateCallableDeclaration
    & IntermediateDecoratableItem
    & IntermediateDocumentedItem
    & IntermediateGenericable
    & IntermediateIdentifiedItem
    & IntermediateRestrictableScopeItem
    & IntermediateStaticItem
    &
    {
        hasBody: true;
        body: IntermediateBlock;
    }

export type IntermediateMethodOverload
    = IntermediateItem<IntermediateKind.IntermediateMethodOverload>
    & IntermediateAbstractItem
    & IntermediateCallableDeclaration
    & IntermediateDocumentedItem
    & IntermediateGenericable
    & IntermediateIdentifiedItem
    & IntermediateRestrictableScopeItem
    & IntermediateStaticItem
    &
    {
        hasBody: false;
    }

export type IntermediateAmbientMethod
    = IntermediateItem<IntermediateKind.IntermediateAmbientMethod>
    & IntermediateAbstractItem
    & IntermediateCallableDeclaration
    & IntermediateDocumentedItem
    & IntermediateGenericable
    & IntermediateIdentifiedItem
    & IntermediateRestrictableScopeItem
    & IntermediateStaticItem
    &
    {
        hasBody: false;
    }