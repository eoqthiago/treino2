


public double compras(double usuario)
{
    
    double pedido = 15;
    double cupom = 20;

    double soma1 = (pedido * cupom) / 100;
    double soma2 = pedido - soma1;
    double soma = usuario - soma2;

    if ( usuario < pedido)
    {
        Console.WriteLine("Seu saldo é Insuficiente!");
    }
    else if (usuario >= pedido)
    {
        Console.Write("Seu Pedido Já esta sendo Feito: Saiu Por R${0} pedido usando o cupom de {1}% saiu por: R${2} seu saldo é de: R${3}", pedido, cupom, soma2, soma);
    }
    
    
    
    return soma;

}

double x = compras(50);
Console.WriteLine(x)

