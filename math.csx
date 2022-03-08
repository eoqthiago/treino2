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

// Implementar uma função para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é

// function mesmoquadrado (lado1, lado2){
//     let area1 = lado1 * lado1;
//     let area2 = lado2 * lado2;

//     let igual = area1 == area2;
//     return igual;
// }

// let quadrados = mesmoquadrado(3, 3);
// console.log("OS QUADRADOS POSSUI A MESMA AREA: ", quadrados);

// public bool qua( double lado1, double lado2)
// {
//     double area1 = lado1 * lado1;
//     double area2 = lado2 * lado2;
//     bool igual = area1 == area2;
//     return igual;
// }

// bool ae = qua(2, 2);
// Console.WriteLine("resultado: {0}", ae)


public bool passou (double n1, double n2, double n3)
{
    double notas = (n1 + n2 + n3) / 3;
    bool media = notas >= 5;
    return media; 
}

bool passou1 = passou(4, 9, 2);
Console.WriteLine(passou1);



public bool retangulos (double bas1, double alt1, double bas2, double alt2)
{
    double area1 = bas1 * alt1;
    double area2 = bas2 * alt2;
    bool resultado = area1 == area2;
    return resultado;
}

bool resu = retangulos(6, 7, 4, 3);
Console.WriteLine(resu);


public bool triangulos (double bas1, double alt1, double bas2, double alt2, double bas3, double alt3)
{
    double area1 = (bas1 * alt1) / 2;
    double area2 = (bas2 * alt2) / 2;
    double area3 = (bas3 * alt3) / 2;
    bool resultado = area1 == area2 && area1 == area3;
    return resultado;
}

bool resx = triangulos(10, 10, 10, 10, 10, 10);
Console.WriteLine(resx);
