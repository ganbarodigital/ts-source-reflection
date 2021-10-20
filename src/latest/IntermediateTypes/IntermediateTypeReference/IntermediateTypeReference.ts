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
import { AnyIntermediateLiteralType } from "../AnyIntermediateLiteralType";
import { IntermediateAnonymousClassType } from "../IntermediateAnonymousClassType";
import { IntermediateArrayTypeReference } from "../IntermediateArrayTypeReference";
import { IntermediateBuiltInTypeReference } from "../IntermediateBuiltInTypeReference";
import { IntermediateConditionalType } from "../IntermediateConditionalType";
import { IntermediateConstructorType } from "../IntermediateConstructorType";
import { IntermediateConstTypeCast } from "../IntermediateConstTypeCast";
import { IntermediateEmptyObjectType } from "../IntermediateEmptyObjectType";
import { IntermediateFixedTypeReference } from "../IntermediateFixedTypeReference";
import { IntermediateFunctionTypeSignature } from "../IntermediateFunctionTypeSignature";
import { IntermediateGenericTypeReference } from "../IntermediateGenericTypeReference";
import { IntermediateImportedType } from "../IntermediateImportedType";
import { IntermediateIndexedAccessTypeReference } from "../IntermediateIndexedAccessTypeReference";
import { IntermediateInferType } from "../IntermediateInferType";
import { IntermediateIntersectionType } from "../IntermediateIntersectionType";
import { IntermediateKeyofTypeReference } from "../IntermediateKeyofTypeReference";
import { IntermediateLiteralType } from "../IntermediateLiteralType";
import { IntermediateMappedType } from "../IntermediateMappedType";
import { IntermediateParenthesizedType } from "../IntermediateParenthesizedType";
import { IntermediateQualifiedName } from "../IntermediateQualifiedName";
import { IntermediateQualifiedTypeReference } from "../IntermediateQualifiedTypeReference";
import { IntermediateSymbolType } from "../IntermediateSymbolType";
import { IntermediateTemplateLiteralType } from "../IntermediateTemplateLiteralType";
import { IntermediateThisType } from "../IntermediateThisType";
import { IntermediateTupleType } from "../IntermediateTupleType";
import { IntermediateTypeofTypeReference } from "../IntermediateTypeofTypeReference";
import { IntermediateTypePredicate } from "../IntermediateTypePredicate";
import { IntermediateUndiscoverableType } from "../IntermediateUndiscoverableType";
import { IntermediateUnionType } from "../IntermediateUnionType";

export type IntermediateTypeReference
    = AnyIntermediateLiteralType
      | IntermediateAnonymousClassType
      | IntermediateArrayTypeReference
      | IntermediateBuiltInTypeReference
      | IntermediateConditionalType
      | IntermediateConstTypeCast
      | IntermediateConstructorType
      | IntermediateEmptyObjectType
      | IntermediateFixedTypeReference
      | IntermediateFunctionTypeSignature
      | IntermediateGenericTypeReference
      | IntermediateImportedType
      | IntermediateIndexedAccessTypeReference
      | IntermediateInferType
      | IntermediateIntersectionType
      | IntermediateKeyofTypeReference
      | IntermediateLiteralType
      | IntermediateMappedType
      | IntermediateParenthesizedType
      | IntermediateQualifiedTypeReference
      | IntermediateQualifiedName
      | IntermediateSymbolType
      | IntermediateTemplateLiteralType
      | IntermediateThisType
      | IntermediateTupleType
      | IntermediateTypePredicate
      | IntermediateTypeofTypeReference
      | IntermediateUndiscoverableType
      | IntermediateUnionType;