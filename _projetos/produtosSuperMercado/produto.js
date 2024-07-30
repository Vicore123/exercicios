class Produto {
   #preco
   constructor(nome, preco, dataValidade) {
      this.nome = nome
      this.#preco = preco
      this.dataValidade = dataValidade
   }

   exibirInfo(){
      console.log(`Nome: ${this.nome}\n Preço: ${this.#preco}\n Data de Validade: ${this.dataValidade}`)
   }
   getPreco() {
      console.log(this.#preco)
   }
   setPreco(preco) {
      this.#preco = preco
   }
}

module.exports = Produto