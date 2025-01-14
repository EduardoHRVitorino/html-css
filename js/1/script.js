var caixadevalor = document.querySelector('#pergunta');
var botao = document.querySelector('#botao');
var textores = document.querySelector('#resultado');
var botaocontar = document.querySelector('#contar');
botao.addEventListener('click', clicar);
botaocontar.addEventListener('click', clicar2);
function clicar() {
    var valor = Number(caixadevalor.value);
    if(valor >= 18){
        textores.innerHTML = '<p>meus parabéns, vc é maior de idade</p>'
        textores.style.color = 'white'
    }
    else{
        textores.innerHTML= '<p>infelizmente vc é menor de idade</p>'
        textores.style.color = 'red'
    }
}
function clicar2() {
    var numeroinicial = 0;
    var contagem = document.querySelector('#contagem')
    while(numeroinicial < 20){
        numeroinicial++;
        contagem.style.color = 'white'
        contagem.innerHTML = '<p>' + numeroinicial + '</p>'
        
    }
}
switch() {
    
}