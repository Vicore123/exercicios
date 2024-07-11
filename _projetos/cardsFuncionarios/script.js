// imagem dos cards no celular

// parte de pegar funcionarios pelo local storage nao concluido

let cards = [
  {
    nome: "Carlos Oliveira",
    idade: 32,
    salario: 5200,
    cargo: "Analista de Sistemas",
    imagem: "https://picsum.photos/153"
  },
  {
    nome: "Ana Costa",
    idade: 25,
    salario: 4000,
    cargo: "Programadora",
    imagem: "https://picsum.photos/154"
  },
  {
    nome: "Lucas Rodrigues",
    idade: 27,
    salario: 4800,
    cargo: "Web Designer",
    imagem: "https://picsum.photos/155"
  },
  {
    nome: "Fernanda Lima",
    idade: 29,
    salario: 5100,
    cargo: "Analista de Marketing",
    imagem: "https://picsum.photos/156"
  }
]
function adicionarCard() {
  let nome = document.getElementById('nome').value
  let idade = document.getElementById('idade').value
  let salario = document.getElementById('salario').value
  let cargo = document.getElementById('cargo').value

  let funcionario = {
    nome:nome, 
    idade:idade,
    salario:salario,
    cargo:cargo
  }

  let funcionarios = JSON.parse(localStorage.getItem('funcionario')) || []
  funcionarios.push(funcionario)
  localStorage.setItem('funcionarios', JSON.stringify(funcionarios))

}
function pegarNome(nome, idade, salario, cargo, imagem) {
  body = document.querySelector('main')
  cardEstrutura = document.createElement('div')
  cardEstrutura.innerHTML = `
  
    <p>${nome}</p>
    <img src="${imagem}" alt="${nome}">
    <p>Cargo: ${cargo}</p>
    <p>Idade: ${idade}</p>
    <p>Salário: R$${salario}</p>
  
  `
  body.appendChild(cardEstrutura)
}

cards.forEach((pessoa)=> pegarNome(pessoa.nome, pessoa.idade, pessoa.salario, pessoa.cargo, pessoa.imagem))
