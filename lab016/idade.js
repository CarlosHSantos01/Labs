function calcidade() {
    let agora = new Date
    let ano = agora.getFullYear()

    let nasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade = ano - nasc

    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}

// {} deveria ser () para função e {} para abrir a função e ao invés de 'mês', seria 'ano'