let o = {
    a: "foo",
    b: 12,
    c: "bar",
};

let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;