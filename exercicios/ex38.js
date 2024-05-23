const prompt = require('prompt-sync')();

let values = [];

for (let i = 0; i < 6; i++){
    const value = Number(prompt(`Digite o ${i + 1}º valor: `));
    values.push(value);
};

function sumValues () {
    let sum = 0;
    
    for (let i = 0; i < values.length; i++){
        sum += values[i];
    };

    return sum;
};

function multiplyValues () {
    let product = 1;

    for (let i = 0; i < values.length; i++){
        product *= values[i];
    };

    return product;
};

function mediaValues (sum) {
    return media = sum / values.length;
};

function sortValues () {
    const valuesOrdered = values.sort((a, b) => a - b);
    return valuesOrdered;
};

console.log('1- soma dos elementos;');
console.log('2- produto dos elementos;');
console.log('3- média dos elementos;');
console.log('4- ordene os elementos em ordem crescente;');
console.log('5- mostre o vetor.');
const A = Number(prompt('Digite o valor correspondente a operação que você quer executar (1 a 5): '));

if (A === 1) {
    const resp = sumValues();
    console.log(`A soma de todos os elemento é ${resp}.`);
} else if (A === 2) {
    const resp = multiplyValues();
    console.log(`O produto dos elementos é ${resp}.`);
} else if (A === 3) {
    const sum = sumValues();
    const resp = mediaValues(sum);
    console.log(`A media dos elementos é ${resp}.`);
} else if (A === 4) {
    const resp = sortValues();
    console.log(`Segue a lista na ordem crescente: ${resp}.`);
} else if (A === 5) {
    console.log(`Aqui está a lista digitada: ${values}.`);
} else {
    console.log('OPERAÇÃO INVÁLIDA!');
};