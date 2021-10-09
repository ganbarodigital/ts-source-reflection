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

export enum IntermediateKind {
    IntermediateAliasedExportItem,
    IntermediateAliasedImportBinding,
    IntermediateAmbientModuleDefinition,
    IntermediateAnonymousCallableParameter,
    IntermediateAnonymousClassType,
    IntermediateArrayBindingConstDeclaration,
    IntermediateArrayBindingElement,
    IntermediateArrayBindingLetDeclaration,
    IntermediateArrayBindingParameter,
    IntermediateArrayBindingVarAssignment,
    IntermediateArrayBindingVarDeclaration,
    IntermediateArrayLiteral,
    IntermediateArrayTypeReference,
    IntermediateArrowFunction,
    IntermediateBigintLiteral,
    IntermediateBinaryExpression,
    IntermediateBlock,
    IntermediateBooleanLiteral,

    // I'm not 100% sure we should treat built-in types separately
    // so this may disappear in the future!
    IntermediateBuiltInTypeReference,
    IntermediateCallSignature,
    IntermediateCallExpression,
    IntermediateClass,
    IntermediateCaughtVarDeclaration,
    IntermediateComment,
    IntermediateComputedPropertyName,
    IntermediateConditionalExpression,
    IntermediateConditionalType,
    IntermediateConstDeclaration,
    IntermediateConstTypeCast,
    IntermediateConstructorDeclaration,
    IntermediateConstructorSignature,
    IntermediateConstructorType,
    IntermediateDecorator,
    IntermediateDefaultImport,
    IntermediateDestructuredConstDeclaration,
    IntermediateDestructuredLetDeclaration,
    IntermediateDestructuredParameterDeclaration,
    IntermediateDestructuredVarAssignment,
    IntermediateDestructuredVarDeclaration,
    IntermediateDocBlock,
    IntermediateElementAccessExpression,
    IntermediateEmptyExport,
    IntermediateEmptyObjectType,
    IntermediateEnum,
    IntermediateEnumMember,
    IntermediateExportAssignment,
    IntermediateExportedIdentifiers,
    IntermediateExternalModuleReference,
    IntermediateFixedTypeArgument,
    IntermediateFixedTypeReference,
    IntermediateForInLoop,
    IntermediateForLoop,
    IntermediateForOfLoop,
    IntermediateFunction,
    IntermediateFunctionExpression,
    IntermediateFunctionTypeSignature,
    IntermediateGenericType,
    IntermediateGenericTypeArgument,
    IntermediateGenericTypeReference,
    IntermediateGetter,
    IntermediateGlobalAugmentation,
    IntermediateIdentifierDeclaration,
    IntermediateIdentifierReference,
    IntermediateIfStatement,
    IntermediateImportAssignment,
    IntermediateImportBinding,
    IntermediateImportDeclaration,
    IntermediateIndexSignature,
    IntermediateIndexedAccessTypeReference,
    IntermediateInferType,
    IntermediateInterface,
    IntermediateIntersectionType,
    IntermediateLetDeclaration,
    IntermediateLiteralType,
    IntermediateKeyofTypeReference,
    IntermediateMappedType,
    IntermediateMethodDeclaration,
    IntermediateMethodSignature,
    IntermediateModuleBlock,
    IntermediateNamedExportItem,
    IntermediateNamespace,
    IntermediateNamespaceExport,
    IntermediateNamespaceImport,
    IntermediateNewExpression,
    IntermediateNumericLiteral,
    IntermediateObjectBindingElement,
    IntermediateObjectLiteral,
    IntermediateOmittedExpression,
    IntermediateParenthesizedExpression,
    IntermediateParenthesizedType,
    IntermediatePostfixUnaryExpression,
    IntermediatePrefixUnaryExpression,
    IntermediatePrivatePropertyIdentifier,
    IntermediatePropertyAccessExpression,
    IntermediatePropertyAssignment,
    IntermediateQualifiedName,
    IntermediateQualifiedTypeReference,
    IntermediateReExportAll,
    IntermediateReExportIdentifiers,
    IntermediateReference,
    IntermediateRegexLiteral,
    IntermediateRestCallableParameterDeclaration,
    IntermediateRestCallableParameterSignature,
    IntermediateRestIdentifierDeclaration,
    IntermediateRestIdentifierName,
    IntermediateRestType,
    IntermediateSetter,
    IntermediateShorthandAmbientModuleDefinition,
    IntermediateShorthandPropertyAssignment,
    IntermediateSourceFile,
    IntermediateSpreadOperator,
    IntermediateStringLiteral,
    IntermediateTemplateExpression,
    IntermediateTemplateExpressionSpan,
    IntermediateTemplateLiteralSpan,
    IntermediateTemplateLiteralType,
    IntermediateThisType,
    IntermediateThrow,
    IntermediateTryCatch,
    IntermediateTupleType,
    IntermediateTupleTypeElement,
    IntermediateTypeAliasDeclaration,
    IntermediateTypeArgument,
    IntermediateTypeDeclaration,
    IntermediateTypePredicate,
    IntermediateTypedCallableParameterDeclaration,
    IntermediateTypedCallableParameterSignature,
    IntermediateTypedConstructorParameterDeclaration,
    IntermediateTypedPropertyDeclaration,
    IntermediateTypedPropertySignature,
    IntermediateTypeofTypeReference,
    IntermediateUnionType,
    IntermediateUntypedCallableParameterDeclaration,
    IntermediateUntypedCallableParameterSignature,
    IntermediateUntypedConstructorParameterDeclaration,
    IntermediateUntypedPropertyDeclaration,
    IntermediateUntypedPropertySignature,
    IntermediateVarAssignment,
    IntermediateVarDeclaration,
    IntermediateVariableDeclaration,
    IntermediateVariableDeclarations,
}
