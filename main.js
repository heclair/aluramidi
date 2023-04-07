//Som pom-------------------------------------------------
function tocaSom(idElementoAudio){

    document.querySelector(idElementoAudio).play();
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

    tecla.onkeydown = function (){
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
