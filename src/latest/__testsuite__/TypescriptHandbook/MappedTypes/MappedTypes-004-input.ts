type Concrete<Type> = {
    [ Property in keyof Type ]-?: Type[ Property ];
};

type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};

type User = Concrete<MaybeUser>;