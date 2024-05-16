const prompt = require('prompt-sync')();

let people = [[], []];
let minors = [[], []];

for (let i = 0; i < 9; i++){
    const name = prompt(`Digite o nome da ${i + 1}º pessoa: `);
    const age = Number(prompt(`Digite a idade da ${i + 1}º pessoa: `));

    people[0].push(name);
    people[1].push(age);

    if (age < 18) {
        minors[0].push(name);
        minors[1].push(age);
    }
}

console.log(`Aqui está os nomes das pessoas menores de idade: ${minors[0]}`);
console.log(`Aqui está as idades das pessoas menores de idade, respectivamente: ${minors[1]}`);