'use strict';

const numDice = parseInt(prompt("Enter the number of dice: "), 10);
const targetSum = parseInt(prompt("Enter the sum of the dice: "), 10);

const numSimulations = 10000;

let successCount = 0;

for (let i = 0; i < numSimulations; i++) {
    let rollSum = 0;

    for (let j = 0; j < numDice; j++) {
        rollSum += Math.floor(Math.random() * 6) + 1;
    }

    if (rollSum === targetSum) {
        successCount++;
    }
}

const probability = (successCount / numSimulations) * 100;

document.getElementById('target1').innerHTML = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
