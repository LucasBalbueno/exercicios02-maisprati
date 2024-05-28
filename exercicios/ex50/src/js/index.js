import sistemaHoteis from "./sistemaHotel.js";
const sistema = new sistemaHoteis();

const formAdicionaHotel = document.getElementById('formAdicionaHotel');
const respAdicionaHotel = document.getElementById('respAdicionaHotel');

let idHoteis = 0;

formAdicionaHotel.addEventListener('submit', (event) => {
    event.preventDefault();

    idHoteis++;
    const idHotel = idHoteis;
    const nome = formAdicionaHotel.elements['nameHotel'].value;
    const cidade = formAdicionaHotel.elements['cityHotel'].value;
    const quartosTotais = formAdicionaHotel.elements['totalRooms'].value;
    const quartosDisponiveis = formAdicionaHotel.elements['availableRooms'].value;

    let resposta;

    if (nome === '' || cidade === '' || quartosTotais === '' || quartosDisponiveis === '') {
        resposta = 'Informações insuficientes';
    } else {
        resposta = sistema.adicionaHotel(idHotel, nome, cidade, quartosTotais, quartosDisponiveis);
    };

    formAdicionaHotel.reset();
    respAdicionaHotel.innerText = resposta;
});

const formBuscaHotel = document.getElementById('formBuscaHotel');
const respBuscaHotel = document.getElementById('respBuscaHotel');

formBuscaHotel.addEventListener('submit', (event) => {
    event.preventDefault();

    const cidade = formBuscaHotel.elements['cityHotel'].value;

    let resposta;

    if (cidade === '') {
        resposta = 'Informações insuficientes';
    } else {
        resposta = sistema.buscaHotel(cidade);
    };

    formBuscaHotel.reset();
    respBuscaHotel.innerText = resposta;
});

const formFazerReserva = document.getElementById('formFazerReserva');
const respFazerReserva = document.getElementById('respFazerReserva');

let idReservas = 0;

formFazerReserva.addEventListener('submit', (event) => {
    event.preventDefault();

    idReservas++;
    const idReserva = idReservas;
    const nomeCliente = formFazerReserva.elements['clientName'].value;
    const idHotel = Number(formFazerReserva.elements['idHotel'].value);
    const data = formFazerReserva.elements['bookedDate'].value;

    let resposta;

    if (nomeCliente === '' || idHotel === '' || data === '') {
        resposta = 'Informações insuficientes';
    } else {
        resposta = sistema.fazerReserva(idReserva, idHotel, nomeCliente, data);
    };

    formFazerReserva.reset();
    respFazerReserva.innerText = resposta;
})

const formCancelarReserva = document.getElementById('formCancelarReserva');
const respCancelarReserva = document.getElementById('respCancelarReserva');

formCancelarReserva.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeCliente = formCancelarReserva.elements['clientName'].value;
    const idReserva = Number(formCancelarReserva.elements['idbooked'].value);
    const idHotel = Number(formCancelarReserva.elements['idHotel'].value);
    const data = formCancelarReserva.elements['bookedDate'].value;

    let resposta;

    if (nomeCliente === '' || idReserva === '' || data === '') {
        resposta = 'Informações insuficientes';
    } else {
        resposta = sistema.cancelarReserva(idReserva, idHotel, nomeCliente, data);
    };

    formCancelarReserva.reset();
    respCancelarReserva.innerText = resposta;
});

const formListarReservas = document.getElementById('formListarReservas');
const respListarReservas = document.getElementById('respListarReservas');

formListarReservas.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeCliente = formListarReservas.elements['nameClient'].value;

    let resposta;

    if (nomeCliente === "") {
        resposta = 'Informações insuficientes';
    } else {
        resposta = sistema.listasReservas(nomeCliente);
    };

    formListarReservas.reset();
    respListarReservas.innerText = resposta;
});