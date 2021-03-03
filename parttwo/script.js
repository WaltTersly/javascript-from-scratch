// activating strict mode
'use strict';

//functions

function logger() {
  console.log(' my name is Walter Tersly'); 
    
}

//calling running invoke function
logger();

function fruitprocessor(apples, oranges, pineapples) {
    console.log(apples, oranges, pineapples);
    const juice = `juice with ${apples} apples , ${oranges} oranges and ${pineapples} pinaples`;

    return juice;
}

const cocktail = fruitprocessor(5, 2, 0);
console.log(cocktail);


// function declaration and expressions

function calcAge(birthYearh) {
    return 2017 - birthYearh;    
}

const age1 = calcAge(1993);
console.log(age1);
// expressons
const calcAge2 = function (birthYearh){
    return 2027 - birthYearh;
}
const age2 = calcAge2(1993);
console.log(age2, age1);

// arrow functions
const calcAge3 = birthYearh => 2027 - birthYearh;
const age3 = calcAge3(1987);
console.log(age3);

const yearsUntilRetire = (birthYearh, firstname) => {
    const age = 2027 - birthYearh;
    const retire = 70 - age;
    //return retire;
    return `${firstname} retires in ${retire} years`
}

console.log(yearsUntilRetire(1997, 'walter'));

//functions calling other functions


function cutFruit(fruit) {
    return fruit * 4;
}

function fruitsprocessor(apples, oranges, pineapples) {
    const applePieces = cutFruit(apples);
    const orangepieces = cutFruit(oranges);
    const pineapplePieces = cutFruit(pineapples);
    const fruitSalad = `Salad  with ${applePieces} applePieces , ${orangepieces} orange Pieces and ${pineapplePieces} pinaple pieces`;

    return fruitSalad;

}

console.log(fruitsprocessor(7, 5, 8));


// ARRAYS

const friends = ['chehe', 'treve', 'ereve'];

const years = new Array(1767, 1678, 1737, 1750);

console.log( friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(years[2]);

//mutating an arrray

friends[2] = 'trefe';
console.log(friends );

// adding elements
friends.push('kay');
console.log(friends);

friends.unshift('pate');
console.log(friends);

//remove elements
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

//find index of an elements

console.log(friends.indexOf('treve'));

console.log(friends.includes('tete'));


// objects
const wali = {
    first_name: 'Walt',
    lastname: 'chege',
    birthYearh: 1996,
    job: 'software developer',
    friend: [ 'waltr', 'eter', 'tegyds'],

    // calcMiaka: function (birthYearh) {
    //     return 2037 - birthYearh;
    // }

    // calcMiaka: function () {
    //     return 2037 - this.birthYearh;
    // },

    calcMiaka: function () {
        this.age = 2037 - this.birthYearh;
        return this.age;
    },

    hasDriversLicence: true,
};

// retrieve data from objects
console.log(wali);

// using the dot notation
console.log(wali.job);

// using the swuare brackets
console.log(wali['lastname']);

// using namekey

const namekey = 'name';
console.log(wali['first_' +namekey]);

// while reciving input
const intersts = prompt('what are you interestd in about walt choose between : first_name,lastname, age and job ');

if (wali[intersts]) {
   console.log(wali[intersts]);
    
} else {
    console.log('wrong choice choose from first_name lastname age job and friend');
    
}

// adding properties to object
wali.location = 'Portugal';
wali['email'] = 'walt@SpeechGrammarList.com';
console.log(wali); 

// function expression property
console.log(wali.calcMiaka(1996));
console.log(wali['calcMiaka'](1996));
console.log(wali.calcMiaka());
console.log(wali.age);

//LOOPS

// FOR LOOP

for (let rep = 1; rep <= 10; rep++) {
    console.log(`strong 🏋️  ${rep}`);
    
}

const waliArray = [
    'jonas',
    'Tersly',
    2021 - 1995,
    'teacher',
    ['micheal', 'trece', 'presht']
];

const types = [];

//looping through arrays
for (let i = 0; i < waliArray.length; i++) {
    const element = waliArray[i];
    console.log(element, typeof element);

    //filling types array

    types[i] = typeof waliArray[i];
    types.push(typeof waliArray[i]);
    
}

console.log(types);

// looping backwards

for (let i = waliArray.length - 1 ; i >= 0; i--){
    const element = waliArray[i];

    console.log(i, element);
   
}

// loop inside a loop

for (let sett = 1; sett < 4; sett++) {
    console.log(`starting exrecise ${sett}`);

    for (let rep = 1; rep < 8; rep++) {
        console.log(`lift wight rep ${rep}`);
        
    }
    
}

//while loop
let rep = 1;
while (rep <= 15) {
    console.log(`cheheheh ${rep}`);
    rep ++;
}

// dice example

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
    console.log(`you rolled dice ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    
    if (dice === 6) {
        console.log(`the loop is about to end ${dice}`);
    }
}