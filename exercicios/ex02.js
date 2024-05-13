const prompt = require('prompt-sync')();

const velocidade = prompt('Qual a velocidade do carro? Resposta: ');

if (velocidade > 80) {
    const multa = (velocidade - 80) * 5
    console.log(`Você foi multado em R$${multa.toFixed(2)}`)
}
