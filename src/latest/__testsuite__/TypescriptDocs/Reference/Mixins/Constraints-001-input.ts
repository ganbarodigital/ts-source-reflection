// A decorator function which replicates the mixin pattern:
const Pausable = (target: typeof Player) => {
    return class Pausable extends target {
        shouldFreeze = false;
    };
};

@Pausable
class Player {
    x = 0;
    y = 0;
}


// It the runtime aspect could be manually replicated via
// type composition or interface merging.
type FreezablePlayer = Player & { shouldFreeze: boolean };

const playerTwo = (new Player() as unknown) as FreezablePlayer;
// tslint:disable-next-line: no-unused-expression
playerTwo.shouldFreeze;