const prompt = require('prompt-sync')();

let sexo = prompt('Qual o genêro do seu funcionário? Responda com "M" ou "F": ').toUpperCase(); 
let salario = Number(prompt('Qual o sálario desse funcionário? R$'));
let adicionaFuncionario = prompt('Você quer adicionar mais 1 funcionário? Responda com "S" ou "N": ');

let contHomem = 0;
let somaHomem = 0;

let contMulher = 0;
let somaMulher = 0;

function somaSalario (sexo, salario) {
    if (sexo === 'M') {
        somaHomem = somaHomem + salario;
        contHomem++;
    } else if (sexo === 'F'){
        somaMulher = somaMulher + salario;
        contMulher++;
    };
    
    return somaHomem, somaMulher;
};

somaSalario(sexo, salario);

while(adicionaFuncionario === 'S') {
    sexo = prompt('Qual o genêro do seu funcionário? Responda com "M" ou "F": ').toUpperCase();
    salario = Number(prompt('Qual o sálario desse funcionário? R$'));

    adicionaFuncionario = prompt('Você quer adicionar mais 1 funcionário? Responda com "S" ou "N": ');
    somaSalario(sexo, salario);
};

console.log(`O número de homens foi ${contHomem} e o total dos seus salários é R$${somaHomem.toFixed(2)}`);
console.log(`O número de mulheres foi ${contMulher} e o total dos seus salários é R$${somaMulher.toFixed(2)}`);