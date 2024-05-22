const prompt = require('prompt-sync')();
const generateMatriz = require('./functions/generateMatriz.js')

const A = Number(prompt('Digite um número inteiro: '));

const lines = 30;
const columns = 30;
let matrizV = generateMatriz(lines, columns);

let cont = 0;
let matrizX = [];


for (let i = 0; i < lines; i++) {
    matrizX[i] = [];
    for (let j = 0; j < columns; j++){
        if (matrizV[i][j] === A){
            cont++;
            matrizX[i][j] = '';
        } else {
            matrizX[i][j] = matrizV[i][j];
        };
    };
};

console.log(`Há exatamente ${cont} valores iguais a ${A} nessa matriz M30x30`);
console.log(`Abaixo segue a matriz com todos os valores diferentes de ${A}: `, matrizX);