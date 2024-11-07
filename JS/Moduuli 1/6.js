'use strict';

const confirmation = confirm('Should I calculate the square root?');

if (confirmation) {
    const number = prompt('Give me a number: ');
    const sqrtNum = Math.sqrt(number);
    document.getElementById('target1').innerHTML = 'Squared number: ' + sqrtNum;
}