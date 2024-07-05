
let servico = 0
let total = 0

function alteracao() {

    let subTotal = 0
    let inputs = document.getElementsByTagName('input')

    for (let i=0;i<inputs.length-3; i++) {
        subTotal += Number(inputs[i].value)
    }
    inputs[4].value = subTotal

    servico = Number((subTotal*0.1).toFixed(2))
    inputs[5].value = servico

    total = Number(subTotal + servico)
    inputs[6].value = total

}