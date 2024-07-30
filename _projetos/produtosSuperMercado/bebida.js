const Produto = require('./produto')

class Bebida extends Produto {
   constructor(nome, preco, dataValidade, volume, Alcoolico) {
      super(nome, preco, dataValidade)
      this.volume = volume
      this.Alcoolico = Alcoolico
   }

   exibirInfo(){
   console.log(`Nome: ${this.nome}\n Preço: ${this.getPreco()}\n Data de Validade: ${this.dataValidade}\n Volume: ${this.volume}\n Alcoolico: ${this.Alcoolico}`)

   }
}

module.exports = Bebida