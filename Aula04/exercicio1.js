// Faça um programa que leia a nota de N alunos, em seguida exiba a média das notas

let alunos = Number(prompt('Digite o numero de alunos'))
let notas = 0

for (let i=1; i<=alunos; i++) {
    notas += Number(prompt(`Digite a nota do ${i}º aluno`))
}

let media = notas/alunos
console.log(media)