function verify() {
    let nome = window.prompt('Qual é o seu nome?')
    let idade = Number(window.prompt(`Olá ${nome}! Quantos anos você tem?`))

    alert(`Acabei de conhecer ${nome}, que tem ${idade} de idade!`) //pop up com o nome e idade
}