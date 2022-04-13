//Human age is Dog years conversion

//human age
let myAge = 28;

//first 2 human years
let earlyYears  = 2;
// first 2 human years in dog years
earlyYears *= 10.5;

//reducing early human years
let laterYears  = myAge - 2;
//to calculate the number of dog years accounted for by human later years
laterYears  *= 4; 

let myAgeInDogYears = earlyYears  + laterYears;
let myName  = 'shobhan'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`);
