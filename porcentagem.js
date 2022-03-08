



function compras( usuario){
    let pedido1 = 15;
    let desconto = 20;
    let cupom = desconto;

    let soma1 = pedido1 - (pedido1 * desconto) / 100;
    let soma = usuario - soma1;
    if ( usuario < pedido1){
        console.log("Seu saldo é Insuficiente!")
    } else if (usuario >= pedido1){
        console.log(`Seu Pedido Já esta sendo Feito: Saiu Por R$${pedido1} usando o cupom de ${cupom}% saiu por: ${soma1} seu saldo é de: R$${soma} ` );

    } 
}
compras(100);