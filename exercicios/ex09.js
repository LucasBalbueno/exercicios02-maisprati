const prompt = require('prompt-sync')();

let sexo = prompt('Qual o genêro do seu funcionário? Responda com "M" ou "F": ').toUpperCase();
let salario = Number(prompt('Qual o sálario desse funcionário? R$'));
let adicionaFuncionario = prompt('Você quer adicionar mais 1 funcionário? Responda com "S" ou "N": ').toUpperCase();

function validaFuncionario() {
    while (sexo !== 'M' && sexo !== 'F') {
        sexo = prompt('GENÊRO INVÁLIDO! Qual o genêro do seu funcionário? Responda apenas com "M" ou "F": ').toUpperCase();
    };
    while (salario <= 0 || isNaN(salario) === true) {
        salario = Number(prompt('SALÁRIO INVÁLIDO! Responda com um número maior que 0. Qual o sálario desse funcionário? R$'));
    };
    while (adicionaFuncionario !== 'S' && adicionaFuncionario !== 'N') {
        adicionaFuncionario = prompt('RESPOSTA INVÁLIDA! Você quer adicionar mais 1 funcionário? Responda apenas com "S" ou "N": ').toUpperCase();
    };
};

validaFuncionario();

let contHomem = 0;
let somaHomem = 0;

let contMulher = 0;
let somaMulher = 0;

function somaSalario(sexo, salario) {
    if (sexo === 'M') {
        somaHomem = somaHomem + salario;
        contHomem++;
    } else if (sexo === 'F') {
        somaMulher = somaMulher + salario;
        contMulher++;
    };
    
    return somaHomem, somaMulher;
};

somaSalario(sexo, salario);

while(adicionaFuncionario === 'S') {
    sexo = prompt('Qual o genêro do seu funcionário? Responda com "M" ou "F": ').toUpperCase();
    salario = Number(prompt('Qual o sálario desse funcionário? R$'));
    adicionaFuncionario = prompt('Você quer adicionar mais 1 funcionário? Responda com "S" ou "N": ').toUpperCase();

    validaFuncionario();
    somaSalario(sexo, salario);
};

console.log(`O número de homens foi ${contHomem} e o total dos seus salários é R$${somaHomem.toFixed(2)}`);
console.log(`O número de mulheres foi ${contMulher} e o total dos seus salários é R$${somaMulher.toFixed(2)}`);