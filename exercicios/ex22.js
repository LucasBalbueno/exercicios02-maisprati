const prompt = require('prompt-sync')();

let sumSalary = 0;
let sumKids = 0;
let cont = 0;
let higherSalary = 0;
let contLowSalary = 0;

do {
    const salary = parseFloat(prompt('Digite o salário de uma pessoa: R$ '));
    numbersOfKids = Number(prompt('Quantos filhos essa pessoa tem? '));
    addPerson = prompt('Você deseja adicionar mais uma pessoa? Responda com "S" ou "N": ').toUpperCase();

    sumSalary += salary;
    sumKids += numbersOfKids;
    cont++;

    if (salary > higherSalary){
        higherSalary = salary;
    }

    if (salary <= 350) {
        contLowSalary++
    }
} while (addPerson === 'S');

const mediaSalary = sumSalary / cont;
const mediaKids = sumKids / cont;
const percentageLowSalary = (contLowSalary * 100) / cont;

console.log(`A media salarial da população é R$${mediaSalary.toFixed(2)}`);
console.log(`A média de números de filhos por pessoa é ${mediaKids.toFixed(1)}`);
console.log(`O maior salário digitado é: R$${higherSalary.toFixed(2)}`);
console.log(`De acordo com os dados informados, ${percentageLowSalary}% da população ganha até R$350.00`);
