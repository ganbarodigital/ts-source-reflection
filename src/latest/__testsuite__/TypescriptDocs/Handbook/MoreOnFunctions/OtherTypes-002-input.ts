function safeParse(s: string): unknown {
    return JSON.parse(s);
}

// Need to be careful with 'obj'!
const obj = safeParse("someRandomString");