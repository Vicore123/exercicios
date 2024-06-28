// função que recebe o nome e a idade de uma pessoa como parâmetro e mostre no console o nome e a idade e depois retorne apenas o nome

function dados(nome, idade) {
    console.log(`Nome: ${nome}, idade: ${idade}`)
    return nome
}

n1 = dados('vinis', 40)

console.log(n1)