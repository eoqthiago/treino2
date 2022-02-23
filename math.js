
function dobro (numero) {
    let d = numero * 2 ;
    return d;
}

let x = dobro (2);
console.log ("resulato do valor", x);


//TRIPO

function triplo (numero){
    let f = numero * 3;
    return f;
}

let t = triplo(5);
console.log("resultado triplo:", t);

// Metade


function dividido (numero) {
    let w = numero / 2;
    return w;
    

}

let z = dividido (8); 
console.log ('Divisão do Valor', z); 

// AREA DO QUADRADO

function aoquadrado (lado) {
    let q = lado * lado;
    return q;
}

let o = aoquadrado (8);
console.log("Resultado aoquadrado", o);

// area do retangulo

function retangulof (bas, altura) {
    let p = bas * altura;
    return p;
}

let u = retangulof (6, 7);
console.log ("resultado do retangulo", u);


// area do triangulo

function triangulof (bas, altura) {
    let area = (bas * altura) / 2;
    return area;
}

let arearesult = triangulof(8, 10);
console.log("Resultado Area Do Triangulo", arearesult, "m²");


//PERIMETRO OCTAGONO

function octagono (centimetros, lados){
    let resultado = centimetros * lados;
    return resultado;
}

let octagonoresultado = octagono(10, 2);
console.log("Perimetro o Octagono: ",octagonoresultado);


//MEDIA 3 NOTAS

function notas (nota1, nota2, nota3){
    let resultado = (nota1+ nota2 + nota3) / 3;
    return resultado;
}

let notasp = notas(8, 7, 9);
console.log("Notas somadas em Tres: ", notasp);


// MEDIA 5

function notasMedia (nota1, nota2, nota3, nota4, nota5){
    let resultado = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    return resultado;

}

let notasm = notasMedia (6, 9, 7, 9, 6);
console.log("Notas Media em Cinco: ", notasm);


//HIPO
// Math.pow eleva o numero
// Math.sqrt retorna a raiz quadrada de um numero
function hipo (cateto1, cateto2){
    return Math.sqrt(Math.pow(cateto1 , 2) + Math.pow(cateto2, 2));
}

let HipoCalculo = hipo(4, 5); 
// catetos elevado ao quadrado, depois da soma, dará um resultado que será a Raiz e depois retornara a raiz quadrada de um numero

console.log ("Calculo Hipotenusa", HipoCalculo);


// Implementar uma função para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 5

function passou (nota1, nota2, nota3){
    let notas = (nota1 + nota2 + nota3) / 3;
    let media = notas >= 5;
    return media;
}

let passou1 = passou(4, 9, 2);
console.log("ALUNO PASSOU DE ANO: ",passou1);


//Implementar uma função para verificar se dois quadrados possuem a mesma área.

function mesmoquadrado (lado1, lado2){
    let area1 = lado1 * lado1;
    let area2 = lado2 * lado2;

    let igual = area1 == area2;
    return igual;
}

let quadrados = mesmoquadrado(3, 3);
console.log("OS QUADRADOS POSSUI A MESMA AREA: ", quadrados);

//Implementar uma função para verificar se dois retângulos possuem a mesma área.

function retalgulos (bas1, alt1, bas2, alt2){
    let area1 = bas1 * alt1;
    let area2 = bas2 * alt2;
    let igual = area1 == area2;
    return igual;
}

let resultadoRetangulo = retalgulos(6, 7, 6, 7);
console.log("OS RETANGULOS POSSUI A MESMA AREA: ", resultadoRetangulo);

//Implementar uma função para verificar se três triângulos possuem a mesma área.

function triangulos (bas1, alt1, bas2, alt2, bas3, alt3){
    let area1 = (bas1 * alt1) / 2;
    let area2 = (bas2 * alt2) / 2;
    let area3 = (bas3 * alt3) / 2;

    let resultado = area1 == area2 && area3;
    return resultado;
}

let areas = triangulos(15, 20, 7, 13, 16, 9);
console.log("OS 3 TRIANGULOS POSSUI A MESMA AREA: ",areas);






