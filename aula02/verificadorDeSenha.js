const SENHA = 1234
let verificacao = false
let senhaUser = 0
let contador = 1

while (verificacao == false && contador <= 3) {
    senhaUser = Number(prompt('Digite sua senha'))

    if (senhaUser == SENHA) {
        verificacao = true
    }
    contador += 1
}
if (verificacao == true) {
    console.log('Caminho feliz')
}
else {
    console.log('Caminho triste')
}

// -------------------------------------