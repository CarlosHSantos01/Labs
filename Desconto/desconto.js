let resultado = document.querySelector('section#resultado')

function CalculoDesconto() {
    let produto = window.prompt('Qual é o produto que você está comprando?')
    let valor = Number(window.prompt(`Qual é o preço de ${produto}?`))

    resultado.innerHTML = `<h2><b>Calculado desconto de 10% para ${produto}</b></h2> 
                           <p>O preço original era R$ ${valor}</p>
                           <p>Você acaba ganhando R$ ${(valor*0.10).toFixed(2)} de desconto (-10%)</p>
                           <p>No fim, você vai pagar RS$ ${valor - (valor*0.10).toFixed(2)}</p>`
}