const prompt = require('prompt-sync')();

function readTemplate () {
    let template = [];
    for (let i = 0; i < 13; i++){
        const num = Number(prompt(`Digite a ${i + 1}º reposta do gabarito: `));
        template.push(num);
    };
    
    return template;
};

function readAnswer (template) {
    let answer = [];
    let numCard = '';

    for (let i = 0; i < 100; i++){
        numCard = prompt('Digite o número do seu cartão de aposta (5 digitos): ');
        for (let j = 0; j < 13; j++) {
            const num = Number(prompt(`Digite sua ${j + 1}º resposta: `));
            answer.push(num);
        }

        let cont = 0;

        for (let k = 0; k < answer.length; k++){
            for (let l = 0; l < template.length; l++){
                if (template[l] === answer[k]) {
                    cont++;
                    break;
                };
            };
        };

        answer = [];

        if (cont === 13) {
            console.log('Parabéns, tu foi o GANHADOR.');
            break;
        } else {
            console.log(`O número do seu cartão é ${numCard}`);
            console.log(`Você acertou ${cont} número(s) da loteria!!`);
        };
    };
};

const template = readTemplate();
readAnswer(template);