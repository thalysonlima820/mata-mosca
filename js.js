
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criarmoscatempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

switch(nivel){
    case 'normal':
    criarmoscatempo = 1500
    break;
    case 'dificil':
    criarmoscatempo = 1000
    break;
    case 'chucknorris':
    criarmoscatempo = 750
    break;
}


function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(largura, altura)
}
ajustaTamanho();

var cronometro = setInterval( function(){

    tempo -=1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarmosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
 

}, 1000)

function posicaomosquito(){

    if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

        if (vidas > 3){

            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas ++
        }
       
	}

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

// console.log(posicaoX, posicaoY);

var mosquito = document.createElement('img')
mosquito.src = "imagens/mosca.png"
mosquito.className = tamanhomosquito() + ' ' + lado()
mosquito.style.left = posicaoX +'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
    this.remove();
}

document.body.appendChild(mosquito)
}

function tamanhomosquito(){
    classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}


function lado(){
    classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}