let cotação = Number(window.prompt('Antes de mais nada, quanto está a cotação do dólar agora?'))
let resultado = document.querySelector('section#resultado')

function converção() {
    let dinheiro = Number(window.prompt('Quantos R$ você tem na sua carteira?'))

    var convertido = dinheiro / cotação //irá fazer a conversão 
    resultado.innerHTML = `<p>O valor que você possui em sua carteira é de <b>${convertido} dolares</b>!<p>` //retornar o html
}