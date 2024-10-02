

//Create Animal Function
/* Write a function which generates an animal object. 
The function should accepts 3 arguments: 
- spicies: the species of animal ('cat', 'dog')
- verb: a string used to name a function ('barl', 'bleet')
- noise: a string to be printed when above function is called ('woof', 'baaa') */

function createAnimal(species, verb, noise){
    return {
        species,[verb](){
            return noise;
        }
    }
}

//Create a dog object
const d = createAnimal("dog", "bark", "Woooof!")

//Create a sheep object
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")

//Example Usage 
console.log(d.species);
console.log(d.bark());

console.log(s.species);
console.log(s.bleet());



