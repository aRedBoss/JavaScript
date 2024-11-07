'use strict';

const num1 = parseFloat(prompt('Give me num 1: '));
const num2 = parseFloat(prompt('Give me num 2: '));
const num3 = parseFloat(prompt('Give me num 3: '));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const avrage = sum / 3;

document.getElementById('target1').innerHTML = 'Sum: ' + sum ; 
document.getElementById('target2').innerHTML = 'Product: ' + product;
document.getElementById('target3').innerHTML = 'Avrage: ' + avrage.toFixed(3);