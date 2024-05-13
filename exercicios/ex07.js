const prompt = require('prompt-sync')();

const promptCar = prompt('Você deseja alugar um carro popular ou de luxo? ');
let days = prompt('Por quantos dias você irá utilizar o carro? ');
let distance = prompt('Qual a distancia que você vai percorrer com o carro? ');

let typeCar = promptCar.toLowerCase();

while (typeCar !== 'luxo' && typeCar !== 'popular') {
    typeCar = prompt('Modelo de viagem inválido! Você deseja alugar um carro popular ou de luxo? ');
};

while (isNaN(days) === true) {
    days = prompt('Valor de dias inválido! Por quantos dias você irá utilizar o carro? ')
};

while (isNaN(distance) === true || distance <= 0) {
    distance = prompt('Valor de distancia inválido! Qual a distancia que você vai percorrer com o carro? ')
};

if (typeCar === 'popular') {
    const daily = days * 90;
    console.log(`A sua diária custará R$${daily.toFixed(2)}.`);

    if (distance <= 100) {
        const pricePerDistance = distance * 0.20;
        console.log(`A distância que voce irá percorrer custará R$${pricePerDistance.toFixed(2)}`)
        console.log(`O total do aluguel será R$${(daily + pricePerDistance).toFixed(2)}.`)
    } else if (distance > 100) {
        const pricePerDistance = distance * 0.10;
        console.log(`A distância que voce irá percorrer custará R$${pricePerDistance.toFixed(2)}`)
        console.log(`O total do aluguel será R$${(daily + pricePerDistance).toFixed(2)}.`)
    }
}

if (typeCar === 'luxo') {
    const daily = days * 150;
    console.log(`A sua diária custará R$${daily.toFixed(2)}.`);

    if (distance <= 200) {
        const pricePerDistance = distance * 0.30;
        console.log(`A distância que voce irá percorrer custará R$${pricePerDistance.toFixed(2)}`)
        console.log(`O total do aluguel será R$${(daily + pricePerDistance).toFixed(2)}.`)
    } else if (distance > 200) {
        const pricePerDistance = distance * 0.25;
        console.log(`A distância que voce irá percorrer custará R$${pricePerDistance.toFixed(2)}`)
        console.log(`O total do aluguel será R$${(daily + pricePerDistance).toFixed(2)}.`)
    }
}