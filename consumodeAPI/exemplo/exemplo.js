fetch('nome de um api url') // acessa o endereço e retorna uma promise
.then(resposta => fazAlgo) // use o retorno anterior e faz alguma coisa
.catch(error => console.log(error.message)) // Trata o erro caso aconteça



// GET - ler/captar/receber informações;
// POST - enviar/criar informações
// PUT - atualiza a informação inteiro; substitui o recurso existente
// PATCH - 
// DELETE - 



const alunoNovo= {nome:'Cleiton', idade:'13'} //criando objeto

fetch('nome de um api url',
   {// objeto que ira enviar dados por meio da requisição
      method: 'POST', //escolhendo o método HTTP (criação)
      headers:{'Content-Type':'aplication/json'},
      body: JSON.stringify(alunoNovo)



   })
   .then(res=>res.json())
   .then(json=>console.log(json))



