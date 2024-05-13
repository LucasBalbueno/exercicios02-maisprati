const prompt = require('prompt-sync')();

const distancia = Number(prompt('Qual a distancia que você quer percorrer (em KM)? Reposta: '));

if (distancia <= 0){
    console.log('A distancia deve ser maior que 0.');
} else {
    if (distancia > 200) {
        console.log(`A sua viagem custará R$${(distancia * 0.45).toFixed(2)}`);
    } else {
        console.log(`A sua viagem custará R$${(distancia * 0.50).toFixed(2)}`);
    }
}