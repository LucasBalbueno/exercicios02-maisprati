const prompt = require('prompt-sync')();

let A = [];

for (let i = 0; i < 100; i++){
     const value = Number(prompt(`Digite o ${i + 1}º valor: `));
     A.push(value);
};

const B = A.filter((num) => num > 0);

console.log(`A seguir o vetor digitado: ${A}`);
console.log(`A seguir o vetor compactado: ${B}`);