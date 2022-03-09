public string MeuNome (string nome)
{
    string ImplementarNome = string.Concat("Bem Vindo, ", nome);
    return ImplementarNome;
}

string x = MeuNome("Thiago");
Console.WriteLine(x);