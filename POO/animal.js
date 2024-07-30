class Animal {
   #nome
   constructor(especie, tamanho, cor, nome) {
      this.especie = especie
      this.tamanho = tamanho
      this.cor = cor
      this.#nome = nome
   }

   falar() {
      console.log(`O animal ${this.#nome} fez algum som`)
   }
   comer() {
      console.log(`O animal ${this.#nome} comeu`)
   }
   dormir() {
      console.log(`O animal ${this.#nome} dormiu`)
   }

   getNome(){
      return this.#nome
   }
   setNome(nome) {
      this.#nome = nome
   }
}

const animal1 = new Animal('gato', 'gordo', 'laranja', 'Cleitinho')
console.log(typeof(animal1))

const animal2 = new Animal('cachorro', 'pequeno', 'branco', 'Belinha')
console.log(animal2)
animal2.comer()

module.exports = Animal