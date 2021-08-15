function create<Type>(c: { new (): Type }): Type {
    return new c();
}