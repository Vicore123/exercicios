let valor = document.getElementById('valor')
let quantidade = document.getElementById('quantidade')
let cor = document.getElementsByName('radio')
let descontos = [0.5, 0.3, 0.15]

function calcular() {

    let desconto
    for (let i=0; i<cor.length; i++) {
        if (cor[i].checked == true) {
            desconto = descontos[i]
        }
    }

    if (quantidade.value > 2) {
        desconto += 0.1
    }

    let valorTotal = quantidade.value * valor.value
    valorTotal -= valorTotal * desconto

    document.getElementById('resultados').innerHTML = `

    <p>Preço Original: R$${valor.value}</p>
    <p>Valor Total da compra: R$${valorTotal}</p>

    `
}