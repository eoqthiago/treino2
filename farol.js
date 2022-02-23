


function farol(){
    let usuario = "vermelho";
    let verde = "verde";
    let vermelho = "vermelho";

    if ( usuario == verde){
        console.log(`Pode Atravesar a Rua o Farol está ${verde}`);
    } else if (usuario == vermelho){
        console.log(`Não Pode Atravessar a Rua o Farol Está ${vermelho}`)
    } else{
        console.log("Atenção! SINAL AMARELO é preciso estar atento a breve mudança no sinal que se seguirá")
    }

}

farol();