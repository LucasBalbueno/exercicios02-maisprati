const prompt = require('prompt-sync')();

let hourPerMonth = prompt('Quantas horas de atividade física você praticou este mês? ');

while (hourPerMonth <= 0 || isNaN(hourPerMonth) === true) {
    hourPerMonth = prompt('Hora inválida! Digite quantas horas de atividade física você fez esse mês: ')
}

function calculatePoints (hours) {
    let points = 0;

    if (hours > 0 && hours <=10) {
        points = hours * 2;
    } else if (hours > 10 && hours <= 20) {
        points = hours * 5;
    } else if (hours > 20) {
        points = hours * 10;
    }

    const sumPoints = points * 0.05;

    console.log(`Este mês, as suas horas de atividade física te renderam R$${sumPoints.toFixed(2)}`)
};

calculatePoints(hourPerMonth);