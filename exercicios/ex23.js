const matriz = 7;

let matrizIdentidade = [];

for (let i = 0; i < matriz; i++){
    matrizIdentidade[i] = [];
    for (let j = 0; j < matriz; j++){
        matrizIdentidade[i][j] = 0;
    }
};

for (let i = 0; i < matriz; i++){
    matrizIdentidade[i][i] = 1;
};

for (let i = 0; i < matriz; i++){
    console.log(`${matrizIdentidade[i]}`);
};