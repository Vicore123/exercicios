let cep = document.getElementById('cep').value
let btnCEP = document.getElementById('btnCEP')

function buscarCep() {
   try {
      
      fetch(`https://viacep.com.br/ws/${cep}/json/`).
      then((resposta)=> resposta.json()).
      then((objeto)=> {let info = objeto; return info}).
      catch((e)=> console.log('cep incorreto'))

      if (info.erro == true) {
         throw new Error('CEP inexistente')
      }

   } 
   catch (error) {
      console.log('cep no formato incorreto')
   }
}

btnCEP.addEventListener('click', ()=> buscarCep())