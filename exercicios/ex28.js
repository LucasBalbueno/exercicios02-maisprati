const generateMatriz = require('./functions/generateMatriz.js');

const lines = 10;
const columns = 10;
const matriz = generateMatriz(lines, columns);

let diagUp = 0;
let diagDown = 0;

for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
        if (j > i) {
            diagUp += matriz[i][j];
        } else if (j < i) {
            diagDown += matriz[i][j];
        };
    };
};

console.log('Soma dos elemento acima da diagonal principal da matriz:', diagUp.toFixed(2));
console.log('Soma dos elemento abaixo da diagonal principal da matriz:', diagDown.toFixed(2));