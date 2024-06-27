// Uma loja tem uma política  de descontos de acordo com o vvalor da compra do cliente. Os descontos começam acima dos R$500. A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 35%. Por exemplo: R$500 = 1%; R$600,00 = 2% ... Faça um programa que exiba essa tabel de descontos no seguinte formato:
// Valor da Compra - porcentagem de desconto - Valor Final

let valordaCompra = 0
let porcentagem = 0.01
let desconto = 0
let valorFinal = 0

valordaCompra = Number(prompt('Qual foi o valor da compra?'))

if (valordaCompra > 500) {
    
    desconto = (valordaCompra/100) -4
    desconto = Math.trunc(desconto)
    if (desconto > 25) {
        desconto = 25
    }
    console.log(desconto)

    valorFinal = valordaCompra - valordaCompra*(porcentagem*desconto)
}
else {
    valorFinal = valordaCompra
}

console.log(`Valor da Compra - ${valordaCompra}; \n porcentagem de desconto - ${desconto}; \n Valor Final - ${valorFinal}`)
