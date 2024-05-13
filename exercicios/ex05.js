const prompt = require('prompt-sync')();

let userResp = prompt('Pedra, papel ou tesoura? Resposta: ');

const jogadaUser = userResp.toLowerCase();

while (jogadaUser !== 'papel' && jogadaUser !== 'tesoura' && jogadaUser !== 'pedra') {
    userResp = prompt('Resposta inválida! Pedra, papel ou tesoura? Resposta: ');
}

const jogadaComp = () => {
    const numAleatorio = Math.floor(Math.random() * 3) + 1;

    if (numAleatorio === 1) {
        return 'pedra';
    } if (numAleatorio === 2) {
        return 'papel';
    } else {
        return 'tesoura';
    }
}

function verificaCampeao (comp, user) {
    if (comp === 'pedra' && user === 'papel') {
        console.log(`O computador jogou ${comp}. VOCÊ GANHOU!`);
    } else if (comp == 'pedra' && user === 'tesoura') {
        console.log(`O computador jogou ${comp}. VOCÊ PERDEU!`);
    } else if (comp === 'papel' && user === 'tesoura') {
        console.log(`O computador jogou ${comp}. VOCÊ GANHOU!`);
    } else if (comp === 'papel' && user === 'pedra') {
        console.log(`O computador jogou ${comp}. VOCÊ PERDEU!`);
    } else if (comp === 'tesoura' && user === 'pedra') {
        console.log(`O computador jogou ${comp}. VOCÊ GANHOU!`);
    } else if (comp === 'tesoura' && user === 'papel'){
        console.log(`O computador jogou ${comp}. VOCÊ PERDEU!`);
    } else {
        console.log(`O computador jogou ${comp}. EMPATOU!`);
    }
}

verificaCampeao(jogadaComp(), jogadaUser);