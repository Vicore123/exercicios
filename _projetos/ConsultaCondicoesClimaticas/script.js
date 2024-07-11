const chave = "&appid=cebcd482eda57fa9a6714c1c2ba91885"
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q="
const linguagem = "&lang=pt_br"
const unidade = "&units=metric"
const urlImagem = 'https://openweathermap.org/img/wn/'

let inputCidade = document.getElementsByName('inputText')[0]


async function buscarCidade() {

   let url = apiWeather + inputCidade.value + chave + linguagem + unidade
   let resposta = await fetch(url)
   let objeto = await resposta.json()

   return objeto
   
}

function montarTela() {

   h1 = document.getElementById('nomeCidade')
   h1.innerHTML = `Tempo em ${inputCidade.value}`
}


