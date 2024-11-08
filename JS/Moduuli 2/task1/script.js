const numbers = [];

for (let i = 0; i < 5; i++) {
    const userInput = parseInt(prompt('Give me a number: '));
    numbers.push(userInput)
}
for (let num = 4; num > -1; num--) {
    console.log(numbers[num])
}
