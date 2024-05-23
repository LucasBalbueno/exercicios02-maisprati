// LER UM VETOR DE 5 POSIÇÕES COM NÚMEROS INTEIROS PARA O GABARITO;

// LER 50 VETORES (COM 5 ELEMENTOS CADA)

//COMPARAR O GABARITO COM AS RESPOSTAS

// DIGITAS GANHADOR SE TODOS OS NUMEROS CORRESPONDE A RESPOSTA.

const prompt = require('prompt-sync')();

let template = [];

for (let i = 0; i < 5; i++){
    const value = parseInt(prompt(`Digite o ${i + 1}º valor para o gabarito da loto (de 1 a 99): `));
    template.push(value);
};

for (let i = 0; i < 50; i++){
    let response = [];
    let cont = 0;

    for (let j = 0; j < 5; j++){
        const value = parseInt(prompt(`Digite a sua ${j + 1}º resposta (de 1 a 99): `));
        response.push(value);
    };

    for (let k = 0; k < response.length; k++) {
        if (response[k] === template[k]) {
            cont++;
        };
    };

    if (cont === 5) {
        console.log('Ganhador');
    } else {
        console.log('Não foi dessa vez!');
        console.log('Próximo!');
    };
};