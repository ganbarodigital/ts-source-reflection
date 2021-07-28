import * as fs from 'fs';
import * as ts from 'typescript';
import { processSourceFile } from "./Processors/processSourceFile";

const inputFile = process.cwd() + "/../../safelytyped/ts-core-types/lib/v1/Archetypes/Values/ValueObject/ValueObject.d.ts";
// const inputFile = process.cwd() + "/../../safelytyped/ts-core-types/src/v1/Errors/ArrayCannotBeEmpty/ArrayCannotBeEmptyError.ts";
const sourceCode = fs.readFileSync(inputFile, 'utf-8');
const sourceFile = ts.createSourceFile(inputFile, sourceCode, ts.ScriptTarget.Latest, true);

const refFile = processSourceFile(sourceFile);
// tslint:disable-next-line: no-console
console.log(JSON.stringify(refFile, null, 4));