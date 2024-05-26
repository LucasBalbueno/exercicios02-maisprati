const transitions = [
    { id: 1, valor: 100, data: '2024-05-01', categoria: 'Alimentacao' },
    { id: 2, valor: 200, data: '2024-05-02', categoria: 'Transporte' },
    { id: 3, valor: 300, data: '2024-06-04', categoria: 'Transporte' },
    { id: 4, valor: 50, data: '2024-05-03', categoria: 'Alimentacao' },
    { id: 5, valor: 300, data: '2024-05-04', categoria: 'Lazer' },
    { id: 6, valor: 50, data: '2024-05-15', categoria: 'Transporte' }
];

function categorizeTransitions(transitions) {
    let newTransitions = {};

    for (let transition of transitions) {
        const { categoria, valor } = transition;

        if (!newTransitions[categoria]) {
            newTransitions[categoria] = {
                transitions: [],
                subTotal: 0
            };
        };

        newTransitions[categoria].transitions.push(transition);
        newTransitions[categoria].subTotal += valor;
    };

    return newTransitions;
};

const newTransitions = categorizeTransitions(transitions);
console.log(JSON.stringify(newTransitions, null, 2));