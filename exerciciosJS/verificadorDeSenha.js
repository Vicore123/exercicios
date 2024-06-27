const SENHA = 1234
let verificacao = false
let senhaUser = 0
let contador = 1

senhaUser = Number(prompt('Digite sua senha'))
while (verificacao == false && contador <= 3) {

    if (senhaUser == SENHA) {
        verificacao = true
    }
    else {
        senhaUser = Number(prompt(`Senha incorreta. Você tem mais ${3-contador+1} tentativas. Dgite novamente a senha`))
    }
    contador += 1
}
if (senhaUser == SENHA) {
    console.log('Caminho feliz')
}
else {
    console.log('Caminho triste')
}

// -------------------------------------