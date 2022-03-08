public double reaisEmDolar (double reais)
{
    double converterReaisEmDolar = reais * 0.20;
    return converterReaisEmDolar;
}

double x = reaisEmDolar(20);
Console.WriteLine("Aproximadamente {0} Dolares",x);