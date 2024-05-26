const obj1 = {
    name: 'Lucas',
    age: 20,
    email: 'joao@gmail.com',
    favoriteColor: 'amarelo'
};

const obj2 = {
    name: 'Maria',
    hobbies: 'Cantar',
    favoriteNumber: 56,
    favoriteColor: 'azul'
};

function mergeObj (obj1, obj2) {
    return {...obj1, ...obj2};
};

console.log(mergeObj(obj1, obj2));