const prompt = require('prompt-sync')();
const generateMatriz = require("./functions/generateMatriz.js");

const lines = 6;
const columns = 6;
const matriz = generateMatriz(lines, columns);
const A = Number(prompt('Digite um valor inteiro para multiplicar pela matriz: '));

let V = [];

for (let i = 0; i < lines; i++){
    for (let j = 0; j < columns; j++){
        const num = matriz[i][j] * A;
        V.push(num.toFixed(2));
    };
};

console.log(`Aqui está a multiplicação de ${A} pela matriz gerada:`);
console.log(V);