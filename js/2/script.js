var dia = new Date()
var diasem = dia.getDay()
var clicarbotao = document.querySelector('#botao')
var divresp = document.querySelector('#resposta')
clicarbotao.addEventListener('click', clicar)
function clicar(){
    switch(diasem){
        case 0:
            divresp.innerHTML = '<p>domingo</p>';
            divresp.style.color = 'white';
            break
        case 1:
            divresp.innerHTML = '<p>segunda</p>';
            divresp.style.color = 'white';
            break
        case 2:
            divresp.innerHTML = '<p>terça</p>';
            divresp.style.color = 'white';
            break
        case 3:
            divresp.innerHTML = '<p>quarta</p>';
            divresp.style.color = 'white';
            break
        case 4:
            divresp.innerHTML = '<p>quinta</p>';
            divresp.style.color = 'white';
            break
        case 5:
            divresp.innerHTML = '<p>sexta</p>';
            divresp.style.color = 'white';
            break
        case 6:
            divresp.innerHTML = '<p>sabado</p>';
            divresp.style.color = 'white';
            break
        default:
            divresp.innerHTML = '<p>esse número não é um dia da semana</p>'
            divresp.style.color = 'white'
            break
    }
    
}