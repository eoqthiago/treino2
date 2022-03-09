function comprasParcela (valor, vezes, parcelas){
    let converteParcela = `sua Compra de R$${valor} em ${vezes} x de R$ ${parcelas} foi concluida`;
    return converteParcela;
}

let x = comprasParcela(1200, 10, 120);
console.log(x);


function comprasParcela (valor, vezes, parcelas){
    let converteParcela = " ";
    let concatenar = converteParcela.concat("sua Compra de R$", valor, " em ", vezes, "x de R$", parcelas, " foi concluida")
    return concatenar;
}

let y = comprasParcela(1200, 10, 120);
console.log(y);



