//Early adults run at 9:30 am.
//Late adults run at 11:00 am.
//Youth registrants run at 12:30 pm (regardless of registration)

//Early adults receive a race number at or above 1000.
//All others receive a number below 1000.

let raceNumber = Math.floor(Math.random()*1000);

//the boolean value of below variable can be changed according to runner registration conditions
let registeredEarly = true;

//the value of below variable can be changed according to different runner age
let runnerAge = 22;

//checks if the runner is adult and assigns race number
if (runnerAge > 18 && registeredEarly === true) {
    raceNumber += 1000;
}

//assigning race number and time
if(runnerAge > 18 && registeredEarly === true) {
    console.log(`Race will begin at 09:30 am and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && registeredEarly === false) {
    console.log(`Late registered adults run at 11:00 am and your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`Youth registrants run at 12:30 pm and your race number is ${raceNumber}.`);
} else {
    console.log('Please approach the registration desk.');
}