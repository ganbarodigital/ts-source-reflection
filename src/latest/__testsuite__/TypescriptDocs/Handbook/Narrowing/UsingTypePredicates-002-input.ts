type Pet = {
    name: string;
}

interface Fish extends Pet { swim: () => void };
interface Bird extends Pet { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getSmallPet(): Fish | Bird {
    if (Math.random() >= 0.5) {
        return <Fish>{
            name: "Fishy",
            swim: () => { return },
        }
    }

    return <Bird>{
        name: "Birdy",
        fly: () => { return },
    }
}

const zoo: (Fish | Bird)[] = [ getSmallPet(), getSmallPet(), getSmallPet() ];

const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
    if (pet.name === "sharkey") return false;
    return isFish(pet);
});