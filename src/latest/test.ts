import { Filepath } from "@safelytyped/filepath";
import { processSourceFile } from "./Processors/processSourceFile";
import { getTestCompiler } from "./__testsuite__/getTestCompiler";

const inputFile = new Filepath(
    process.cwd() + "/../../safelytyped/ts-core-types/lib/v1/Archetypes/Values/ValueObject/ValueObject.d.ts"
);
// const inputFile = process.cwd() + "/../../safelytyped/ts-core-types/src/v1/Errors/ArrayCannotBeEmpty/ArrayCannotBeEmptyError.ts";
const compiler = getTestCompiler(inputFile);
const sourceFile = compiler.getAstForFile(inputFile);

const refFile = processSourceFile({compiler, sourceFile});
// tslint:disable-next-line: no-console
console.log(JSON.stringify(refFile, null, 4));