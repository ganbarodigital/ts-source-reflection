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

export * from "./findDocBlockText";
export * from "./findExtendsHeritageClauses";
export * from "./findImplementsHeritageClauses";
export * from "./getRestrictableScope";
export * from "./getStatementKind";
export * from "./getTextForNode";
export * from "./hasAbstractModifier";
export * from "./hasBody";
export * from "./hasConstModifier";
export * from "./hasDeclaredModifier";
export * from "./hasDefaultModifier";
export * from "./hasDotDotDotToken";
export * from "./hasExportModifier";
export * from "./hasPrivateModifier";
export * from "./hasProtectedModifier";
export * from "./hasPublicModifier";
export * from "./hasReadonlyModifier";
export * from "./hasStaticModifier";
export * from "./isAbstractKeyword";
export * from "./isAnonymousClassType";
export * from "./isConstKeyword";
export * from "./isDeclareKeyword";
export * from "./isDefaultKeyword";
export * from "./isExportKeyword";
export * from "./isFalseKeyword";
export * from "./isIndexSignature";
export * from "./isNodeExported";
export * from "./isNullLiteral";
export * from "./isPrivateKeyword";
export * from "./isProtectedKeyword";
export * from "./isPublicKeyword";
export * from "./isReadonlyKeyword";
export * from "./isStaticKeyword";
export * from "./isSuperExpression";
export * from "./isThisExpression";
export * from "./isTrueKeyword";
export * from "./translateInferredType";
export * from "./mustBeBlock";
export * from "./mustBeCallSignatureDeclaration";
export * from "./mustBeClassDeclaration";
export * from "./mustBeConstructSignatureDeclaration";
export * from "./mustBeConstructorDeclaration";
export * from "./mustBeEmptyStatement";
export * from "./mustBeEnumDeclaration";
export * from "./mustBeExportAssignment";
export * from "./mustBeExportDeclaration";
export * from "./mustBeExpressionStatement";
export * from "./mustBeForInStatement";
export * from "./mustBeForOfStatement";
export * from "./mustBeForStatement";
export * from "./mustBeFunctionDeclaration";
export * from "./mustBeIfStatement";
export * from "./mustBeImportClause";
export * from "./mustBeImportDeclaration";
export * from "./mustBeImportEqualsDeclaration";
export * from "./mustBeInterfaceDeclaration";
export * from "./mustBeModuleDeclaration";
export * from "./mustBePropertyAssignment";
export * from "./mustBePropertySignature";
export * from "./mustBeReturnStatement";
export * from "./mustBeSourceFile";
export * from "./mustBeThrowStatement";
export * from "./mustBeTryStatement";
export * from "./mustBeTypeAliasDeclaration";
export * from "./mustBeTypeReference";
export * from "./mustBeVariableStatement";