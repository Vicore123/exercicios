// construir um array de 4 objetos. Cada objeto terá as seguinets chaves: nome, nota. sendo a nota entre 0 e 10.

let alunos = [
    {
        nome: 'Ana', 
        nota: 8
    }, 
    {
        nome: 'Paulo', 
        nota: 10
    }, 
    {
        nome: 'Maria', 
        nota: 5
    }, 
    {
        nome: 'José', 
        nota: 7
    }
]

// montar um array de objetos, contendo apenas os aprovados (nota maior que 7)

let aprovados = alunos.filter((aluno)=>{
    if (aluno.nota >= 7 ) {
        return aluno
    }
})

let nomeAprovados = aprovados.map((elemento)=> elemento.nome)
console.log(nomeAprovados);


// exibir o total das notas dos aprovados
let notaAprovados = aprovados.map((elemento)=> elemento.nota)
let valorTotalAprovados = notaAprovados.reduce((soma, num)=> soma+=num)
console.log(valorTotalAprovados)