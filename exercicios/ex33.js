const generateMatriz = require('./functions/generateMatriz.js');

const lines = 3;
const columns = 3;

const matriz = generateMatriz(lines, columns);

let diagMain = [];
let sumDiag2 = 0;

for (let i = 0; i < lines; i++){
    const num = matriz[i][i];
    diagMain.push(num);
}

for (let i = 0, j = columns - 1; i < lines && j >= 0; i++, j--){
    const num = matriz[i][j];
    sumDiag2 += matriz [i][j];
}

const mediaDiag2 = (sumDiag2 / lines).toFixed(2);

let matrizModified = [];

diagMain.forEach((num) => {
    matrizModified.push(num * mediaDiag2);
});

console.log('Abaixo está a matriz gerada pelo programa:');
console.table(matriz)
console.log('Abaixo estão os elementos da diagonal principal multiplicados pela media dos elementos da diagonal secundária: ');
console.log(matrizModified);