const generateMatriz = require("./functions/generateMatriz.js");

function sumColumns (matriz) {
    const lines = matriz.length;
    const columns = matriz[0].length;

    let sumColumn = [];

    for (let i = 0; i < columns; i++){
        sumColumn.push(0);
    };
    
    for (let i = 0; i < lines; i++){
        for (let j = 0; j < columns; j++){
            sumColumn[j] += matriz[i][j];
        };
    };

    console.log(matriz);
    return sumColumn;
};

function showSum (sum, columns) {
    for (let j = 0; j < columns; j++){
        console.log(`A soma da coluna ${j + 1}: ${sum[j].toFixed(2)}`);
    };
};

const numLines = 3;
const numColumns = 3;

const matriz = generateMatriz(numLines, numColumns);
const sum = sumColumns(matriz);
showSum(sum, numColumns);