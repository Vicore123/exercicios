let nome = document.getElementById('nome')
let peso = document.getElementById('peso')
let altura = document.getElementById('altura')

function calcularIMC() {
    let pesoUser = peso.value
    let alturaUser = altura.value
    let resultado = pesoUser/(alturaUser**2)
    document.getElementById('resultados').innerHTML = `<p>Oi ${nome.value}, seu IMC é igual a ${resultado.toFixed(2)}</p>`
}
