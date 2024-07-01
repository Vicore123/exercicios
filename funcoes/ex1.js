let inicio = Number(prompt('ponto de inicio'))
let final = Number(prompt('ponto final'))

function somarIntervalos(inicio = 0, final = 0) {
    
    let resultado
    let valorAnterior = 0

    for (i=inicio; i<=final; i++) {
        resultado = valorAnterior + i
        valorAnterior = resultado
    }

    return resultado
}

console.log(somarIntervalos(inicio, final))