const generateMatriz = require('./functions/generateMatriz.js');

const lines = 5;
const columns = 5;

const matriz = generateMatriz(lines, columns);

let SL = [];
let SC = [];

for (let i = 0; i < lines; i++) {
    SL.push(0);
    SC.push(0);
};

for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
        SL[i] += matriz[i][j]
        SC[j] += matriz[i][j]
    }
}

console.log('Segue a soma das linhas da matriz, respectivamente:')
console.log(SL)
console.log('Segue a soma das colunas da matriz, respectivamente:')
console.log(SC)
console.table(matriz)