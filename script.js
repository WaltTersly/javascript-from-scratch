let ps = 'cool'
 console.log(30 + 70 - 20);

 //values and variables

 let firstName = "tersly";

 console.log(firstName);

 //data types
  //let ages = 23;

  //console.log(typeof 23)

  //declaring variables
   //let keyword for variables that can change in future
   //let age = 30;
   //age = 31;
// const does not allow a variable that cant change
    const job = 'teacher';
    const birthYearJonas = 1996;
    const birthYearJane =  1978
// basic operators
    const currentYear = 2037
    const ageJonas = currentYear - birthYearJonas;
    const ageJane = currentYear - birthYearJane;
    console.log(ageJonas);

    console.log(ageJonas * 2, ageJonas /10, 2**3); //2**3 is 2 to power 3

    //for concatinatioln purpose
    const first_name = 'walter';
    const surname = 'chege';
    console.log(first_name+''+surname);

    //for comparison purpose
    console.log(ageJane > ageJonas);
    console.log(ageJonas >= ageJane);

    //using template literals
    const newJonas = `I'm ${first_name}, a ${currentYear - birthYearJonas} year old ${job}`;
    console.log(newJonas);

    //writing multiple line string
    console.log(`hello
    i am testing
    this multiline.`)

    // decision making
    const age = 14;
    const isOldEnough = age >= 18;
    
    if (isOldEnough){
        console.log('sarah can start driving lessons 🚗');
    } else{
        const yearsLeft = 18 - age;

        console.log(`sarah is too young wait another ${yearsLeft} years :)`);
    }

    const birthYear = 1999;

    let century;
    if (birthYear <= 2000) {
        century = 20;
    } else {
        century = 21;
    }

    console.log(century, 'century');

    //type conversion and coersion
    const inputYear = '1999';
    console.log(Number(inputYear)); //tpe conversion
    console.log(Number(inputYear) + 18);
    console.log(inputYear + 18); // not converted
    console.log(Number(first_name)); // shows NAn(not a number)

    // ttype coercion
    console.log('i am ' + 23 + ' years old' );
    console.log('23' - '13' + 3);
    console.log('23' > '28');

    // truthy and falsy
    // 5 falsy values 0,'', undefined, null, NaN
    console.log(Boolean(8));
    console.log(Boolean(undefined));
    console.log(Boolean('jonasd'));
    console.log(Boolean({}));
    console.log(Boolean(''));

    // equality operators
    const miaka = '18';
    if (miaka === 18) { // doesnot do type coercion amd is strict
        console.log( 'wewe ni mtu mzima');
        
    }
    if (miaka == 18) { // does type coercion but is not strict
        console.log('wewe ni mcima');
        
    }

    const favourite = prompt("whats your favourite number?");
    console.log(favourite);

    if (Number(favourite) === 23 ) {
        console.log('cool 23 is great');
    } else if (Number(favourite) === 20){
        console.log('well 20 is also a cool number');
    }else{
        console.log('ooops pole nani');
    }


    // Boolean logic (and , or , not )
    
    const hasDriversLicence = true;//A
    const hasGoodVision = false; // B

    console.log(hasDriversLicence && hasGoodVision);
    console.log(hasDriversLicence || hasGoodVision);
    console.log(!hasDriversLicence);

    if (hasDriversLicence && hasGoodVision) {
        console.log('walter can drive');
    }else{
        console.log('walter shouldnt drive');
    }

    const isTired = true; // c
    console.log(hasDriversLicence && !hasGoodVision && isTired);


    // switch statement
    
    const day = 'Thursday';

    switch (day) {
        case 'Monday':

            console.log("plan course outline");
            console.log("go to meetup");
            
            break;

        case 'Tuesday':

            console.log("plan theory videos");
            
                
            break;

        case 'Wednesday':
        case 'Thursday':

            console.log("write code example");   
            break;  
            
        case 'Friday':

            console.log("record videos");
            console.log("go to meetup");
                
            break;
        case 'Sartuday':
        case 'Sunday':
    
            console.log("write holiday");   
            break; 

    
    
        default:
            console.log("not a day");
            break;
    }

    // conditional operator

    const agei = 14;
    agei >=18 ? console.log(' i will drink 🍺 ') :console.log('i will drink 🚰');

    const drink = agei >= 18 ? 'wine 🍷' : 'water 🚰';
    console.log(drink);

    let drink2;
    if (agei >= 18) {
        drink2 = 'wine 🍷';
    }else{
        drink2 = 'water 🚰';
    }
    console.log(drink2);

    console.log(`i like to drink ${agei >= 18 ? 'wine 🍷' : 'water 🚰'}`);

     
