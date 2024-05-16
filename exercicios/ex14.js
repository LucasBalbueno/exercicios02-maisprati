const prompt = require('prompt-sync')();
let arrNames = [];

for (let i = 0; i < 7; i++) {
    const name = prompt(`Digite o ${i + 1}º nome: `);
    arrNames.push(name);
};

console.log(`Aqui está a lista de todos os nomes citados na ordem inversa: ${arrNames.reverse()}`)