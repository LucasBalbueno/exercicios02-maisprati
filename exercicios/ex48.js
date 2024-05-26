const inventarioLojaA = {arroz: 5, feijao: 6, massa: 10, ovos: 4, bananas: 3};

const inventarioLojaB = {massa: 5, arroz: 3, laranjas: 10, macas: 4, ovos: 2, beterraba: 1};
function matchInventory (objA, objB) {
    let newInventory = {};

    for (let key in objA) {
        const value = objA[key];
        newInventory[key] = value;
    };

    for (let key in objB) {
        const value = objB[key];

        if (newInventory[key]) {
            newInventory[key] += value;
        } else {
            newInventory[key] = objB[key];
        };
    };

    console.log(newInventory);
};

matchInventory(inventarioLojaA, inventarioLojaB);