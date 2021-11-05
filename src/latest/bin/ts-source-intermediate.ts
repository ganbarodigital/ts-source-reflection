// tslint:disable: no-string-literal
import { getTypeNames, isArray, isObject } from "@safelytyped/core-types";
import { Filepath } from "@safelytyped/filepath";
import { IntermediateItem, IntermediateKind, IntermediateMappingModifier, IntermediateRestrictableScope, mapStringToIntermediateExpressionOperator } from "../IntermediateTypes";
import { processSourceFile } from "../Processors/processSourceFile";
import { getTestCompiler } from "../__testsuite__/getTestCompiler";
import * as fs from "fs";

const KEYS_ORDER = [
    'kind',
    'docBlock',
    'decorators',
    'isAbstract',
    'isConstant',
    'isDeclared',
    'isDefaultExport',
    'isExported',
    'isOptional',
    'isReadonly',
    'isStatic',
    'accessModifier',
    'setsPropertyWithScope',
    'name',
    'identifierName',
    'entityName',
    'propertyName',
    'parameterName',
    'exportedName',
    'from',
    'indexName',
    'indexTypeRef',
    'constraint',
    'parameter',
    'mappingModifiers',
    'nameMap',
    'defaultType',
    'typeParameters',
    'extends',
    'implements',
    'members',
    'parameters',
    'typeName',
    'expression',
    'typeArguments',
    'elements',
    'properties',
    'left',
    'target',
    'operator',
    'right',
    'propName',
    'element',
    'accessKey',
    'index',
    'indexRef',
    'valueRef',
    'text',
    'value',
    'sigIsReadonly',
    'typeRef',
    'typeRefs',
    'checkTypeRef',
    'extendsTypeRef',
    'trueTypeRef',
    'falseTypeRef',
    'arguments',
    'assertedRef',
    'returnType',
    'inferredReturnType',
    'initializer',
    'inferredType',
    'condition',
    'thenBlock',
    'elseBlock',
    'whenTrue',
    'whenFalse',
    'incrementor',
    'loopTarget',
    'hasBody',
    'body',
    'typeAssertion',
    'asType',
    'variables',
    'children',
    'contents',
    'isTypeOnly',
    'items',
    'source',
    'modRef',
    'tryBlock',
    'catchBlock',
    'finallyBlock',
    'head',
    'spans',
    'tail',
    'readonly',
    'optional',
    'referencedFiles',
    'referencedLibs',
    'referencedTypes',
    'referenceNoDefaultLib',
    'path',
];

const inputFile = new Filepath(
    process.argv[2],
);
const outputFile = new Filepath(
    inputFile.valueOf().replace("-input.", "-intermediate.")
);

const outBuf: string[] = [];

const compiler = getTestCompiler(inputFile);
const sourceFile = compiler.getAstForFile(inputFile);

const refFile = processSourceFile({compiler, sourceFile});

type ImportGroups = {
    [module:string]: string[];
}
const intermediateTypesGroup = inputFile.dirname().relative(new Filepath("src/latest/IntermediateTypes"));

const importGroups: ImportGroups = {}
importGroups[intermediateTypesGroup] = [
    "IntermediateKind",
    "IntermediateSourceFile"
];
importGroups["@safelytyped/filepath"] = [];

ppObject(refFile, 4);
pp(`}

export default expectedResult;`, 0);

const preBuf: string[] = [`//
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
`]

// tslint:disable-next-line: forin
for (const importGroup of Object.keys(importGroups).sort(sortImportGroups)) {
    // shorthand
    const currentGroup = importGroups[importGroup];

    // skip empty groups
    if (currentGroup.length === 0) {
        continue;
    }
    if (currentGroup.length === 1) {
        preBuf.push(`import { ${currentGroup[0]} } from "${importGroup}";`);
    }
    else {
        preBuf.push(`import {`);
        for (const entry of new Set(currentGroup.sort())) {
            preBuf.push(`    ${entry},`);
        }
        preBuf.push(`} from "${importGroup}";`);
    }
}

preBuf.push(`
const expectedResult: IntermediateSourceFile = {
`);

fs.writeFileSync(outputFile.valueOf(), preBuf.join("\n") + outBuf.join("\n"));

function sortImportGroups(a: string, b: string) {
    // special case
    if (a[0] === '@' && b[0] !== "@") {
        return -1;
    }
    if (a[0] !== '@' && b[0] === "@") {
        return 1;
    }

    return a.localeCompare(b);
}

function sortKeys(a: string, b: string) {
    const ia = KEYS_ORDER.indexOf(a);
    const ib = KEYS_ORDER.indexOf(b);

    if (ia < ib) {
        return -1;
    }

    if (ia > ib) {
        return 1;
    }

    return 0;
}

