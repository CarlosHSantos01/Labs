function verify() {
    let resultado = document.querySelector('section#resultado')
    let n1 = window.prompt('Qual é o valor de a?')
    let n2 = window.prompt('Qual o valor de b?')
    let n3 = window.prompt('Qual o valor de c?')

    const delta = n2 * n2 - 4 * n1 * n3; // realizará o calculo

    resultado.innerHTML = `<h2><b>Resolvendo Bhaskara</b></h2>
                           <p>A equação atual é <b>${n1}x² + ${n2}x + ${n3} = 0</b><p>
                           <p>O calculo realziado será <b>Δ = ${n2}² -4 . ${n1} . ${n3}</b></p>
                           <p>O valor calculado foi <b><mark>Δ = ${delta}</mark></b></p>`

}