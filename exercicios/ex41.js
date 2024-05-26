const prompt = require('prompt-sync')();

const person = {
    name: prompt('Qual o seu nome? '),
    age: Number(prompt('Qual a sua idade? '))
};

console.log(`Você tem ${person.age} anos!`);

person.email = prompt('Qual o seu email? ');

console.log('Programa finalizado!');
console.log(person);