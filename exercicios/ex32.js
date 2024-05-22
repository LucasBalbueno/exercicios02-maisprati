const generateMatriz = require('./functions/generateMatriz.js');

const lines = 12;
const columns = 13;

const matriz = generateMatriz(lines, columns);

const biggers = [];
const sumns = [];

for (let i = 0; i < lines; i++){
    let biggerNum = 0;
    let sum = 0;

    for (let j = 0; j < columns; j++){
        sum += matriz[i][j];

        if (matriz[i][j] > biggerNum){
            biggerNum = matriz[i][j];
        };
    };

    biggers.push(biggerNum);
    sumns.push(sum);
};

const matrizModified = [];

for (let i = 0; i < lines; i++){
    const div = (sumns[i] / biggers[i]).toFixed(2);
    matrizModified.push(div);
};

console.log('A MATRIZ LIDA: ');
console.table(matriz);
console.log('A MATRIZ MODIFICADA: ');
console.table(matrizModified);