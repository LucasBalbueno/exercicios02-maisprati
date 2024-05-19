const prompt = require('prompt-sync')();

const name = prompt('Digite o nome que você quer procurar: ');
const salary = Number(prompt('Digite o salário dessa pessoa. R$ '));

const officersNames = [
    "Ana Silva", "Bruno Costa", "Carla Souza", "Daniel Lima", "Eliana Rocha",
    "Fernando Mendes", "Gustavo Oliveira", "Helena Castro", "Igor Santos", "Juliana Almeida",
    "Karla Ferreira", "Lucas Pereira", "Mariana Andrade", "Nicolas Ribeiro", "Olivia Carvalho",
    "Paulo Teixeira", "Quenia Borges", "Ricardo Martins", "Sofia Lopes", "Tiago Rocha",
    "Ursula Santos", "Vitor Barros", "Wesley Cardoso", "Xenia Mendes", "Yasmin Monteiro",
    "Zara Fernandes", "Amanda Sousa", "Bruna Lima", "Carlos Silva", "Debora Rocha",
    "Eduardo Oliveira", "Fernanda Costa", "Gabriel Ferreira", "Heloisa Santos", "Isabela Almeida",
    "Joaquim Borges", "Kamila Carvalho", "Leonardo Teixeira", "Marta Ribeiro", "Nathan Souza",
    "Otavio Martins", "Patricia Lopes", "Quirino Barros", "Renata Rocha", "Sergio Mendes",
    "Tatiana Castro", "Ulisses Oliveira", "Valeria Mendes", "Washington Santos", "Xavier Cardoso",
    "Yara Monteiro", "Zelia Fernandes", "Adriano Sousa", "Bianca Lima", "Cristiano Silva",
    "Daniele Rocha", "Emerson Oliveira", "Fabiana Costa", "Gilberto Ferreira", "Humberto Santos",
    "Ivana Almeida", "Jonas Borges", "Karine Carvalho", "Larissa Teixeira", "Marcelo Ribeiro",
    "Naiara Souza", "Orlando Martins", "Priscila Lopes", "Queila Barros", "Rafael Rocha",
    "Simone Mendes", "Tomas Castro", "Uriel Oliveira", "Viviane Mendes", "William Santos",
    "Ximena Cardoso", "Ygor Monteiro", "Zilda Fernandes", "Antonio Sousa", "Barbara Lima"
];

let officersData = {};

function officerFactory() {
    this.createOfficer = function (registrationID, name, salary) {
        let officer = {
            registration: `0${registrationID}`,
            name: name,
            salary: salary,
            deductionINSS: salary * 0.12,
            salaryLiquid: salary - (salary * 0.12),
            getInfo: function () {
                console.log(`A seguir estão os dados do funcionário pesquisado:\nMatrícula: ${this.registration}\nNome: ${this.name}\nSalario Bruto: R$${this.salary}\nDedução INSS: R$${this.deductionINSS}\nSalário líquido: R$${this.salaryLiquid}`)
            }
        };
        officersData[name] = officer;
    }
    
};

const factory = new officerFactory();

let cont = 0;
let officerExist = false;
let nameFuncionary = ''

for (let i = 0; i < 80; i++) {
    cont++;

    if (name === officersNames[i]) {
        factory.createOfficer(cont, name, salary);
        officerExist = true;
        nameFuncionary = officersNames[i];
    }
}

if (officerExist === false) {
    console.log('Esse usuário não existe no nosso "Banco de Dados"!')
} else {
    officersData[nameFuncionary].getInfo()
}