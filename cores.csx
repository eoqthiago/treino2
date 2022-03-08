public string cores (string usuario)
{
    string cor1 = "azul";
    string cor2 = "vermelho";
    string cor3 = "amarelo";
    string a = " ";
    if (usuario == cor1 || usuario == cor2 || usuario == cor3){
        Console.WriteLine("Essa cor é Primaria!");
    } else{
        Console.WriteLine("Essa Cor Não é Primaria! Ela é {0}", usuario);
    }
     return a;
}

string x = cores("azul");
Console.WriteLine(x);