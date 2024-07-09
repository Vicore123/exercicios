// 0 - pedra
// 1 - papel
// 2 - tesoura
const definicao = ['Pedra', 'Papel', 'Tesoura']
   let pontosJogador = 0
   let pontosComputador = 0

function verificar(num) {
   let jogador = num
   let computador = Math.floor(Math.random()*3)
   let resultado

   if (jogador == computador) {
      resultado = 'Empate'
   }
   else if (jogador == 0 && computador == 2) {
      resultado = 'Ganhou'
      pontosJogador += 1
   }
   else if (jogador == 1 && computador == 0) {
      resultado = 'Ganhou'
      pontosJogador += 1
   }
   else if (jogador == 2 && computador == 1) {
      resultado = 'Ganhou'
      pontosJogador += 1
   }
   else {
      resultado = 'Perdeu'
      pontosComputador += 1
   }

   // montar tela
   container = document.getElementsByClassName('detalhes')[0].innerHTML = `
   
   <div class="imagensResultado">
      <div >
         <p id="escolhaUsuario" >${definicao[jogador]}</p>
         <img id="imgUser" src="img/${jogador}.png" alt="">
      </div>
      <div>
         <p id="escolhaComputador" >${definicao[computador]}</p>
         <img id="imgComput" src="img/${computador}.png" alt="">
      </div>
   </div>
   
   <p id="resultado">${resultado}</p>
   `
   resultado.innerHTML = resultado

   // montar resultado
   pontuacao = document.getElementsByClassName('pontuacao')[0].innerHTML = `
   
   <p>Computador : 
      <span id="pontosComputador">${pontosComputador}</span>
   </p>
   <p>Você :
      <span id="pontosUsuario">${pontosJogador}</span>
   </p>
   `
}