function ppObject(
    input: object,
    indent: number = 0
) {
    // shorthand
    const keys = Object.keys(input).sort(sortKeys).filter((x) => x !== 'path');
    const obj = input as {[key: string]: any};

    // tslint:disable-next-line: forin
    for (const key of keys) {
        // shorthand
        let value = obj[key];

        // special cases
        if (key === 'kind') {
            pp(`kind: IntermediateKind.${IntermediateKind[obj['kind']]},`, indent);
            continue;
        }
        if (key === 'accessModifier') {
            if (value !== undefined) {
                value = "IntermediateRestrictableScope." + IntermediateRestrictableScope[value];
                importGroups[intermediateTypesGroup].push("IntermediateRestrictableScope");
            }
            pp(`${key}: ${value},`, indent);
            continue;
        }
        if (key === 'setsPropertyWithScope') {
            if (value !== undefined) {
                value = "IntermediateRestrictableScope." + IntermediateRestrictableScope[value];
                importGroups[intermediateTypesGroup].push("IntermediateRestrictableScope");
            }
            pp(`${key}: ${value},`, indent);
            continue;
        }
        if (key === 'operator') {
            pp(`${key}: ${mapStringToIntermediateExpressionOperator(value)},`, indent);
            importGroups[intermediateTypesGroup].push("IntermediateExpressionOperator");
            continue;
        }
        if (key === 'readonly') {
            if (value !== undefined) {
                value = "IntermediateMappingModifier." + IntermediateMappingModifier[value];
                importGroups[intermediateTypesGroup].push("IntermediateMappingModifier");
            }
            pp(`${key}: ${value},`, indent);
            continue;
        }
        if (key === 'optional') {
            if (value !== undefined) {
                value = "IntermediateMappingModifier." + IntermediateMappingModifier[value];
                importGroups[intermediateTypesGroup].push("IntermediateMappingModifier");
            }
            pp(`${key}: ${value},`, indent);
            continue;
        }

        const type = getTypeNames(value)[0];
        // tslint:disable-next-line: no-console
        switch(type) {
            case 'boolean':
                pp(`${key}: ${value ? 'true' : 'false'},`, indent);
                break;
            case 'string':
                pp(`${key}: ${formatString(value)},`, indent);
                break;
            case 'number':
                pp(`${key}: ${value},`, indent);
                break;
            case 'null':
                pp(`${key}: null,`, indent);
                break;
            case 'undefined':
                pp(`${key}: undefined,`, indent);
                break;
            case 'Filepath':
                pp(`${key}: new Filepath("${value}"),`, indent);
                importGroups['@safelytyped/filepath'].push("Filepath");
                break;
            default:
                if (isArray(value)) {
                    // special case
                    if (value.length === 0) {
                        pp(`${key}: [],`, indent);
                    }
                    else {
                        pp(`${key}: [`, indent);
                        ppArray(value, indent+4)
                        pp(`],`, indent);
                    }
                }
                else if (isObject(value)) {
                    pp(`${key}: {`, indent);
                    ppObject(value, indent+4);
                    pp(`},`, indent);
                }
        }
    }
}

function formatString(
    input: string,
) {
    const firstChar = input.charAt(0);

    const unwrapped = input.replace(/\n/g, "\\n");

    switch(firstChar) {
        case '"':
            return `'${unwrapped}'`;
        default:
            return `"${unwrapped}"`;
    }
}

function ppArray(
    input: any[],
    indent: number
) {
    // tslint:disable-next-line: forin
    for (const value of input) {
        const type = getTypeNames(value)[0];

        // tslint:disable-next-line: no-console
        switch(type) {
            case 'boolean':
                pp(`${value ? 'true' : 'false'},`, indent);
                break;
            case 'string':
                pp(`${formatString(value)},`, indent);
                break;
            case 'number':
                pp(`${value},`, indent);
                break;
            case 'null':
                pp(`null,`, indent);
                break;
            case 'undefined':
                pp(`undefined,`, indent);
                break;
            case 'Filepath':
                pp(`new Filepath("${value}"),`, indent);
                importGroups['@safelytyped/filepath'].push("Filepath");
                break;
            default:
                if (isArray(value)) {
                    // special case
                    if (value.length === 0) {
                        pp('[],', indent);
                    }
                    else {
                        pp(`[`, indent);
                        ppArray(value, indent+4)
                        pp(`],`, indent);
                    }
                }
                else if (isObject(value)) {
                    pp(`{`, indent);
                    ppObject((value as unknown) as IntermediateItem<any>, indent+4);
                    pp(`},`, indent);
                }
        }
    }
}

function pp(
    input: string,
    indent: number
) {
    // tslint:disable-next-line: no-console
    outBuf.push(" ".repeat(indent) + input);
}