declare function require(moduleName: string): any;

import { ZipCodeValidator as Zip } from "./ExportingDeclaration-001-input";

if (needZipValidation) {
    let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
    let validator = new ZipCodeValidator();
    if (validator.isAcceptable("...")) {
      /* ... */
    }
}