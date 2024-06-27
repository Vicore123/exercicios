let nota = 0
let i
let peso = 0

for (i=1; i<=4; i++) {
    if(i%2==0) {
        nota += Number(prompt(`Digite sua ${i}º nota`))*2
        peso += 2
    }
    else {
        nota += Number(prompt(`Digite sua ${i}º nota`))
        peso += 1
    }
}

let media = nota/peso

console.log(nota)
console.log(peso)
console.log(media)