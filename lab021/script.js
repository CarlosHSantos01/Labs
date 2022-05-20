function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`
    let x = 0
    let cont = 1
    while (cont <= 10) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont++ // Corresponde a cont = cont + 1
    }
    saida.innerHTML += ` &#x1F3C1;`
}

//O condicional IF não era necessário