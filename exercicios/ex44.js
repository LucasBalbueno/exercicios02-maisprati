const obj1 = {
    name: 'Lucas',
    age: 20,
    job: 'developer',
    favoriteTeacher: 'Jaques ;)',
    favoriteNumber: 56,
    favoriteTeam: 'Gremio SEMPRE',
    worstTeam: 'Aquele vermelho com estádio de bergamota',
    hobbies: ['tocar guitarra', 'jogar videogame', 'ler', 'Correr ao ar livre'],
    birthDay: 4,
};

function contStrings (obj) {
    let cont = 0;

    for (let data in obj) {
        if (typeof obj[data] === 'string') {
            cont++
        }
    }

    return cont;
}

console.log(contStrings(obj1));