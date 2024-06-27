let nota = 0
let i
for (i=0; i<4; i++) {
    nota += Number(prompt(`Digite sua ${i+1}º nota`))
}

let media = nota/i
console.log(media)

