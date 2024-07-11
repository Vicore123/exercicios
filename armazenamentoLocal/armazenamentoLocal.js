let meuObjeto = [{
   nome: 'Cadeira',
   cor: 'vermelha',
   perco: '25'
}]

localStorage.setItem('nome da chave', JSON.stringify(meuObjeto))

let carrinho = JSON.parse(localStorage.getItem('nome da chave'))

carrinho.push({nome: 'mesa', cor:'vermelha', preco:50})

localStorage.setItem('nome da chave', JSON.stringify(carrinho))

localStorage.clear()