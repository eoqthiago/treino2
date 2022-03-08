public double ConverterKilos (double kilos)
{
    double ConverterKilosEmGramas = kilos * 1000;
    return ConverterKilosEmGramas;
}

double x = ConverterKilos(20);
Console.WriteLine(x);