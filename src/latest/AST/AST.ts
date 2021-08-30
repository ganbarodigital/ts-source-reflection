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

import { findDocBlockText } from "./findDocBlockText";
import { findExtendsHeritageClauses } from "./findExtendsHeritageClauses";
import { findImplementsHeritageClauses } from "./findImplementsHeritageClauses";
import { getRestrictableScope } from "./getRestrictableScope";
import { getStatementKind } from "./getStatementKind";
import { hasAbstractModifier } from "./hasAbstractModifier";
import { hasBody } from "./hasBody";
import { hasDeclaredModifier } from "./hasDeclaredModifier";
import { hasDefaultModifier } from "./hasDefaultModifier";
import { hasDotDotDotToken } from "./hasDotDotDotToken";
import { hasExportModifier } from "./hasExportModifier";
import { hasPrivateModifier } from "./hasPrivateModifier";
import { hasProtectedModifier } from "./hasProtectedModifier";
import { hasPublicModifier } from "./hasPublicModifier";
import { hasReadonlyModifier } from "./hasReadonlyModifier";
import { hasStaticModifier } from "./hasStaticModifier";
import { isAbstractKeyword } from "./isAbstractKeyword";
import { isAnonymousClassType } from "./isAnonymousClassType";
import { isDeclareKeyword } from "./isDeclareKeyword";
import { isDefaultKeyword } from "./isDefaultKeyword";
import { isExportKeyword } from "./isExportKeyword";
import { isFalseKeyword } from "./isFalseKeyword";
import { isIndexSignature } from "./isIndexSignature";
import { isNodeExported } from "./isNodeExported";
import { isPrivateKeyword } from "./isPrivateKeyword";
import { isProtectedKeyword } from "./isProtectedKeyword";
import { isPublicKeyword } from "./isPublicKeyword";
import { isReadonlyKeyword } from "./isReadonlyKeyword";
import { isStaticKeyword } from "./isStaticKeyword";
import { isTrueKeyword } from "./isTrueKeyword";
import { mustBeCallSignatureDeclaration } from "./mustBeCallSignatureDeclaration";
import { mustBeClassDeclaration } from "./mustBeClassDeclaration";
import { mustBeConstructorDeclaration } from "./mustBeConstructorDeclaration";
import { mustBeConstructSignatureDeclaration } from "./mustBeConstructSignatureDeclaration";
import { mustBeExportDeclaration } from "./mustBeExportDeclaration";
import { mustBeExpressionStatement } from "./mustBeExpressionStatement";
import { mustBeFunctionDeclaration } from "./mustBeFunctionDeclaration";
import { mustBeImportClause } from "./mustBeImportClause";
import { mustBeImportDeclaration } from "./mustBeImportDeclaration";
import { mustBeInterfaceDeclaration } from "./mustBeInterfaceDeclaration";
import { mustBePropertyAssignment } from "./mustBePropertyAssignment";
import { mustBePropertySignature } from "./mustBePropertySignature";
import { mustBeTypeAliasDeclaration } from "./mustBeTypeAliasDeclaration";
import { mustBeTypeReference } from "./mustBeTypeReference";
import { mustBeVariableStatement } from "./mustBeVariableStatement";
export class AST
{
    static findDocBlockText = findDocBlockText;
    static findExtendsHeritageClauses = findExtendsHeritageClauses;
    static findImplementsHeritageClauses = findImplementsHeritageClauses;
    static getRestrictableScope = getRestrictableScope;
    static getStatementKind = getStatementKind;
    static hasAbstractModifier = hasAbstractModifier;
    static hasBody = hasBody;
    static hasDeclaredModifier = hasDeclaredModifier;
    static hasDefaultModifier = hasDefaultModifier;
    static hasDotDotDotToken = hasDotDotDotToken;
    static hasExportModifier = hasExportModifier;
    static hasReadonlyModifier = hasReadonlyModifier;
    static hasPrivateModifier = hasPrivateModifier;
    static hasProtectedModifier = hasProtectedModifier;
    static hasPublicModifier = hasPublicModifier;
    static hasStaticModifier = hasStaticModifier;
    static isAbstractKeyword = isAbstractKeyword;
    static isAnonymousClassType = isAnonymousClassType;
    static isDeclareKeyword = isDeclareKeyword;
    static isDefaultKeyword = isDefaultKeyword;
    static isExportKeyword = isExportKeyword;
    static isFalseKeyword = isFalseKeyword;
    static isIndexSignature = isIndexSignature;
    static isNodeExported = isNodeExported;
    static isPrivateKeyword = isPrivateKeyword;
    static isProtectedKeyword = isProtectedKeyword;
    static isPublicKeyword = isPublicKeyword;
    static isReadonlyKeyword = isReadonlyKeyword;
    static isStaticKeyword = isStaticKeyword;
    static isTrueKeyword = isTrueKeyword;
    static mustBeCallSignatureDeclaration = mustBeCallSignatureDeclaration;
    static mustBeClassDeclaration = mustBeClassDeclaration;
    static mustBeConstructorDeclaration = mustBeConstructorDeclaration;
    static mustBeConstructSignatureDeclaration = mustBeConstructSignatureDeclaration;
    static mustBeExportDeclaration = mustBeExportDeclaration;
    static mustBeExpressionStatement = mustBeExpressionStatement;
    static mustBeFunctionDeclaration = mustBeFunctionDeclaration;
    static mustBeImportClause = mustBeImportClause;
    static mustBeImportDeclaration = mustBeImportDeclaration;
    static mustBeInterfaceDeclaration = mustBeInterfaceDeclaration;
    static mustBePropertyAssignment = mustBePropertyAssignment;
    static mustBePropertySignature = mustBePropertySignature;
    static mustBeTypeAliasDeclaration = mustBeTypeAliasDeclaration;
    static mustBeTypeReference = mustBeTypeReference;
    static mustBeVariableStatement = mustBeVariableStatement;
}