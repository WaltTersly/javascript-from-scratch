const massMark = 95; //in kgs
const massJohn = 85; // in kgs
const heightMark = 1.88;
const heightJohn = 1.76;

//calculate bmi

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark, bmiJohn);

// create a boolean to check if mark has higher bmi
const markHigherBmi = bmiMark > bmiJohn;

console.log("does mark have higher bmi", markHigherBmi);

// decision making
if (markHigherBmi) {
    console.log(`Marks BMI (${bmiMark}) is higher than johns BMI (${bmiJohn}) !`);
    
} else {
    console.log(`Johns BMI (${bmiJohn}) is higher than Marks BMI (${bmiMark})`);

    
}

// teams challange and they are 2 and compete against each other 3 times

// const dolphinScore = (96 +108 + 89)/3;
// const koalasScore = (88 + 91 + 110)/3;

// const minimumScore = 100;

// console.log("here is the score for the Dolphins ", dolphinScore);
// console.log("here is the score for the Koalas ", koalasScore);

// if (dolphinScore > koalasScore) {
//     console.log("dolphins win the trophhy 🏆");

// }else if (koalasScore > dolphinScore) {
//     console.log("the koalas win the trophy 🏆");
// }else if (dolphinScore === koalasScore) {
//     console.log("both teams draw hence both wiin the trophy 🏆");
// }else{
//     console.log("There is no game played");
// }


// Bonua 1

// const dolphinScore = (97 +112 + 101)/3;
// const koalasScore = (109 + 95 + 123)/3;

// const minimumScore = 100;

// console.log("here is the score for the Dolphins ", dolphinScore);
// console.log("here is the score for the Koalas ", koalasScore);

// if (dolphinScore > koalasScore && dolphinScore >= minimumScore) {
//     console.log("dolphins win the trophhy 🏆");

// }else if (koalasScore > dolphinScore && koalasScore >= minimumScore) {
//     console.log("the koalas win the trophy 🏆");
// }else if (dolphinScore === koalasScore && dolphinScore >= minimumScore && koalasScore >= minimumScore) {
//     console.log("both teams draw hence both wiin the trophy 🏆");
// }else{
//     console.log("There is no game played");
// }


// Bonus 2

const dolphinScore = (97 +112 + 101)/3;
const koalasScore = (109 + 95 + 106)/3;

const minimumScore = 100;

console.log("here is the score for the Dolphins ", dolphinScore);
console.log("here is the score for the Koalas ", koalasScore);

if (dolphinScore > koalasScore && dolphinScore >= minimumScore) {
    console.log("dolphins win the trophhy 🏆");

}else if (koalasScore > dolphinScore && koalasScore >= minimumScore) {
    console.log("the koalas win the trophy 🏆");
}else if (dolphinScore === koalasScore && dolphinScore >= minimumScore && koalasScore >= minimumScore) {
    console.log("both teams draw hence both wiin the trophy 🏆");
}else{
    console.log("There is no  winner and draw");


}

//conditional operator.
const bill = 430;

const tip = bill <= 300 && bill >= 50 ? bill *0.15 : bill *0.2;

console.log(`the bill was ${bill} and the tip was ${tip} and total value is ${bill + tip}`);