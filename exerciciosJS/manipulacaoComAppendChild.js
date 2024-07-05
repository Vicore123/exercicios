let div = document.querySelector('div')

let nome = document.createElement('h1')
nome.innerHTML = 'Nome'
div.appendChild(nome)

let lista = document.createElement('ul')
div.appendChild(lista)

let item1 = document.createElement('li')
item1.innerHTML = 'Idade'
lista.appendChild(item1)

let item2 = document.createElement('li')
item2.innerHTML = 'Endereço'
lista.appendChild(item2)



let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


numeros.forEach((numero)=> {
    let i = document.createElement('p')
    i.innerHTML = numero
    div.appendChild(i)
})
