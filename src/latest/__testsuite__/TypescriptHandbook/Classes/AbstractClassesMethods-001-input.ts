abstract class Base {
    abstract getName(): string;

    printName() {
        console.log("Hello, " + this.getName());
    }
}