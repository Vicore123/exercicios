// Crie um array com 5 produtos.
// Cada produto deve ser um objeto com as propriedades nome, preço, cor, tamanho e disponibilidade.
// Crie um método calcularDesconto que recebe um número e retorna o preço com desconto.
// Crie um método alterar disponibilidade. Se a disponibilidade estiver true, altere para false e vice-versa.

let produtos = []

for (i=1; i<=5; i++) {

    let produto = {
        nome: prompt(`nome do ${i}º produto`), 
        preco: Number(prompt(`preço do ${i}º produto`)), 
        cor: prompt(`cor do ${i}º produto`), 
        tamanho: Number(prompt(`tamanho do ${i}º produto (somente numeros)`)), 
        disponibilidade: confirm(`disponibilidade do ${i}º produto ("Ok" para existente e "Cancelar" para inexistente)`), 
        valordoDesconto: Number(prompt(`valor do desconto do ${i}º produto (somente numeros)`)), 
        calculoDesconto: function() {
            return this.preco * (1 - this.valordoDesconto/100)
        }, 
        alterarDisponibilidade: function() {

        }
    }

    produtos.push(produto)
}

console.log(produtos);


let produto2 = JSON.stringify(produtos[2])

