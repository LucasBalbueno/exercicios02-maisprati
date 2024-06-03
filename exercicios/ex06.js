const prompt = require('prompt-sync')();

let numUser = Number(prompt('Digite um número de 1 a 5: '));

while (numUser < 1 && numUser > 5) {
    numUser = prompt('Número inválido, digite um número entre 1 e 5: ');
}

const numComp = Math.trunc(Math.random() * 5) + 1;

function verificaCampeao (comp, user) {
    if (comp == user) {
        console.log(`VOCÊ ACERTOU!!`);
    } else {
        console.log(`O número era ${comp}, você errou!!`);
    }
}

verificaCampeao(numComp, numUser);