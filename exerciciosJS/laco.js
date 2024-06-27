// repertir 3x São longuinho

let quantasVezes = 3
let i = 1
let acumulador = 0

// a cada vez que chamar sao longuinho granhará 100 reais
while(i<=quantasVezes) {
    console.log('São Longuinho')
    console.log('Ganhou 100')
    acumulador += 100
    i+=1
}

// Escreva de 0 a 10 de 2 em 2
console.log('')
i = 0
quantasVezes = 10

while(i<=quantasVezes) {
    console.log(i)
    i += 2
}

// faça a soma de todos os número pares de 0 a 100 e mostre o resultado no console
console.log('')
i = 0
let final = 100
let valor = 0

while (i <= final) {
    valor += i
    i += 2
}

console.log(valor)

// fazer a soma de todos os números pares OU divisiveis por 5 no intervalo de 0 a 100
console.log('')
i = 0
final = 100
valor = 0

while (i <= final) {
    if (i%2 == 0 || i%5 == 0) {
        valor += i
    }
    i += 1
}

console.log(valor)