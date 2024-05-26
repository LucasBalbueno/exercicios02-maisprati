const prompt = require('prompt-sync')();

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5};

const num = Number(prompt('Digite um número para múltiplicar os valores do objeto: '));

const multiplyingValue = (value) => {
    return num * value;
};

function transformObject(obj, multiplying) {
    const newObj = {};

    for (let key in obj) {
        newObj[key] = multiplying(obj[key]);
    };

    return newObj;
};

const newObj = transformObject(obj, multiplyingValue);

console.log(`Aqui está o objeto com todos os valores multiplicados por ${num}`);
console.log(newObj);