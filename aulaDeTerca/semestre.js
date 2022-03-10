
// const meses = [
//     {mes: 'janeiro'},
//     {mes: 'fevereiro'},
//     {mes: 'marco'},
//     {mes: 'abril'},
//     {mes: 'maio'},
//     {mes: 'junho'},
// ];



// const mesesPrimarios = meses.filter(meses =>{
//     return meses !== 'janeiro';
// })

// console.log(mesesPrimarios);

// function mes (atual){
//     let x = atual == "Janeiro" || atual == "Fevereiro" || atual == "Marco" || 
//     atual == "Abril" || atual == "Maio" ||atual == "Junho";

//     return x;
// }

// let x = mes("Janeiro");
// console.log("O Mes é Primario:", x);


// function mes (atual){

//     let retorno = atual;
//     if (retorno == "Janeiro" || retorno == "Fevereiro" || retorno == "Marco" || 
//     retorno == "Abril" || retorno == "Maio" ||retorno == "Junho"){
//         console.log(`o Mes ${retorno} é do Primeiro Semestre`);
//         // MES
//     } else if (retorno == "Julho" || retorno == "Agosto" || retorno == "Setembro" || 
//     retorno == "Outubro" || retorno == "Novembro" ||retorno == "Dezembro"){
//        console.log(`o Mes ${retorno} é Segundo Semestre`);

//     } else {
//         console.log("Não informou um mes Valido");
//     }
//     return retorno;
// }

// let x = mes("Janeiro");
// console.log(x);


function mes (atual){

    let retorno = atual;
    if (retorno == "Janeiro" || retorno == "Fevereiro" || retorno == "Marco" || 
    retorno == "Abril" || retorno == "Maio" ||retorno == "Junho"){
        console.log(`o Mes ${retorno} é do Primeiro Semestre`);
        // MES
    } else if (retorno == "Julho" || retorno == "Agosto" || retorno == "Setembro" || 
    retorno == "Outubro" || retorno == "Novembro" ||retorno == "Dezembro"){
       console.log(`o Mes ${retorno} é Segundo Semestre`);

    } else {
        console.log("Não informou um mes Valido");
    }
    return retorno;
}

let x = mes("Janeiro");
console.log(x);

