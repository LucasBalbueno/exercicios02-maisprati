const generateMatriz = require('./functions/generateMatriz.js');

const lines = 50;
const columns = 50;

const matriz = generateMatriz(lines, columns);

let sumLine = [];

for (let i = 0; i < lines; i++) {
    sumLine[i] = 0;
};

let diagMain = [];

for (let i = 0; i < lines; i++) {
    diagMain.push(matriz[i][i]);
    for (let j = 0; j < columns; j++) {
        sumLine[i] += matriz[i][j];
    };
};

let multiplyLines = [];

for (let i = 0; i < lines; i++) {
    multiplyLines.push(sumLine[i] * diagMain[i]);
};

console.log('Aqui está a matriz original: ');
console.log(matriz);
console.log('Aqui está cada linha da matriz multiplicado pelo seu elemento da diagonal principal: ');
console.log(multiplyLines);