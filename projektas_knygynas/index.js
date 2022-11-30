import fruitsArray from "./foods.js";

import { choice, remove } from "./helpers.js";

let randomFruit = choice(fruitsArray)
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log(`... another`);
console.log(fruitsArray);
remove(fruitsArray, randomFruit);
console.log(fruitsArray);

if(fruitsArray.includes(randomFruit)){
    console.log(`I have but I don't want give you another one.`)
}else{
    console.log(`We have ${fruitsArray.length} fruits left.`)
}

