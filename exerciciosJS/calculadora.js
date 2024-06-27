let operacao = prompt('escolha uma operação: "+", "-", "*" ou "/"')
let n1 = Number(prompt('n1'))
let n2 = Number(prompt('n2'))

switch (operacao) {
    case "+":
        console.log(n1+n2)
        break;

    case "-":
        console.log(n1-n2)
        break;
    
    case "*":
        console.log(n1*n2)
        break;
    
    case "/":
        if (n2 != 0) {
            console.log(n1/n2)
            break;
        }
        else {
            console.log('não é possivel divisão por 0')
        }
    
    default:
        console.log("digite uma operação valida")
        break;
}