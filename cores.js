


function cores (usuario){

    
    let cor1 = "azul";
    let cor2 = "vermelho";
    let cor3 = "amarelo";
    if (usuario == cor1 || usuario == cor2 || usuario == cor3){
        console.log("Essa cor é Primaria!");
    } else{
        console.log(`Essa Cor Não é Primaria! Ela é ${usuario}`);
    }
    
}

cores("verde");