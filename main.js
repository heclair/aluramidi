//Som pom-------------------------------------------------
function tocaSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);
                
    

    if(elemento != null && elemento.localName === 'audio'){    
        elemento.play();
        }
        else{
            //elemento não encontrado
            console.log('Elemento ou seletor inválido não encontrado')
        }
    }
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto estrutura de repetição

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){

        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}

