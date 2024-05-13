const prompt = require('prompt-sync')();

const reta1 = prompt('Digite o primeiro valor: ');
const reta2 = prompt('Digite o segundo valor: ');
const reta3 = prompt('Digite o terceiro valor: ');

function verificaTriangulo (a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        console.log('É possivel formar um triangulo!');
    } else {
        console.log('NÃO é possivel formar um triangulo!');
    }
}

verificaTriangulo(reta1, reta2, reta3);