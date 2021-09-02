class A {
    private x = 10;

    public sameAs(other: A) {
        // No error
        return other.x === this.x;
    }
}