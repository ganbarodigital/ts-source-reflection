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
    UnsupportedTypeError
} from "@safelytyped/core-types";
import {
    isModuleBlock,
    ModuleDeclaration,
    NodeFlags,
    Statement
} from "typescript";
import { AST } from "../AST";
import {
    IntermediateGlobalAugmentation,
    IntermediateKind,
    IntermediateModuleDeclaration,
    IntermediateNamespace
} from "../IntermediateTypes";
import { processDocBlock } from "./processDocBlock";
import { processStatements } from "./processStatements";
import { StatementProcessor } from "./StatementProcessor";

export const processModuleDeclaration: StatementProcessor = (
    input: Statement
): IntermediateModuleDeclaration => {
    // make sure we have the right kind of statement
    const moduleDec = AST.mustBeModuleDeclaration(input);

    // do we have a module that we support?
    // tslint:disable-next-line: no-bitwise
    if (moduleDec.flags & NodeFlags.Namespace) {
        return processNamespace(moduleDec);
    }

    // tslint:disable-next-line: no-bitwise
    if (moduleDec.flags & NodeFlags.GlobalAugmentation) {
        return processGlobalAugmentation(moduleDec);
    }

    // if we get there, then this is something we have not seen before
    throw new UnsupportedTypeError({
        public: {
            dataPath: DEFAULT_DATA_PATH,
            expected: "a supported module type",
            actual: getClassNames(input)[0],
        }
    });
}

function processGlobalAugmentation(
    input: ModuleDeclaration
): IntermediateGlobalAugmentation {
    // is this an empty augmentation?
    if (!input.body) {
        return {
            kind: IntermediateKind.IntermediateGlobalAugmentation,
            children: [],
        }
    }

    // make sure we have the kind of body we are expecting
    if (isModuleBlock(input.body)) {
        return {
            kind: IntermediateKind.IntermediateGlobalAugmentation,
            children: processStatements(input.body!.statements),
        }
    }

    // if we get here, we do not support this yet
    // tslint:disable-next-line: no-console
    console.log(getClassNames(input.body));
    throw new UnsupportedTypeError({
        public: {
            dataPath: DEFAULT_DATA_PATH,
            expected: "a support ModuleDeclaration body type",
            actual: getClassNames(input.body)[0],
        }
    });
}

function processNamespace(
    input: ModuleDeclaration
): IntermediateNamespace {
    // is this an empty namespace?
    if (!input.body) {
        return {
            kind: IntermediateKind.IntermediateNamespace,
            docBlock: processDocBlock(input),
            isDeclared: AST.hasDeclaredModifier(input.modifiers),
            isExported: AST.hasExportModifier(input.modifiers),
            isDefaultExport: AST.hasDefaultModifier(input.modifiers),
            name: input.name.getText(),
            children: [],
        }
    }

    // what kind of body is it?
    if (isModuleBlock(input.body)) {
        return {
            kind: IntermediateKind.IntermediateNamespace,
            docBlock: processDocBlock(input),
            isDeclared: AST.hasDeclaredModifier(input.modifiers),
            isExported: AST.hasExportModifier(input.modifiers),
            isDefaultExport: AST.hasDefaultModifier(input.modifiers),
            name: input.name.getText(),
            children: processStatements(input.body.statements),
        }
    }

    // if we get here, we do not support this yet
    // tslint:disable-next-line: no-console
    console.log(getClassNames(input.body));
    throw new UnsupportedTypeError({
        public: {
            dataPath: DEFAULT_DATA_PATH,
            expected: "a support ModuleDeclaration body type",
            actual: getClassNames(input.body)[0],
        }
    });
}