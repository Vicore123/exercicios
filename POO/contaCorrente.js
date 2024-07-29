class ContaCorrente {
   #senha
   #saldo
   #limiteEmprestimo
   #limiteTransferencia
   
   constructor (titular, agencia, conta, senha, saldo, limiteEmprestimo, temEmprestimo) {
      this.titular = titular
      this.agencia = agencia
      this.conta = conta
      this.#senha = senha
      this.#saldo = saldo
      this.#limiteEmprestimo = limiteEmprestimo
      this.#limiteTransferencia = limiteTransferencia
      this.temEmprestimo = temEmprestimo
   }
}