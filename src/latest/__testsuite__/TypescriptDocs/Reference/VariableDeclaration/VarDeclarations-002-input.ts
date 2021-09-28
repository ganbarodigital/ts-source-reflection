function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
g(); // returns '11'