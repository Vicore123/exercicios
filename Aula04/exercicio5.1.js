// Uma loja tem uma política  de descontos de acordo com o valor da compra do cliente. Os descontos começam acima dos R$500. A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%. Por exemplo: R$500 = 1%; R$600,00 = 2% ... Faça um programa que exiba essa tabela de descontos no seguinte formato:
// Valor da Compra - porcentagem de desconto - Valor Final

let min = 1
let max = 25
let valorCompra = 500
let incrementoCompra = 100

for (let i = min ; i <= max; i++) {
    let valorFinal = valorCompra - (valorCompra * i/100)
    console.log(`Valor Compra: R$ ${valorCompra} - ${i}% - Valor Final: valor Final: R$ ${valorFinal}`)
    valorCompra+= incrementoCompra
}
