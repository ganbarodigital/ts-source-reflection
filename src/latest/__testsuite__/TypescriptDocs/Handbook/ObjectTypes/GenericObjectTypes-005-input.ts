interface Box<Type> {
    contents: Type;
}

interface Apple {
    // ....
}

type AppleBox = Box<Apple>;