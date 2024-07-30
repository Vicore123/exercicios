const Produto = require('./produto')

class Alimento extends Produto {
   
   constructor (nome, preco, dataValidade, peso, perecivel) {
      super(nome, preco, dataValidade)
      this.peso = peso
      this.perecivel = perecivel
   }

   exibirInfo() {
      console.log(`Nome: ${this.nome}\n Preço: ${this.getPreco()}\n Data de Validade: ${this.dataValidade}\n Peso: ${peso}\n Perecivel: ${this.perecivel}`)
   }
}

module.exports = Alimento