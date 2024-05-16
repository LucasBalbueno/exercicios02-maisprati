const arrFibonacci = [1, 1];

for (let i = 0; i < 8; i++) {
    const nextNumber = arrFibonacci[i] + arrFibonacci[i + 1];
    arrFibonacci.push(nextNumber);
}

console.log(`Os primeiros 10 elementos da sequência de Fibonacci: ${arrFibonacci}.`);