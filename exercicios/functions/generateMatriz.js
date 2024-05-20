function generateMatriz (linhas, colunas) {
    let matrizRandom = [];
    for (let i = 0; i < linhas; i++) {
        matrizRandom[i] = [];
        for (let j = 0; j < colunas; j++){
            const num = Math.random() * 10;
            matrizRandom[i].push(num);
        };
    };

    return matrizRandom;
};

module.exports = generateMatriz;