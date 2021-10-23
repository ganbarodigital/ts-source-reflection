/**
 * this is a test of docblocks for classes
 */
export class Classes001
{
    /**
     * this is the docblock for prop1
     */
    public prop1;

    /**
     * this is the docblock for prop2
     */
    protected prop2;

    /**
     * this is the docblock for prop3
     */
    private prop3;

    /**
     * this is the docblock for prop4
     */
    #prop4 = 0;

    /**
     * this is the docblock for prop5
     */
    prop5;

    /**
     * this is the docblock for prop6
     */
    prop6: string;

    /**
     * this is the docblock for the constructor
     *
     * @param param1 our first parameter
     * @param param2 our second parameter
     */
    public constructor(param1: string, param2: number) {
        this.prop5 = param1;
        this.#prop4 = param2;
        param2 = this.#prop4;
    }

    /**
     * this is the docblock for method01
     */
    public method01() {
        // do nothing
    }

    /**
     * this is the docblock for method02
     */
    protected method02() {
        // do nothing
    }

    /**
     * this is the docblock for method03
     */
    private method03() {
        // do nothing
    }

    /**
     * this is the docblock for method04
     */
    method04() {
        // do nothing
    }

    /**
     * this is the docblock for fakeProp5's getter
     */
    public get fakeProp5() {
        return this.prop5;
    }

    /**
     * this is the docblock for fakeProp1's setter
     */
    public set fakeProp5(input: string) {
        this.prop5 = input;
    }
}