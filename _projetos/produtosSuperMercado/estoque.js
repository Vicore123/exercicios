const Bebida = require('./bebida')
const Alimento = require('./alimento')

class Estoque {
   constructor (estoque) {
      this.estoque = estoque
   }

   adicionar() {

   }
   remover(nomeProduto){
      this.estoque = this.estoque.filter(p => p.nome != nomeProduto)
   }
   listarProdutos() {
      this.estoque.forEach(produto => produto.exibirInfo())
   }
}