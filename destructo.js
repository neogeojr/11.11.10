/* Task 1: Unveiling the Coordinates */
const coordinates = {x: 34, y: 42, z: 67};

let {x,y} = coordinates;
console.log(`x:${x} and y:${y}`);

/* Task 2: The Map of Secrets */
const locations = {
	first: "Cave of Wonders",
	second: "Lake of Mystery",
	third: "Mount of Ages",
	fourth: "Desert of Shadows"
};

let {first, second, ...remaining} = locations;
console.log(`first: ${first} \nsecond: ${second}\nremaining: `,remaining);

/* Task 3: The Mysterious Door */
const doorCode = {
	upper: "Alpha",
	lower: "Omega"
};

let {upper = "Epsilon", middle = remaining.third, lower = "Zeta"} = doorCode;
console.log(`The mysterious door sequence is: ${upper}, ${middle} then ${lower}.`);

/* Task 4: The Guardian's Riddle */
const riddle = {
	ancientWord: "Sphinx",
	modernWord: "Cat"
};

let {ancientWord:translation} = riddle;
console.log(`The translation of the riddle is ${translation}.`);

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];

let [firstElement, secondElement, ...rest] = elements;
console.log(`The first element is ${firstElement} and the second element is ${second}.`);

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];

let [stone1,,,,,stone6] = stones;
console.log(`The first stone is ${stone1} and the sixth stone is ${stone6}.`)

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];

// Better option use array.join(", ") to display the ...hidden values - Dynamic without being in an array.
let [visible, ...hidden] = shadows;
console.log(`The visible shadow is ${visible} and the hidden shadows are ${hidden[0]}, ${hidden[1]} and ${hidden[2]}.` );

/* Task 8: The Wise Function */
function revealPath({direction, distance}) {
	console.log(`The direction is travel is ${direction} with a distance of ${distance} units.`)
}
revealPath({direction:"NorthWest", distance: 6}) 

/* Task 9: The Scroll of Defaults */
function mixPotion ({ingredient1 = "Water", ingredient2 = "Fireflower"}) {
	console.log(`The potion mixes ${ingredient1} and ${ingredient2}.`);
}
mixPotion({ingredient1: "cobwebs"});
mixPotion({ingredient2: "ash"});
mixPotion({});

/* Task 10: The Array Spell */
function castSpell([ingredient1, ingredient2, ...others]) {
	console.log(`Casting a spell made by combining these two ingredients: ${ingredient1} and ${ingredient2}. \n
		Leaving out the others: `, others);
}
castSpell(['ash', 'cobwebs', 'snails', 'feather']);

/* Task 11: The Nested Secret */
const nestedSecret = {outer: {inner: "The Final Key"}};
// TODO: Behind the final door lies a nested artifact containing the ultimate clue. 
// Use nested destructuring to extract `The Final Key`. Print the unveiled secret.
//console.log(outer{inner});

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";

[stoneA, stoneB] = [stoneB, stoneA];
console.log(`Stone A is ${stoneA} and Stone B is ${stoneB}.`)