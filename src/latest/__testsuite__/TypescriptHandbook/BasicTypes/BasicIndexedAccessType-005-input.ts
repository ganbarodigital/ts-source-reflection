const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];

type Age = typeof MyArray[number]["age"];

// Or
type Age2 = Person["age"];