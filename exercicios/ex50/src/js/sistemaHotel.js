class hotel {
    constructor(idHotel, nome, cidade, quartosTotais, quartosDisponiveis) {
        this.idHotel = idHotel;
        this.nome = nome;
        this.cidade = cidade;
        this.quartosTotais = quartosTotais;
        this.quartosDisponiveis = quartosDisponiveis;
    };
};

class reserva {
    constructor(idReserva, idHotel, nomeCliente, data) {
        this.idReserva = idReserva;
        this.idHotel = idHotel;
        this.nomeCliente = nomeCliente;
        this.data = data;
    };
};

export default class sistemaHoteis {
    constructor() {
        this.hoteis = [];
        this.reservas = [];
        this.checkIns =[];
    };

    adicionaHotel(id, nome, cidade, quartosTotais, quartosDisponiveis) {
        let respostaCliente = [];

        if (quartosTotais >= quartosDisponiveis) {
            const novoHotel = new hotel(id, nome, cidade, quartosTotais, quartosDisponiveis);
            this.hoteis.push(novoHotel);
            respostaCliente.push(`O hotel ${novoHotel.nome} com ${quartosTotais} quartos ao total e localizado em ${novoHotel.cidade} foi adicionado a lista com o ID: ${novoHotel.idHotel}!`);
        } else {
            respostaCliente.push('O hotel não pode ter mais quartos disponíveis que o número total de quartos.');
        }

        return respostaCliente.join('\n');
    };

    buscaHotel(buscaCidade) {
        let respostaCliente = [];
        let isSearched = false;

        for (let i = 0; i < this.hoteis.length; i++) {
            const cidade = this.hoteis[i].cidade;
            if (cidade === buscaCidade) {
                isSearched = true;

                respostaCliente.push(`O hotel ${this.hoteis[i].nome} está localizado em ${buscaCidade}! E ele possui ${this.hoteis[i].quartosDisponiveis} quartos disponíveis no momento. O ID desse hotel é: ${this.hoteis[i].idHotel}`);
            };
        };

        if (isSearched === false) {
            respostaCliente.push(`Infelizmente não há nenhum hotel localizado na cidade de ${buscaCidade}!`);
        };

        return respostaCliente.join('\n');
    };

    fazerReserva(idReserva, idHotel, nomeCliente, data) {
        let respostaCliente = [];
        let isReserved = false;

        for (let i = 0; i < this.hoteis.length; i++) {
            if (this.hoteis[i].idHotel === idHotel && this.hoteis[i].quartosDisponiveis > 0) {
                this.hoteis[i].quartosDisponiveis--;

                isReserved = true;

                respostaCliente.push(`Que bom tê-lo como cliente ${nomeCliente}! A sua reserva para o hotel ${this.hoteis[i].nome} foi confirmada para o dia ${data}. Aqui está o ID da sua reserva: ${idReserva}`);
                
                const novaReserva = new reserva(idReserva, idHotel, nomeCliente, data);
                this.reservas.push(novaReserva);
            } else {
                respostaCliente.push('Não há quartos sufientes para esse hotel! tente outro na mesma cidade.');
                isReserved = true;
            };
        };

        if (isReserved === false) {
            respostaCliente.push('Não foi possivel fazer a reserva, o ID do hotel está errado!');
        };

        return respostaCliente.join('\n');
    };

    cancelarReserva(idReserva, idHotel, nomeCliente, data) {
        let respostaCliente = [];
        let isBooked = false;

        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].idReserva === idReserva && this.reservas[i].nomeCliente === nomeCliente && this.reservas[i].data === data) {
                for (let j = 0; j < this.hoteis.length; j++) {
                    if (this.hoteis[j].idHotel === idHotel) {
                        this.hoteis[j].quartosDisponiveis++;
                    };
                };

                this.reservas = this.reservas.filter(reserva => reserva.idReserva !== idReserva);

                isBooked = true;

                respostaCliente.push(`A reserva ID: ${idReserva} do dia ${data} foi cancelada com sucesso, ${nomeCliente}!`);
            }
        };

        if (isBooked === false) {
            respostaCliente.push('Não há nenhuma reserva com os dados informados! Insira os dados novamente e verifique se todos estão corretos.');
        };

        return respostaCliente.join('\n');
    };

    listasReservas(nomeCliente) {
        let respostaCliente = [];
        let isListed = false;

        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].nomeCliente === nomeCliente) {
                const idHotel = this.reservas[i].idHotel;
                const buscarHotel = this.hoteis.find(hotel => hotel.idHotel === idHotel);

                isListed = true;

                respostaCliente.push(`A reserva ID: ${this.reservas[i].idReserva} está no seu nome, no hotel ${buscarHotel.nome} (id do hotel: ${buscarHotel.idHotel}) localizado em ${buscarHotel.cidade}. Essa reserva foi feita para a data: ${this.reservas[i].data}`);
            };
        };

        if (isListed === false) {
            respostaCliente.push(`Infelizmente não há nenhuma reserva no nome de ${nomeCliente}.`);
        };

        return respostaCliente.join('\n');
    };

    fazerCheckIn(nomeCliente, idReserva, data) {
        let respostaCliente = [];
        let isCheck = false;

        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].idReserva === idReserva && this.reservas[i].nomeCliente === nomeCliente && this.reservas[i].data === data) {
                respostaCliente.push(`CheckIn feito! Boa estadia ${nomeCliente}, aproveite bem o hotel!`);
                this.checkIns.push({idReserva: idReserva, isCheckIn: true})
                isCheck = true;
            }
        }

        if (isCheck === false) {
            respostaCliente.push('Você não possui um checkIn nesse hotel! Faça uma reserva no campo "Fazer Reserva"');
        }

        return respostaCliente.join('\n');
    }

    fazerCheckOut(nomeCliente, idReserva, idHotel) {
        let respostaCliente = [];
        let isCheck = false;

        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].nomeCliente === nomeCliente && this.reservas[i].idHotel === idHotel) {
                for (let k = 0; k < this.checkIns.length; k++) {
                    if (this.checkIns[k].idReserva === idReserva && this.checkIns[k].isCheckIn === true) {
                        let hotelIndex = this.hoteis.findIndex(hotel => hotel.idHotel === idHotel);
                        
                        if (hotelIndex !== -1) {
                            this.hoteis[hotelIndex].quartosDisponiveis++;
                        }

                        isCheck = true;

                        respostaCliente.push(`O seu checkOut está feito, espero que tenha aproveitado, ${nomeCliente}!`);
                        this.reservas.splice(i, 1);
                        break;
                    }
                };
            };
        };

        if (isCheck === false) {
            respostaCliente.push(`Não foi possivel efetuar o checkout, Verifique se você já fez o checkIn primeiramente ou se as informações estão corretas e tente novamente!`);
        }

        return respostaCliente.join('\n');
    }

    fazerAvaliacao(nomeCliente, nomeHotel, idHotel, estrelas) {
        let respostaCliente = [];
        let isAvaliated = false;

        for (let i = 0; i < this.hoteis.length; i++) {
            if (this.hoteis[i].idHotel === idHotel && this.hoteis[i].nome === nomeHotel) {
                respostaCliente.push(`Obrigado pela avaliação de ${estrelas} estrelas, ${nomeCliente}! O hotel ${nomeHotel} agradece.`)
                isAvaliated = true;
            }
        };

        if (isAvaliated === false) {
                respostaCliente.push('Não foi possível realizar a sua avaliação!')
            }

        return respostaCliente.join('\n');
    }
};