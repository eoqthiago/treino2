public string ComprasParcela  (double valor, double vezes, double parcelas)
{
    string ImplementarNome = string.Concat("sua Compra de R$", valor, " em ", vezes, "x de R$", parcelas, " foi concluida");
    return ImplementarNome;
}

string x = ComprasParcela(1200, 10, 120);
Console.WriteLine(x);