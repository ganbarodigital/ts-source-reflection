class Base {
    static getGreeting() {
        return "Hello world";
    }
}
class Derived extends Base {
    myGreeting = Derived.getGreeting();
}