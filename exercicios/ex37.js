const prompt = require('prompt-sync')();

function readTemplate () {
    let G = [];

    for (let i = 0; i < 20; i++){
        const letter = prompt(`Digite a letra do Gabarito (A, B, C, D, E) da questão ${i + 1}: `).toUpperCase();
        G.push(letter);
    };

    console.log('GABARITO REGISTRADO!');

    return G;
};

function readAnswer (template) {
    
    for (let i = 0; i < 50; i++){
        console.log(`REGISTRE A REPOSTA DO ${i + 1}º ALUNO(A): `)
        
        let R = [];
        let cont = 0;

        for (let j = 0; j < 20; j++){
            const resp = prompt(`Digite a sua resposta (com A, B, C, D ou E) para a questão ${j + 1}: `).toUpperCase();
            R.push(resp);

            if (template[j] === R[j]) {
                cont++;
            };
        };

        if (cont >= 12) {
            console.log('APROVADO');
        } else {
            console.log('REPROVADO');
        };

        console.log(`A média era 12 e você acertou ${cont} reposta(s).`);
    };
};

const template = readTemplate();
readAnswer(template);