const generateMatriz = require('./functions/generateMatriz.js');

const lines = 10;
const columns = 10;
// const matriz = generateMatriz(lines, columns);

const matriz = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
    [3, 4, 5, 6, 7, 8, 9, 10, 1, 2],
    [4, 5, 6, 7, 8, 9, 10, 1, 2, 3],
    [5, 6, 7, 8, 9, 10, 1, 2, 3, 4],
    [6, 7, 8, 9, 10, 1, 2, 3, 4, 5],
    [7, 8, 9, 10, 1, 2, 3, 4, 5, 6],
    [8, 9, 10, 1, 2, 3, 4, 5, 6, 7],
    [9, 10, 1, 2, 3, 4, 5, 6, 7, 8],
    [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];


for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
        matriz[i][j]
    }
}

console.log(matriz)