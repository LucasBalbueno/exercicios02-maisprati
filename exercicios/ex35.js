const prompt = require('prompt-sync')();

let pairComplete = [];
let pair = [];
let oddComplete = [];
let odd = [];

for (let i = 0; i < 30; i ++){
    const num = prompt(`Digite o ${i + 1}º valor de 30: `);

    if (num % 2 === 0){
        pair.push(num);
        pairComplete.push(num);

        if (pair.length === 5) {
            console.log('A lista com números PARES chegou a 5!');
            console.log(pair);
            pair = [];
        };
    } else {
        odd.push(num);
        oddComplete.push(num);

        if (odd.length === 5) {
            console.log('A lista com números IMPARES chegou a 5!');
            console.log(odd);
            odd = [];
        };
    };
};

console.log('============');
console.log(`Os 30 valores foram digitados!!`);
console.log(`Esse é o restante da sua lista de PARES: ${pair}.`);
console.log(`Esse é o restante da sua lista de IMPARES: ${odd}.`);

console.log('============');
console.log(`Aqui está a lista completa de PARES: ${pairComplete}.`);
console.log(`Aqui está a lista completa de IMPARES: ${oddComplete}.`);