const prompt = require('prompt-sync')();
let validatedTimes = [];
let invalidatedTimes = [];


function validateTime (hour, minute, second) {
    const isHour = hour >= 0 && hour <= 24;
    const isMinutes = minute >= 0 && minute <= 59;
    const isSeconds = second >= 0 && second <= 59;

    if (isHour === false || isMinutes === false || isSeconds === false){
        invalidatedTimes.push(`${hour}:${minute}:${second}`)
    } else {
        validatedTimes.push(`${hour}:${minute}:${second}`)
    }
}

for (let i = 0; i < 5; i++) {
    const time = prompt('Digite um horário separados por ":". Exemplo: 17:01:05. Resposta: ');
    const arrTime = time.split(':');

    const hours = Number(arrTime[0]);
    const minutes = Number(arrTime[1]);
    const seconds = Number(arrTime[2]);

    validateTime(hours, minutes, seconds)
}

if (validatedTimes.length > 0 && invalidatedTimes.length <= 0){
    console.log(`Aqui está a lista com todos os horários válidos: ${validatedTimes}`);
    console.log('Não há nenhum horário inválido!!');
} else if (validatedTimes.length <= 0 && invalidatedTimes.length > 0) {
    console.log('Não há nenhum horário válido!!')
    console.log(`Aqui está a lista com todos os horários inválidos: ${invalidatedTimes}`)
} else {
    console.log(`Aqui está a lista com todos os horários válidos: ${validatedTimes}`);
    console.log(`Aqui está a lista com todos os horários inválidos: ${invalidatedTimes}`)
}