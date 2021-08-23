type OnlyBoolsAndHorses = {
    [ key: string ]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false,
};