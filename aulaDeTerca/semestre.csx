public string mes ( string atual)
{
    string retorno = atual;
    if (retorno == "Janeiro" || retorno == "Fevereiro" || retorno == "Marco" || 
    retorno == "Abril" || retorno == "Maio" ||retorno == "Junho"){
        Console.WriteLine("o Mes {0} é do Primeiro Semestre", retorno);
        // MES
    }
     else if (retorno == "Julho" ||retorno == "Agosto" || retorno == "Setembro" || 
    retorno == "Outubro" || retorno == "Novembro" ||retorno == "Dezembro"){
       Console.WriteLine("o Mes {0} é Segundo Semestre", retorno);

    } 
    else {
        Console.WriteLine("Não informou um mes Valido");
    }

    return retorno;
}

string x = mes("Janeiro");
Console.WriteLine(x);