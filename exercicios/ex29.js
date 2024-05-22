const generateMatriz = require('./functions/generateMatriz.js');

const lines = 5;
const columns = 5;

const matriz = generateMatriz(lines, columns);

let sumLine4 = 0;
let sumColumn2 = 0;
let sumDiag = 0;
let sumMatriz = 0;

for (let i = 0; i < lines; i++){
    sumDiag += matriz[i][i];
    
    for (let j = 0; j < columns; j++){
        if (i === 3) {
            sumLine4 += matriz[i][j];
        };

        if (j === 1) {
            sumColumn2 += matriz[i][j];
        };

        sumMatriz += matriz[i][j];
    };
};

console.log(`Soma da linha 4 da matriz: ${sumLine4.toFixed(2)}`);
console.log(`Soma da coluna 2 da matriz: ${sumColumn2.toFixed(2)}`);
console.log(`Soma da diagonal principal: ${sumDiag.toFixed(2)}`);
console.log(`Soma de todos os elementos da matriz: ${sumMatriz.toFixed(2)}`);

console.table(matriz)