let CEP = Number(prompt('Digite o CEP'))
let nomeRua = prompt('Digite a Rua')
let N = Number(prompt('Digite o Numero '))
let bairro = prompt('Digite o Bairro')
let cidade = prompt('Digite a Cidade')

let endereco = [CEP, nomeRua, N, bairro, cidade]
console.log(endereco)

let tamanho = endereco.length
console.log(tamanho)