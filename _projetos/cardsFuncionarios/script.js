// imagem dos cards no celular

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
  },
  {
    nome: "Rafael Santos",
    idade: 31,
    salario: 5500,
    cargo: "Engenheiro de Software",
    imagem: "https://picsum.photos/157"
  },
  {
    nome: "Juliana Oliveira",
    idade: 26,
    salario: 4700,
    cargo: "UI/UX Designer",
    imagem: "https://picsum.photos/158"
  },
  {
    nome: "Gustavo Almeida",
    idade: 33,
    salario: 5800,
    cargo: "Coordenador de TI",
    imagem: "https://picsum.photos/159"
  },
  {
    nome: "Camila Ferreira",
    idade: 30,
    salario: 5300,
    cargo: "Analista de Qualidade",
    imagem: "https://picsum.photos/160"
  },
  {
    nome: "Rodrigo Costa",
    idade: 34,
    salario: 5900,
    cargo: "Arquiteto de Software",
    imagem: "https://picsum.photos/161"
  },
  {
    nome: "Patrícia Alves",
    idade: 28,
    salario: 4900,
    cargo: "Especialista em UX",
    imagem: "https://picsum.photos/162"
  }
]

body = document.querySelector('header')
cardEstrutura = document.createElement('h1')
cardEstrutura.innerHTML = 'Funcionários'
body.appendChild(cardEstrutura)

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
