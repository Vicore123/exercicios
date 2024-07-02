conta = {
    senha: '1234',
    agencia: 'Bradesco',
    numConta: 1234567,
    titular: 'Leandro',
    tipo: 'PF',
    saldo: 1020,
    sacar: function(quantidade,  senha) {

        if (senha == this.senha) {
            if (this.saldo >= quantidade) {
                this.saldo -= quantidade
                console.log(`Seu saldo atual é ${this.saldo}`)
            }
            else {
                console.log('Saldo insuficiente')
            }    
        }
        else {
            console.log('Senha incorreta');
        }
        
    }, 
    depositar: function(quantidade) {
        this.saldo += quantidade
        console.log(this.saldo);
    }, 
    mostrarSaldo: function(quantidade) {
        console.log(this.saldo);
    },
    fazerEmprestimo: function(valor, senha) {
        if (senha == conta.senha) {
            let qtdParcelas = 24
            let juros = 0.02
            let parcela = (valor/qtdParcelas)*(1+juros)
            conta.saldo += valor
            
        }
    }
}

