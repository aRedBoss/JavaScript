'use strict';

const number = Math.floor(Math.random() * 4);

if (number === 0) {
    document.getElementById('target1').innerHTML = 'Your class is Gryffindor'
}
if (number === 1) {
    document.getElementById('target1').innerHTML = 'Your class is Slytherin'
}
if (number === 2) {
    document.getElementById('target1').innerHTML = 'Your class is Hufflepuff'
}
if (number === 3) {
    document.getElementById('target1').innerHTML = 'Your class is Ravenclaw'
}

