let frutas = ['maça', 'uva', 'banana']
let numeros = [1, 2, 3, 4]

// sem necessidade de armazenar retorno
frutas.forEach((FRUTA)=> console.log(FRUTA.toUpperCase()))


let numerosDobro = numeros.map((num)=> {
        return num*2
    })


console.log(numerosDobro);