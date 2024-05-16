const prompt = require('prompt-sync')();

const register = {
    name: '',
    position: '',
    salary: 0
}

console.log('Vamos começar a preencher o seu registro')
const name = prompt('Qual o seu nome? Resposta: ');
const position = prompt('Qual o seu cargo? Resposta: ');
const salary = Number(prompt('Qual o seu salário? R$  '));

register.name = name;
register.position = position;
register.salary = salary;

console.log(register)