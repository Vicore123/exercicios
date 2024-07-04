// Exiba o valor total das gratificações. Utilize reduce. 
let pessoas = [
    {
        nome: "Ana Silva",
        cargo: "Analista de Marketing",
        salario: 6000,
        gratificacao: 500,
        idade: 28
    }, 
    {
        nome: "Pedro Santos",
        cargo: "Engenheiro Civil",
        salario: 8000,
        gratificacao: 700,
        idade: 35
    }, 
    {
        nome: "Maria Oliveira",
        cargo: "Contadora",
        salario: 7000,
        gratificacao: 600,
        idade: 32
    }, 
    {
        nome: "Carlos Lima",
        cargo: "Programador",
        salario: 6500,
        gratificacao: 550,
        idade: 30
    }, 
    {
        nome: "Juliana Costa",
        cargo: "Advogada",
        salario: 9000,
        gratificacao: 800,
        idade: 40
    }
]

let valorTotalGratificacoes = pessoas.reduce((soma, elemento)=> soma += elemento.gratificacao, 0)
console.log(valorTotalGratificacoes);