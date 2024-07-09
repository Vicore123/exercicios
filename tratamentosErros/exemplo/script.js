
try {
   
   // todo código possivel de erro
   let numero = Number(prompt('Digite apenas 1 ou 2'))

   if (numero == 1 || numero == 2) {
      console.log('Acertou');
   }
   else {
      throw new Error('Você não diigitou 1 ou 2. Erro personalizado')
   }

}
catch (error) {
   // captar qualquer erro levantado no bloco try
   console.log(error.message)
}
finally{
   
}

alert('executei depois do erro')