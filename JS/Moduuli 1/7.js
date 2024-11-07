'use strict';

const numRolls = parseInt(prompt("How many dice rolls do you want to perform?"), 10);

let sum = 0;

for (let i = 0; i < numRolls; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;

sum += roll;
}
document.getElementById('target1').innerHTML = 'Result: ' + sum;