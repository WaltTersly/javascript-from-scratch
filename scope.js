'use strict';

// scoping

function calcAge(birthYear) {
    const age = 2021 - birthYear;

    function PrintAge() {
        const output = `your age is ${age} and born in ${birthYear}`;

        console.log(output);
    }

    PrintAge();
    return age;
}

const firstname = 'walter';
calcAge(1995);