// this test proves that we support named types when using
// deconstructed object parameters

type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  // ...
}