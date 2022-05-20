function verify() {
    let resultado = document.querySelector('section#resultado')
    let distancia = Number(window.prompt('Digite uma distância em metros[m]'))


    resultado.innerHTML = `<h2><b>A distância de ${distancia} metros, corresponde a...</b><h2>`
    resultado.innerHTML += `<p>${distancia/1000} quilômetros(Km)</p>`
    resultado.innerHTML += `<p>${distancia/100} hectômetros(Hm)</p>`
    resultado.innerHTML += `<p>${distancia/10} decâmetros(Dam)</p>`
    resultado.innerHTML += `<p>${distancia*10} decímetros(dm)</p>`
    resultado.innerHTML += `<p>${distancia*100} centímetros(cm)</p>`
    resultado.innerHTML += `<p>${distancia*1000} milímetros(mm)</p>`
        // estão retornando os valores convertidos em suas respectivas medidas
}