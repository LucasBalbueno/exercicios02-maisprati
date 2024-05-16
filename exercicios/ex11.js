const prompt = require('prompt-sync')();

const firstTerm = Number(prompt('Digite o primeiro termo da sua PA: '));
const reason = Number(prompt('Digite a razão da sua PA: '));

let arrPA = [firstTerm];
let sum = firstTerm;

for (let i = 0; i < 9; i++) {
    const newNum = arrPA[i] + reason;
    arrPA.push(newNum);
    sum += newNum;
}

console.log(`A lista com os 10 primeiros valores da sua Progessão Aritmética (PA): ${arrPA}`);
console.log(`A soma de todos esses valores totalizou ${sum}`);