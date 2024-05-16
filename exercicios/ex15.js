const prompt = require('prompt-sync')();

let arrNumbers = [];
let numbersPairs = [];
let indexPairs = [];

for (let i = 0; i < 10; i++) {
    const num = prompt(`Digite o ${i + 1}º número decimal: `);
    arrNumbers.push(num);

    if (arrNumbers[i] % 2 === 0) {
        numbersPairs.push(arrNumbers[i]);
        indexPairs.push(arrNumbers.findIndex(num => num === arrNumbers[i]));
    }
}
console.log(`Aqui está a sua lista original com todos os valores digitados: ${arrNumbers}`);
console.log(`Aqui está a sua lista com apenas os números pares digitados: ${numbersPairs}`);
console.log(`Aqui está a posição em que eles se encontram na lista original, respectivamente: ${indexPairs}`);