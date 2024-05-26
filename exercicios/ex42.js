const data = {
    idProduct: '123456',
    nameProduct: 'Computador da XUXA',
    tagsProduct: ['computador', 'pc', 'notebook', 'xuxaComputer'],
    price: 2999,
    description: 'O melhor computador que você poderia sonhar!',
    informations: ['Intel i90 (110º geração)', 'Geforce GTX 9090 100GB VRAM', '1TB RAM', '5000TB Armazenamento']
};

function newData(obj) {
    const newArrayProperties = {};

    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            newArrayProperties[key] = obj[key];
        }
    }

    return newArrayProperties;
}

console.log('Aqui está apenas as propriedades de array do seu objeto: ');
console.log(newData(data));