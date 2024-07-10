let produtos

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(produtos=> {
   produtos.forEach(elemento => {

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

})
.catch(erro=> console.log(erro))



//adição de um novo produto
fetch('https://fakestoreapi.com/products',{
   method:'POST',
   body:JSON.stringify(
      {

         title: 'produto criado',
         price: 13.5,
         description: 'lorem3',
         image: 'https://i.pravatar.cc',
         category: 'eletronic'
         
      }
   )
})
.then(res=>res.json())
.then(json=>console.log(json))