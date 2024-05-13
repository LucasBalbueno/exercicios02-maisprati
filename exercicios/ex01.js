const prompt = require('prompt-sync')();

const cigarrosPorDia = prompt('Quantos cigarros você fuma por dia? Resposta: ');
const anos = prompt('Faz quantos anos que você fuma? Resposta: ');

const calculaVida = () => {
    const diasDeFumante = ((anos * 12) * 30);
    const cigarrosTotal = diasDeFumante * cigarrosPorDia;
    const tempoPerdido = cigarrosTotal * 10;

    const DiasPerdido = (tempoPerdido / 60) / 24;
    
    return DiasPerdido;
}

console.log(`Você já perdeu ${calculaVida().toFixed(1)} dias por fumar`)