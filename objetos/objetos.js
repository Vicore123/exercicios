let enderecoArray = ['Rua', 'Bairro', 'Cidade', 'Estado', 'CEP']

for (let i = 0; i < enderecoArray.length; i++) {
    console.log(enderecoArray[i])
}
for (let elemento in enderecoArray) {
    console.log(enderecoArray[elemento]);
}

let endereco = {rua: 'Rua', bairo: 'Bairro', cidade: 'Cidade', estado: 'Estado', CEP: 'CEP'}

let pessoa = {
    nome:'Emily', 
    idade:'22', 
    altura:'1.70', 
    peso:80, 
    calcularIMC: function(){
        return pessoa.peso/(pessoa.altura**2)
    }
}

for (let elemento in pessoa) {
    console.log(pessoa[elemento]);
}





console.log(`Me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos de idade, ${pessoa.altura} de altura e peso ${pessoa.peso}KG`)

pessoa.corFavorita = 'azul'

delete pessoa.idade

console.log(pessoa.calcularIMC());

let quantidade = Object.keys(pessoa).length
console.log(quantidade);