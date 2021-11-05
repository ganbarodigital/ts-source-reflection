// tslint:disable: no-string-literal
import { getTypeNames, isArray, isObject } from "@safelytyped/core-types";
import { Filepath } from "@safelytyped/filepath";
import { IntermediateItem, IntermediateKind, IntermediateRestrictableScope, mapStringToIntermediateExpressionOperator } from "../IntermediateTypes";
import { processSourceFile } from "../Processors/processSourceFile";
import { getTestCompiler } from "../__testsuite__/getTestCompiler";

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
    'constraint',
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
    'text',
    'value',
    'typeRef',
    'arguments',
    'returnType',
    'inferredReturnType',
    'initializer',
    'inferredType',
    'condition',
    'thenBlock',
    'elseBlock',
    'incrementor',
    'loopTarget',
    'hasBody',
    'body',
    'typeAssertion',
    'asType',
    'variables',
    'children',
    'contents',
    'items',
    'isTypeOnly',
    'source',
    'tryBlock',
    'catchBlock',
    'finallyBlock',
    'referencedFiles',
    'referencedLibs',
    'referencedTypes',
    'referenceNoDefaultLib',
    'path',
];

const inputFile = new Filepath(
    process.argv[2],
);
const compiler = getTestCompiler(inputFile);
const sourceFile = compiler.getAstForFile(inputFile);

const refFile = processSourceFile({compiler, sourceFile});
// tslint:disable-next-line: no-console
pp('{', 0);
ppObject(refFile, 4);
pp('}', 0);

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
    const keys = Object.keys(input).sort(sortKeys);
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
            }
            pp(`${key}: ${value},`, indent);
            continue;
        }
        if (key === 'setsPropertyWithScope') {
            if (value !== undefined) {
                value = "IntermediateRestrictableScope." + IntermediateRestrictableScope[value];
            }
            pp(`${key}: ${value},`, indent);
            continue;
        }
        if (key === 'operator') {
            pp(`${key}: ${mapStringToIntermediateExpressionOperator(value)},`, indent);
            continue;
        }

        const type = getTypeNames(value)[0];
        // tslint:disable-next-line: no-console
        switch(type) {
            case 'boolean':
                pp(`${key}: ${value ? 'true' : 'false'},`, indent);
                break;
            case 'string':
                pp(`${key}: "${(value as string).replace(/\n/g, "\\n")}",`, indent);
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
                pp(`"${value}",`, indent);
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
    console.log(" ".repeat(indent) + input);
}