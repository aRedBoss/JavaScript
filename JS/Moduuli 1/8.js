'use strict';

const startYear = parseInt(prompt('Give first year: '));
const endYear = parseInt(prompt('Give second year: '));

let leapYearList = '<ul>';

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYearList += `<li>${year}</li>`;
    }
}
leapYearList += '</ul>';

document.getElementById('target').innerHTML = leapYearList;