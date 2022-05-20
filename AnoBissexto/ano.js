var msg

function verify() {
    let resultado = document.querySelector('section#resultado')
    let ano = window.prompt('Qual é o ano que você quer verificar?')

    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) { // verificando se ele é bissexto
        msg = `<mark style="background-color:#7aff97;">É BISSEXTO</mark>  &#x2705 `
    } else {
        msg = `<mark style="background-color:#ef3d06;">NÃO É BISSEXTO</mark> &#x274C`
    }


    resultado.innerHTML = `<h2><b>Analisando o ano de ${ano}...</b></h2>
                            <p>O ano de ${ano} ${msg}</p>`
}