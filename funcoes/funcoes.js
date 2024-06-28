
function dizerOi() {
    console.log('oi')
}

function calcularMedia(n1, n2, n3=10) {
    let media = (n1 + n2 + n3)/3
    console.log(media)
    return media
}

calcularMedia(8, 8, 9)
calcularMedia(8, 8, 9, 10)
calcularMedia(8, 8)
let mediaFinal = calcularMedia(8, 8, 5)
console.log(mediaFinal)