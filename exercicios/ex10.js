const prompt = require('prompt-sync')();

let nextNum = 'S';
let sum = 0;
let list = [];
let cont = 0;
let contPairs = 0;

do {
    let num = Number(prompt('Digite um número aleatório: '));
    nextNum = prompt('Você quer digitar outro número? Responda com "S" ou "N": ').toUpperCase();

    sum += num;

    list.push(num);
    const listOrdered = list.sort((a, b) => a - b);

    cont++;
    const media = sum / cont;

    if (num % 2 === 0) {
        contPairs++;
    };

    if (nextNum === 'N') {
        console.log('===============')
        console.log(`A soma total de todos os números digitados é ${sum.toFixed(2)}`);
        console.log(`O número de menor valor entre todos os números digitados é o ${listOrdered[0]}.`);
        console.log(`A média de todos os valores digitados é ${media.toFixed(2)}`);
        console.log(`Entre todos os números, há ${contPairs} que são números pares.`);
    };
} while (nextNum === 'S');