interface Pet {
    name: string;
}
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet(pet: Pet) {
    console.log("Hello, " + pet.name);
}
greet(dog); // OK