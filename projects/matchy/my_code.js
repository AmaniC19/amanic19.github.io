//Step 1: Object Creation

//1
var animal = {};
//2
animal.species = 'Duck';
//3
animal['name'] = 'Swanna';
//4
animal.noises = [];
//5
console.log(animal);


// Step 2: Array Creation

//1
var noises = [];
//2
noises[0] = "Quack";
//3
noises.push('Squeak');
//4
noises.unshift('Yonk');
//5
noises[noises.length] = 'Flap';

console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);

//Step 3: Combining Step 1 and Step 2 

animal['noises'] = noises;
animal.noises.push('Bonk');
console.log(animal);

//Step 6: Collection of Animals

//1
var animals = [];
//2
animals.push(animal);
//3
console.log(animals);
//4
var duck = {
    species: 'Duck',
    name: 'Jerome',
    noises: ['Quack', 'Honk', 'Sneeze', 'Woosh']
};
//5
animals.push(duck);
//6
var mongoose = {
    species: 'Mongoose',
    name: 'Golduck',
    noises: ['Grrrrr', 'Skrrrr']
};

var penguin = {
    species: 'Penguin',
    name: 'Rico',
    noises: ['Roar', 'Meow', 'Squeak']
};

animals.push(mongoose);
animals.push(penguin);
console.log(animals);
console.log(animals.length);

// Step 7: Making Friends

var friends = [];
//Chose this because its similar to where you can have more than one friend.

function animalsRandomizer(array) {
    var min = 0;
   var max = Math.floor(array.length);
  var randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return array[randomNumber];
}

var randomAnimal = animalsRandomizer(animals);

friends.push(randomAnimal.name);

console.log(animalsRandomizer(animals));
console.log(animalsRandomizer(animals));
console.log(animalsRandomizer(animals));
console.log(animalsRandomizer(animals));
console.log(animalsRandomizer(animals));

animals[0].friends = friends;
console.log(animals);

//Part 2: Functions
//Step 1: Search
function search(name) {
    for(var i = 0; i < animals.length; i++) {
        var animal = animals[i];
        if(animal.name === name) {
            return animal;
        }
    }
    return null;
} 

console.log(search('Jerome'));

//Step 2: Edit
function edit(animalName, newAnimal) {
    for(var i = 0; i < animals.length; i++) {
        var animal = animals[i];
        if(animal.name === animalName) {
            animals[i] = newAnimal;
            return;
        }
    }
}

console.log(animals);


//Step 3: Remove

function remove(name) {
    for(var i = 0; i < animals.length; i++) {
        var animal = animals[i];
        if(animal.name === name ) {
        return animals.splice(i, 1)[0];
        }
    }
}

//console.log(remove(animals, 'Jerome'));

/*
Takes 1 parameter, an object
Checks that the object has a name property with a length > 0
Checks that the object has a species property with a length > 0
Has a unique name, meaning no other animals have that name
Adds this new object to the animals array, only if all the other conditions pass.
*/
// animals = [{name: 'sue'}, {name: 'bob'}]
// newAnimal = {name: 'sue'}
function create(newCreature) {
    // if no name or name is 0 length, return
    if(typeof newCreature.name !== 'string' || !newCreature.name.length) return;
    // if no species or species is 0 length, return;
    if(typeof newCreature.species !== 'string' || !newCreature.species.length) return;
    // if found, you have an object, if not, you have null
    if(search(newCreature.name)) return;
    // newCreature has passed all validation rules, so add it to the animals array //
    animals.push(newCreature);
}

var dumb = {
    name: 'Psyduck',
    species: 'duck'
};

create(dumb);
console.log(animals);
