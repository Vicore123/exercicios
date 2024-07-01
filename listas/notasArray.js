// Crie uma função que armazena 3 notas lidas do usuário, em um array. O último elemento do array será a media calculada a partir das notas informadas pelo usuário.
// Retorne o array

let notas = []
let quantidadeDeNotas = 3
for (let i=0; i<quantidadeDeNotas; i++) {
    notas[notas.length] = Number(prompt(`Digite a ${i} nota`))
}

// media
function media(){

    let x = notas.length
    let soma = 0
    let contagem

    for (let i=0; i<x; i++) {
        soma += notas[i]
        contagem = i+1
    }
    notas[notas.length] = soma/contagem 

    return notas
}

console.log(media())