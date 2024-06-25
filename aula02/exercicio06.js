// O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / (altura)². Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
// Abaixo de 18,5: Abaixo do peso
// Entre 18,5 e 25: Peso normal
// Entre 25 e 30: Acima do peso
// Acima de 30: Obeso


let peso = Number(prompt('Digite seu peso em kg (sem o kg)'))
let altura = Number(prompt('Digite sua altura em m (sem o m)'))

let IMC = peso/(altura**2)

if (IMC < 18.5) {
    console.log(IMC)
    console.log('Abaixo do peso')
}
else if (18.5 <= IMC && IMC <= 25) {
    console.log(IMC)
    console.log('Peso normal')
}
else if (25 <= IMC <=30){
    console.log(IMC)
    console.log('Acima do peso')
}
else {
    console.log(IMC)
    console.log('Obeso')
}