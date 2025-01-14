function carregar () {
    var mensagem = document.querySelector('#msg')
    var imagem = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = ` <h2> agora são ${hora} horas </h2>`
}