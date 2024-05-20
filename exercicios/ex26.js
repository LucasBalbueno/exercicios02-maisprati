const generateMatriz = require("./functions/generateMatriz.js");

const lines = 3;
const columns = 5;

const matrizA = generateMatriz(lines, columns);
const matrizB = generateMatriz(lines, columns);

const matrizP = [];

for (let i = 0; i < lines; i++) {
    matrizP[i] = [];
    for (let j = 0; j < columns; j++){
        matrizP[i][j] = 0;
    };
};

for (let i = 0; i < lines; i++){
    for (let j = 0; j < columns; j++){
        matrizP[i][j] = matrizA[i][j] * matrizB[i][j];
    };
};

console.log('Aqui está a matriz produto:');
for (let i = 0; i < lines; i++){
    console.log(matrizP[i]);
};