const arrFibonacci = [1, 1];

for (let i = 0; i < 13; i++) {
    const nextNumber = arrFibonacci[i] + arrFibonacci[i + 1];
    arrFibonacci.push(nextNumber);
}

console.log(`Aqui está o vetor de 15 posições com os primeiros elementos da sequência Fibonacci: ${arrFibonacci}.`);