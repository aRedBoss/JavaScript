'use strict';

const num = parseInt(prompt('Give me a number: '));

if (num <= 1) {
    document.getElementById('target1').innerHTML = 'Not a prime number';
} else if (num === 2) {
    document.getElementById('target1').innerHTML = 'Prime number';
} else if (num % 2 === 0) {
    document.getElementById('target1').innerHTML = 'Not a prime number';
} else {
    let isPrime = true;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById('target1').innerHTML = isPrime ? 'Prime number' : 'Not a prime number';
}

