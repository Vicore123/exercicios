// Não finalizado (o erro que aparecer é por conta dos ${} sem variaveis)
// imagem do projeto no celular 10/07/2024


async function minhaFuncao(button, moeda) {

   try {
      
      const resposta = await fetch(`https://economia.awesomeapi.com.br/last/${button}-BRL`)
      const dados = await resposta.json()

      //montar na tela
      div = document.getElementById('montarTela')
      div.innerHTML = ''
      content = document.createElement('div')
      content.innerHTML = `
      
         <h2>Conversão Real / ${moeda}</h2>
         <p>R$ ${}</p>
         <p>${} ${}</p>
         <p>Cotação valida para ${}</p>
      `
      div.appendChild(content)



      console.log(dados)


   }
   catch {

   }
   
}