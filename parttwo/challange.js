//  functions concept challange
'use strict';
// function to claculate averege
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

// store the average for both teams
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas * 2) {
        return `The dolphins win (${avgDolphins} to ${avgKoalas})`;
        
    } else if (avgKoalas >= avgDolphins * 2) {
        return `THE koalas win (${avgKoalas} to ${avgDolphins})`;
        
    } else {
        return `No winner`;
    }
        

}   
 
console.log(checkWinner(avgDolphins, avgKoalas));
// test case 2
 avgDolphins = calcAverage(85, 54, 41);
 avgKoalas = calcAverage(23, 34, 27);

 console.log(avgDolphins, avgKoalas);
 console.log(checkWinner(avgDolphins, avgKoalas));



 /// Array challange

 function calcTip(bill) {
    return bill <= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;     
 }

 const bills = [125, 555, 44];
 const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

 console.log(`bills  are ${bills}, and tips are tips ${tips}`);
 const tots = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
 console.log(` the total bill is bills + tips  : ${tots}`);


 // properties challange

 const Mark = {
    fullname: 'Mark Watlers',
    mass : 78,
    height: 1.69,

    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
 }

 const John = {
    fullname: 'John Anne',
    mass : 92,
    height: 1.95,
    
    calcBmi: function(){
        this.bmi = this.mass / (this.height) **2;
        return this.bmi;
    }

 }

 Mark.calcBmi();
 John.calcBmi();
 
 console.log(Mark.bmi);
 console.log(John.bmi);

 if ( Mark.bmi > John.bmi) {

     console.log(`${Mark.fullname}'s BMI ${Mark.bmi} is higher than ${John.fullname}'s BMI ${John.bmi}`);


 }else if (John.bmi > Mark.bmi) {
     console.log(`${John.fullname}'s BMI ${John.bmi} is higher than ${Mark.fullname}'s BMI (${Mark.bmi})`);
 }

 // ARRAYS CHALLENGE

 const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

 const tipss = [];

 const totals = [];

 for (let i = 0; i < billss.length; i++) {
     const element = calcTip(billss[i]);
     tipss.push(element);
     totals.push(element + billss[i]);

     
 }

 console.log(`tips are ${tipss}`);
 console.log(`Totals are ${totals}`);

 const calcAvrage = function(arr){
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
         sum = sum + arr[i];
         
     }

     return sum / arr.length;
 }


 console.log(calcAvrage([1,7,6,8] ));
 console.log(calcAvrage(totals));
 console.log(calcAvrage(tipss));

 
// reverse whatever challenge
 
const whatever = prompt('Enter either a number, string or an array');

const  reverseWhatever = function(something){

    // if (typeof something !== "string" || typeof something !== "number" || !Array.isArray(something)) {
    //     return `hehe`;
        
    // }BUG

    if (typeof something === "string") {
        const revs = something.split('').reverse().join('');
        return revs;

        
    }

    if (typeof something === "number") {
        const numrevs = parseInt(String(something).split('').reverse().join(''));
        return numrevs;
    }

    if (Array.isArray(something)) {

        const arrrevs = somthing.reverse();

        return arrrevs;
        
    }

}

console.log(reverseWhatever(whatever));

//smart thermometer

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatures1 = [44, 55, 69, -90, 87];


const calcAmplitude = function(t1,t2){
    // t2.push(Number(prompt('enter array of values'))); TODO
    const temps = t1.concat(t2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {

        const curtemp = temps[i];

        if (typeof curtemp !== 'number') {
            continue;
        }
        if (curtemp > max) {
            max = curtemp;
        }
        if (curtemp < min) {
            min = curtemp;
        } 
        
    }

    console.log(`the maximum temp is ${max} and ${min} is the minimun temperature`);

    const ampl = max - min ;

    return `the amplitude is ${ampl} `;
}

const amplii = calcAmplitude(temperatures, temperatures1);

console.log(amplii);

