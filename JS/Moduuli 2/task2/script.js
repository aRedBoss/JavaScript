'use strict';

const userInput = parseInt(prompt('The number of participants:'));

const names = []; 

for (let i = 0; i < userInput; i++) {
    const name = prompt('Give me name:');
    names.push(name);
}

const sortedNames = names.sort();
const listContainer = document.getElementById('target');
let listHTML = '<ol>';

for (const name of sortedNames) {
    listHTML += `<li>${name}</li>`;
}

listHTML += '</ol>';
listContainer.innerHTML = listHTML;
