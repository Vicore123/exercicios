async function minhaFuncao() {
   let userCEP = document.getElementById('inputCEP').value

   try {
      const resposta = await fetch(`https://viacep.com.br/ws/${userCEP}/json/`)
      const dados = await resposta.json()



      div = document.getElementById('div')
      div.innerHTML = ''
      element = document.createElement('div')
      element.innerHTML = `

         <p>cep: ${dados.cep}</p>
         <p>logradouro: ${dados.logradouro}</p>
         <p>complemento: ${dados.complemento}</p>
         <p>unidade: ${dados.unidade}</p>
         <p>bairro: ${dados.bairro}</p>
         <p>localidade: ${dados.localidade}</p>
         <p>uf: ${dados.uf}</p>
         <p>ibge: ${dados.ibge}</p>
      `
      div.appendChild(element)
      


      console.log(dados);}

   catch{

   }
   
}