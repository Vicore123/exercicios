// Escreva um programa que leia 10 números e escreva o menor valor lido e o maior valor lido.

let valorLido = Number()
let numMaior = Number()
let numMenor = Number()

for (let i=1; i<=10; i++) {
    valorLido = Number(prompt(`Digite o ${i} numero`))

    if (i==1) {
        numMenor = valorLido
        numMaior = valorLido
    }

    if (valorLido < numMenor) {
        numMenor = valorLido
    }
    else if (valorLido > numMaior){
        numMaior = valorLido
    }
}

console.log(`O maior numero é ${numMaior}`)
console.log(`O menor numero é ${numMenor}`)