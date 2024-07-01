let numeros = [1, 2, 3]

function multiplicar(num) {
    return num**2
}

let numerosAoQuadrado = numeros.map((item)=> multiplicar(item))
console.log(numeros)
console.log(numerosAoQuadrado);
