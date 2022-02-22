public double dobro (double numero)
{
    double x = numero * 2;
    return x;
}

double resultado = dobro(4);
Console.WriteLine(resultado);

// TRIPLO


public double triplo (double numero)
{
    double y = numero * 3;
    return y;

}

double receba = triplo(5);
Console.WriteLine(receba);

// metade


public double dividir (double numero)
{ 
    double y = numero / 2;
    return y;
}

double t = dividir(8);
Console.WriteLine(t);

//AREA DO QUADRADO

public double aoquadrado (double lado)
{
    double area = lado * lado;
    return area;
}
double quadrado = aoquadrado(8);
Console.WriteLine(quadrado);

// area do retangulo

public double retangulof (double bas, double altura)
{
    double p = bas * altura;
    return p;
}

double u = retangulof (6, 7);
Console.WriteLine(u);

//AREA DO TRIANGULO

public double triangulof (double bas, double altura)
{
    double area = (bas * altura) / 2;
    return area;
}
double arearesult = triangulof(8, 10);
Console.WriteLine(arearesult);

//octagono

public double octagono (double centimetros, double lados)
{
    double resultado = centimetros * lados;
    return resultado;
}

double octagonoresultado = octagono(10, 2);
Console.WriteLine(octagonoresultado);

// MEDIA 3 NOTAS

public double notas (double nota1, double nota2, double nota3)
{
    double resultado = (nota1 + nota2 + nota3) / 3;
    return resultado;
}

double notasp = notas(8, 7, 9);
Console.WriteLine(notasp);


//MEDIA 5

public double notasMedia (double nota1, double nota2, double nota3, double nota4, double nota5)
{
    double resultado = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    return resultado;
}

double notasm = notasMedia(6, 9, 7, 9,6);
Console.WriteLine(notasm);

//Hipo

public double hipo (double cateto1, double cateto2)
{
    return Math.Sqrt(Math.Pow(cateto1, 2) + Math.Pow(cateto2, 2));

}
double HipoCalculo = hipo(4, 5);
Console.WriteLine( HipoCalculo);