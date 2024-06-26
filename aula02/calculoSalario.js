// beneficios sob tempo de empresa
// menos de 1 ano --------- 0% sob o salario base
// de 2 a 5 anos ---------- 10% sob o salario base
// de 5 a 10 anos ---------- 15% sob o salario base
// mais de 10 anos ---------- 20% sob o salario base

// benefício por dependente
// R$ 500,00 por dependente menor que 7 anos

// VA -------- R$ 1000,00
// VT -------- R$ 200,00

// DESCONTOS
// INSS --------- 9% do salário base
// FGTS --------- 8% do salário base

// com base nos critérios, ler as informações de um empregado e exibir na tela o total a receber descrevendo cada um dos curstos, tando benefícios quanto descontos, por categoria.

let salarioBase = Number(prompt('Digite seu salario (somente numeros)'))
let tempoDeEmpresa = Number(prompt('digite seu tempo de empresa em anos (somente numeros)'))
let dependentes = Number(prompt('digite o numero de dependentes menores de 7 anos'))
let beneficios
let descontos
const INSS = 0.09
const FGTS = 0.08

// Bonificação
if (tempoDeEmpresa <= 1) {
    console.log('1')
    beneficios = 0  
}
else if (2 < tempoDeEmpresa < 5) {
    beneficios = salarioBase*0.1
    console.log('2')
}
else if (5 < tempoDeEmpresa < 10) {
    beneficios = salarioBase*0.15
    console.log('3')
}
else if (10 < tempoDeEmpresa) {
    beneficios = salarioBase*0.2
    console.log('4')
}

// Auxílio creche por dependente menor de 7 anos
beneficios += 500*dependentes

// VA + VT
beneficios += 1000 + 200


// descontos
let salario = salarioBase + beneficios
descontos = salarioBase*INSS + salarioBase*FGTS

// Total a receber
salario -= descontos


console.log(`
    descontos ---- ${descontos} \n beneficios ------ ${beneficios}`)
document.write(`Salário Base ------- R$${salarioBase} \n Beneficios ------- R$${beneficios} \n Descontos ------- R$${descontos} \n\n Total a receber R$${salario}`)