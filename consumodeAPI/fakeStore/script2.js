async function minhaFuncao() {

   const resposta = await fetch('https://fakestoreapi.com/products')
   const dados = await resposta.json()

   dados.forEach((elemento)=> {

      let content = document.createElement('div')
      content.innerHTML = `
      <div class="card" style="width: 18rem;">
         <img src="${elemento.image}" class="card-img-top" alt="${elemento.title}">
         <div class="card-body">
            <h5 class="card-title">${elemento.title}</h5>
            <p class="card-text">$  ${elemento.price}</p>
            <p class="card-text">${elemento.description}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
         </div>
      </div>
      `
      let ElementoPai = document.getElementsByTagName('div')[0]
      ElementoPai.appendChild(content)
   })
}

minhaFuncao()