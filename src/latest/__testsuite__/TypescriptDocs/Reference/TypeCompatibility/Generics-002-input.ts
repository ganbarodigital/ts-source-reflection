let identity = function <T>(x: T): T {
    // ...
};
let reverse = function <U>(y: U): U {
    // ...
};
identity = reverse; // OK, because (x: any) => any matches (y: any) => any