function GenerateMatriz(lines, columns) {
    let matrizRandom = [];

    for (let i = 0; i < lines; i++) {
        let linha = [];
        for (let j = 0; j < columns; j++) {
            linha.push(Math.random() * 100);
        };

        matrizRandom.push(linha);
    }

    return matrizRandom;
};

function sumColumns(matriz){
    let lines = matriz.length;
    let columns = matriz[0].length;
    let sum = new Array(columns).fill(0);

    for (let j = 0; j < columns; j++){
        for (let i = 0; i < lines; i++){
            sum[j] += matriz[i][j];
        }
    }

    return sum;
}

function getSums (sumColumns) {
    for (let j = 0; j < sumColumns.length; j++){
        console.log(`A soma da coluna ${j + 1}: ${sumColumns[j].toFixed(2)}`)
    }
}

let matrizRandom = GenerateMatriz(15, 20);
let sum = sumColumns(matrizRandom);

getSums(sum);