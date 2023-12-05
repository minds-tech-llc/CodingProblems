// All of the animals are having a feast! Each animal is bringing one dish. 
// There is just one rule: the dish must start and end with the same letters as the animal's name. 
// For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate 
// whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
// beast and dish may contain hyphens and spaces, 
// but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    // get beast first and last letter and save to variable
        // startsWith and endsWith methods?
        let firstLetterMatch = beast.startsWith(dish[0]);

    // get dish first and last letter and save to variable
        let lastLetterMatch = beast.endsWith(dish[dish.length - 1]);

        return firstLetterMatch && lastLetterMatch;

    // check and see if first letters match
        // match doesnt make sense, probably just set first index equals to
        // console.log(dish[0].equalsto(beast[0]))
    // check and see if last letters match and return accordingly
        // try to set last index equals to
        // console.log(lastIndexof(dish).equalsto.lastIndexof(beast))

}

console.log(feast("great blue heron", "garlic naan")); 
console.log(feast("chickadee", "chocolate cake")); // Should return true