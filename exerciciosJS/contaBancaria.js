// Nome do Titular
// Saldo

// 3 operações básicas:

// depósito

// saque
//   saldo superior ao vlor de saque
//   saldo inferior ao valor de saque

// extrato

const nome = "Algustinho"
let saldo = 1000
let senha = 1234
let entradaSenha = Number(prompt('Digite sua senha'))

if(senha == entradaSenha) {
    
    let operacao = Number(prompt("Digite:\n 1 - depósito\n 2 - saque\n 3 - extrato"))
    switch (operacao) {
        case 1:
            saldo += Number(prompt('Qual o valor que você deseja depositar?'))
            console.log(saldo)
        break;
        
        case 2:
            let saque = Number(prompt('Qual o valor que você deseja sacar?'))
            if (saque < saldo) {
                saldo -= saque
                console.log(saldo)
            }
            else {
                console.log('Saldo insuficiente')
            }
        break;

        case 3:
            console.log(`seu saldo é de ${saldo} reais`)
        break;

        default:
            console.log('operação invalida')
        break;
    }
}
else {
    console.log('Senha incorreta')
}