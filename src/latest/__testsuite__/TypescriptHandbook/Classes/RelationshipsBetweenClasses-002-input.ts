class Person {
    name: string;
    age: number;
}

class Employee {
    name: string;
    age: number;
    salary: number;
}

// OK
const p: Person = new Employee();