let numbersRandom = [];

for (let i = 0; i < 20; i++){
    const num = Math.floor(Math.random() * 99) + 1;
    numbersRandom.push(num);
}

const numbersOrdered = numbersRandom.sort((a, b) => a - b)

console.log(`Aqui está uma lista com 20 números aleatórios gerados pelo computador: ${numbersRandom}`);
console.log(`Aqui está a mesma lista de cima em ordem crescente: ${numbersOrdered}`);