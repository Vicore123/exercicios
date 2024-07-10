// https://reqres.in/

async function buscarDados() {
   try {
      const resposta = await fetch('https://reqres.in/api/users?page=2')
      const informacoes = await resposta.json()
      const dados = informacoes.data

      for (let i = 0; i < informacoes.per_page; i++) {
         
         body = document.getElementsByTagName('body')[0]
         content = document.createElement('img')
         content.src = dados[i].avatar
         body.appendChild(content)
         
         
         console.log(dados[i].avatar)
      }
   }
   catch {

   }
}
buscarDados()