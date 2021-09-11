function base<T>() {
    class Base {
        static prop: T;
    }
    return Base;
}

function derived<T>() {
    class Derived extends base<T>() {
        static anotherProp: T;
    }
    return Derived;
}

class Spec extends derived<string>() { }

Spec.prop; // string
Spec.anotherProp; // string