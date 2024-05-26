const sales = [{ vendedor: "João", valor: 500.00 }, { vendedor: "Maria", valor: 750.00 }, { vendedor: "João", valor: 300.00 }, { vendedor: "Ana", valor: 1200.00 }, { vendedor: "Maria", valor: 450.00 }];

function calcSales(sales) {
    const resumeObj = {};

    sales.forEach(sale => {
        const dealer = sale.vendedor;
        const value = sale.valor;

        if (resumeObj[dealer]) {
            resumeObj[dealer] += value;
        } else {
            resumeObj[dealer] = value;
        };
    });

    return resumeObj;
}

const totalSales = calcSales(sales);
console.log(totalSales);
