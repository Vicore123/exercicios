// Mostre no console o nome da pessoa e quanto ela recebe em um texto formatado, para todos os itens do array, com uma string formatada.
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

let nomePessoas = pessoas.map((elemento)=> elemento.nome)
console.log(nomePessoas);

let quantoRecebe = pessoas.map((elemento)=> elemento.salario + elemento.gratificacao)
console.log(quantoRecebe);

for (let i = 0; i < pessoas.length; i++) {
    console.log(`${nomePessoas[i]} recebe R$${quantoRecebe[i]}`);
}
