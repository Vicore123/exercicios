// Faça um programa que receba dez números e usando laços de repetição mostre a quantidade de números inteiros entre 30 e 90

let numero
let contagem = 0

for (let i=1; i<=10; i++) {
    numero = Number(prompt(`Digite o ${i}º número`))

    if (30 < numero && numero < 90) {
        contagem += 1
    }
}

console.log(`There is ${contagem} numbers between 30 and 90`)