/// <reference path="MultiFileNamespaces-001-Validation.ts" />
/// <reference path="MultiFileNamespaces-001-LettersOnlyValidator.ts" />
/// <reference path="MultiFileNamespaces-001-ZipCodeValidator.ts" />

// Some samples to try
let strings = [ "Hello", "98052", "101" ];
// Validators to use
let validators: { [ s: string ]: Validation.StringValidator } = {};
validators[ "ZIP code" ] = new Validation.ZipCodeValidator();
validators[ "Letters only" ] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[ name ].isAcceptable(s);
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}