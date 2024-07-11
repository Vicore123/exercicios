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

   console.log(objeto);
   return objeto
}

async function montarTela() {

   let informacoes = await buscarCidade()
   

   let titulo = document.getElementById('nomeCidade')
   titulo.innerHTML = `Tempo em ${informacoes.name}`

   let temperatura = document.getElementById('temperatura')
   temperatura.innerHTML = `Temperatura: ${informacoes.main.temp}°C`

   let umidade = document.getElementById('umidade')
   umidade.innerHTML = `Umidade: ${informacoes.main.humidity}%`

   let icone = document.getElementById('icone')
   icone.src = urlImagem + informacoes.weather[0].icon + '@2x.png'

   let clima = document.getElementById('clima')
   clima.innerHTML = informacoes.weather[0].description
   
}


