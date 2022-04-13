//temperature measured in kelvin
const kelvin  = 293;

//temperature conversion from kelvin to celsius
let celsius = kelvin - 273; 
celsius = Math.floor(celsius);

//temperaure conversion from celsius to fahrenheit
let fahrenheit = celsius*(9/5)+32; 
fahrenheit  = Math.floor(fahrenheit);

console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degeress Fahrenheit.`);

//temperature conversion from celsius to newton
let newton  = celsius*(33/100); 
newton  = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);