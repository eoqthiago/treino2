


function farol( usuario){
    let amarelo = "amarelo";
    let verde = "verde";
    let vermelho = "vermelho";

    if ( usuario == verde){
        console.log(`Pode Atravesar a Rua o Farol está ${verde}`);
    } else if (usuario == vermelho){
        console.log(`Não Pode Atravessar a Rua o Farol Está ${vermelho}`);
    } else if (usuario == amarelo){
        console.log(`Não Pode Atravessar a Rua o Farol Está ${amarelo}`);
    } else {
        console.log(" ERRO! Usuario Não informou uma cor legivel para este programa!");
    }

}

farol("vermelho");





// LIÇÃO 18


// Parâmetros
// São definidos na declaração (ou assinatura) da função/método;
// Os parâmetros de uma função recebem os argumentos;
// O nome de cada parâmetro serve como uma variável local dentro da função;
// Uma boa mnemónica é pensar que um Parâmetro é como um Placeholder para um Potencial valor.

// Argumentos 
// Representam os valores/variáveis atuais passadas para os parâmetros da função, quando é invocada;
// Cada argumento corresponde a um parâmetro (na mesma posição);
// Uma boa mnemónica é pensar que um Argumento é o valor Atual.


function podeAtravessar (farol){
    let Atravessar = farol == "verde" // se o farol for igual a cor Verde...
    return Atravessar;
    
}

let x = podeAtravessar("verde");
console.log(x);




