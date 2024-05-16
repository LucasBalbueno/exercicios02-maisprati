const prompt = require('prompt-sync')();

const altura = parseFloat(prompt('Qual a sua altura (em METROS)? '));
const sexo = prompt('Qual o seu gênero? Reponda apenas com "M" e "F": ').toUpperCase();

function pesoIdeal (alt, sex) {
    if(sex === 'M'){
        const pesoHomem = (72.7 * alt) -58;
        console.log(`O seu peso ideal é: ${pesoHomem.toFixed(2)}Kg.`);
    } else {
        const pesoMulher = (62.1 * alt) -44.7;
        console.log(`O seu peso ideal é: ${pesoMulher.toFixed(2)}Kg.`);
    };
};

pesoIdeal(altura, sexo);