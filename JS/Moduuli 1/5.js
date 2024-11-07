'use strict';

const year = prompt('Give me a year: ');

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    document.getElementById('target1').innerHTML = 'This is a leap year';
}
else {
    document.getElementById('target1').innerHTML = 'This is not a leap year';
}