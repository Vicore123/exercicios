let arrayNotas = [1, 2, 3]
console.log(arrayNotas);

// adiciona ao final
arrayNotas[arrayNotas.length] = 'A' 
console.log(arrayNotas);

arrayNotas.push('B')
console.log(arrayNotas);

// exclusão do ultimo elemento e atribuição
let excluido = arrayNotas.pop()
console.log(arrayNotas);



// adiciona ao inicio
arrayNotas.unshift('inicio')
console.log(arrayNotas);

// remover do inicio
arrayNotas.shift()
console.log(arrayNotas);