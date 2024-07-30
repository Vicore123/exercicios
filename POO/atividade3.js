class Veiculo {
   constructor(marca, modelo, anoFabricacao, preco) {
      this.marca = marca
      this.marca = modelo
      this.anoFabricacao = anoFabricacao
      this.preco = preco
   }

   ExibirInfo(){
      console.log('info');
   }
}

class Carro extends Veiculo {
   constructor(marca, modelo, anoFabricacao, preco, numPortas, combustivel) {
      super(marca, modelo, anoFabricacao, preco)
      this.numPortas = numPortas
      this.combustivel = combustivel
   }

   // Sobrecarga
   ExibirInfo() {
      super.ExibirInfo()
      console.log(`Quantidade de portas: ${this.numPortas}`);
   }
}

class Moto extends Veiculo {
   constructor(marca, modelo, anoFabricacao, preco, cilindrada, partida) {
      super(marca, modelo, anoFabricacao, preco)
      this.cilindrada = cilindrada
      this.partida = partida
   }

   // Sobrescrita
   ExibirInfo(){
      console.log(`Marca: ${this.marca}`)
   }
}