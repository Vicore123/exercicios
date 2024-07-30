const Animal = require('./animal')

class AnimaisVoadores extends Animal {
   constructor (especie, tamanho, cor, nome, qtdAsas) {
      super(especie, tamanho, cor, nome)
      this.qtdAsas = qtdAsas
   }

   voar(){
      console.log(`O animal ${this.getNome()} voou`)
   }
}

class AnimaisNadadoresVoadores extends AnimaisVoadores {
   constructor(especie, tamanho, cor, nome, qtdAsas){
      super(especie, tamanho, cor, nome, qtdAsas)
   }

   nadar(){
      console.log(`O animal ${this.getNome()} nadou`)
   }
}

class VoaNadaAnda extends AnimaisNadadoresVoadores {
   constructor(especie, tamanho, cor, nome, qtdAsas){
      super(especie, tamanho, cor, nome, qtdAsas)
   }

   andar(){
      console.log(`O animal ${this.getNome()} andou`)
   }
}

const animal1 = new AnimaisVoadores('Pássaro', 'Pequeno', 'Azul', 'Arara', 2);
console.log(animal1);
const animal2 = new AnimaisNadadoresVoadores('Pato', 'Médio', 'Verde', 'Pato', 2);
console.log(animal2);
const animal3 = new VoaNadaAnda('Pinguim', 'Médio', 'Preto e Branco', 'Pinguim', 0);
console.log(animal3);