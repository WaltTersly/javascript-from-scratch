'use strict';
//learning destructuring arrays



// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndx, mainIndx) {
    return [this.starterMenu[starterIndx], this.mainMenu[mainIndx]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//destructured array

const arr = [2, 2, 3, 3];

const [w, x, y, z] = arr;

console.log(w, x, y, z);

//switching using destructuring
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

// receiving two return values from a function
console.log(restaurant.order(2,0)); 

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

//default values helpin reading array of unknown size
const [p = 0, q = 0, r = 0] = [8,9];
console.log(p, q, r);


// objects destructuring
const {name, openingHours, categories } = restaurant;
console.log( name, openingHours, categories);
//useful while getting data from apis
const {
    name: resturantName,
    openingHours: hours,
    categories: tags,

} = restaurant;

console.log(resturantName, hours, tags);

//setting default values
const {
    menu = [], 
    starterMenu: starters = []

} = restaurant; 

console.log(menu, starters);

//switching or mutation of object variables
let a = 45;
let b = 77;

const obj = { a: 23, b: 49, c: 45};

({a, b} = obj);
console.log(a, b);

//nested objects destructuring
const {
    fri: {
        open: o,
        close: c,
    },
} = openingHours;
console.log(c,o);


//SPREAD OPERATOR

const arri = [7, 8, 9];

const newarr = [1, 2, ...arri]; //spread operator takes the individual items of an array.

console.log(newarr);

//using it to copy array
const mainMennu = [...restaurant.mainMenu];

//join two arrays to one

const menue = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menue);

// NEW WAY OF LOOPING THROGH ARRAYS (for -of)
for (const item of menue) {
  console.log(item);
} 
//getting element number
for (const item of menue.entries()) {
  console.log(item);
}

//looping through objects using object keys
for (const day of Object.keys(openingHours)) {
  console.log(day);
}