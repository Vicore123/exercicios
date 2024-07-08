let elementoFilho = document.createElement('p')

elementoFilho.innerHTML = 'Texto inserido no inner html de um parágrafo criado com o createElement do objeto document'

let ElementoPai = document.querySelector('body')

ElementoPai.appendChild(elementoFilho)

let outroElementoFilho = document.createElement('h1')

outroElementoFilho.innerHTML = 'Titulo criado com JS'

ElementoPai.appendChild(outroElementoFilho)


outroElementoFilho.classList = 'nomeDaClasse'
outroElementoFilho.classList.add('nomeDaClasse')
outroElementoFilho.classList.remove('nomeDaClasse')