const opcoes = {
   0: {
       nome: 'pedra',
       img: 'img/pedra.png',
       pedra: 'EMPATE',
       papel: 'PERDEU',
       tesoura: 'GANHOU'
   },
   1: {
       nome: 'papel',
       img: 'img/papel.png',
       pedra: 'GANHOU',
       papel: 'EMPATE',
       tesoura: 'PERDEU'
   },
   2: {
       nome: 'tesoura',
       img: 'img/tesoura.png',
       pedra: 'PERDEU',
       papel: 'GANHOU',
       tesoura: 'EMPATE'
   }
}

let escolhaJogador = {}
let escolhaComputador = {}

function escolherJogada(num) {
   escolhaJogador = opcoes[num]
}

let numComp = Math.floor(Math.random()*3+1)
escolhaComputador = opcoes[numComp]