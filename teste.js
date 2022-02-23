

function compras(){
    let usuario = 10;
    let pedido1 = 15;
    let pedido2 = 25;
    let desconto = 20;

    let cupom = (pedido1 * desconto) / 100;

    let soma1 = pedido1 - cupom;
    let soma = usuario - soma1;

    if ( usuario < pedido1){
        console.log("Seu saldo é Insuficiente!")
    } else if (usuario >= pedido1){
        console.log(`Seu Pedido Já esta sendo Feito: Arroz, Frango e Feijão Por R$15 usando o cupom de R$ ${cupom} saiu por:`, pedido1 - cupom, ` seu saldo é de: ${soma}` );

    } 
}
compras();