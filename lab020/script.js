function estação() {
    let mês = prompt('Digite o mês em extenso (ex: Setembro)')
    let saída = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO':
        case 'FEVEREIRO':
        case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estação = 'INVERNO'
            console.log(estação)
            break // Nunca se esqueça do break!!!

        case 'ABRIL':
        case 'MAIO':
        case 'JUNHO':
            estação = 'PRIMAVERA'
            break

        case 'JULHO':
        case 'AGOSTO':
        case 'SETEMBRO':
            estação = 'VERÃO'
            console.log(estação)
            break

        case 'OUTUBRO':
        case 'NOVEMBRO':
        case 'DEZEMBRO':
            estação = 'OUTONO'
            console.log(estação)
            break

        default:
            estação = 'INDEFINIDA'
            console.log(estação)
            break
    }
    saída.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}
//Faltou o inner na linha 11
// Sugestão de melhoria: refaça esse programa para que ele aceite tanto o mês por extenso quanto o número do mês.