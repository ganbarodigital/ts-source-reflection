import { Filepath } from "@safelytyped/filepath";
import { processSourceFile } from "../Processors/processSourceFile";
import { getTestCompiler } from "../__testsuite__/getTestCompiler";

const inputFile = new Filepath(
    process.argv[2],
);
const compiler = getTestCompiler(inputFile);
const sourceFile = compiler.getAstForFile(inputFile);

const refFile = processSourceFile({compiler, sourceFile});
// tslint:disable-next-line: no-console
console.log(JSON.stringify(refFile, null, 4));