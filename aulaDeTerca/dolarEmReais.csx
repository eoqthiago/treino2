public double DolarEmReais (double dolar)
{
    double ConverterDolarEmReais = dolar * 5.05;
    return ConverterDolarEmReais;
}

double x = DolarEmReais(20);
Console.WriteLine("Aproximadamente {0} Reais", x);