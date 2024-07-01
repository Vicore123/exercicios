let operacao = prompt('escolha uma operação, digite:\nsomar \nsubtrair \nmultiplicar \ndividir')
let n1 = Number(prompt('n1'))
let n2 = Number(prompt('n2'))
let resultado

function somar(n1, n2) {
    return (n1 + n2)
}

function subtrair(n1, n2) {
    return (n1 - n2)
}

function multiplicar(n1, n2) {
    return (n1 * n2)
}

function dividir(n1, n2) {
    if (n2 != 0) {
        return (n1 / n2)
    }
    else {
        return ('imposivel dividir por 0')
    }
}

function calculadora(n1, n2, operacao) {
    let funcao = eval(operacao)
    resultado = funcao(n1, n2)
    alert(`A ${operacao} entre ${n1} e ${n2} é igual a ${resultado}`)
}

calculadora(n1, n2, operacao)


 