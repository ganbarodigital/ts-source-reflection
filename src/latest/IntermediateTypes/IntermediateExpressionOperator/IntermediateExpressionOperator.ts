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

export enum IntermediateExpressionOperator {
    AMPERSAND_AMPERSAND_EQUALS = "&&=",
    AMPERSAND_AMPERSAND = "&&",
    AMPERSAND_EQUALS = "&=",
    AMPERSAND = "&",
    ASTERISK_ASTERISK = "**",
    ASTERISK_ASTERISK_EQUALS = "**=",
    ASTERISK_EQUALS = "*=",
    ASTERISK = "*",
    BAR = "|",
    BAR_BAR = "||",
    BAR_EQUALS = "|=",
    BAR_BAR_EQUALS = "||=",
    CARET = "^",
    CARET_EQUALS = "^=",
    COMMA = ",",
    EQUALS = "=",
    EQUALS_EQUALS = "==",
    EQUALS_EQUALS_EQUALS = "===",
    EXCLAMATION = "!",
    EXCLAMATION_EQUALS = "!=",
    EXCLAMATION_EQUALS_EQUALS = "!==",
    GREATER_THAN_EQUALS = ">=",
    GREATER_THAN_GREATER_THAN_EQUALS=">>=",
    GREATER_THAN_GREATER_THAN_GREATHER_THAN_EQUALS = ">>>=",
    GREATER_THAN=">",
    GREATER_THAN_GREATER_THAN = ">>",
    GREATER_THAN_GREATER_THAN_GREATER_THAN = ">>>",
    IN = "in",
    INSTANCEOF="instanceof",
    LESS_THAN_EQUALS="<=",
    LESS_THAN_LESS_THAN_EQUALS="<<=",
    LESS_THAN="<",
    LESS_THAN_LESS_THAN="<<",
    MINUS_EQUALS = "-=",
    MINUS = "-",
    MINUS_MINUS = "--",
    PERCENT_EQUALS="%=",
    PERCENT="%",
    PLUS_EQUALS="+=",
    PLUS = "+",
    PLUS_PLUS = "++",
    QUESTION_QUESTION_EQUALS = "??=",
    QUESTION_QUESTION="??",
    SLASH_EQUALS = "/=",
    SLASH="/",
    TILDE = "~",
}