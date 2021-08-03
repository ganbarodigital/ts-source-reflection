// this test proves that we support constructors and call signatures
// in interfaces

interface CallOrConstruct {
    new (s: string): Date;
    (n?: number): number;
}