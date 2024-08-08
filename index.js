// Console log a welcome message with instructions to mad libs

console.log("Welcome, today you'll be playing Mad Libs. To play enter a word based on what I ask for and I'll make a story with it.")

// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words

let adjective = prompt("Give me an adjective")
let pluralNoun = prompt("Give me a plural noun")
let verb = prompt("Give me an verb in present tense")
let adjective2 = prompt("Give me another adjective")



// Create an array that stores the values the user entered

let array = []
array.push(adjective)
array.push(pluralNoun)
array.push(verb)
array.push(adjective2)

// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive

console.log("In a small " + array[0] + " school in the Bronx, there was a problem with too many " + array[1]+ ". These " + array[1] + " loved to " + array[2] + " which caused Mr. P so many headaches. However, no one wanted to remove them because they were too " + array[3] + " so they stayed there forever."
)






