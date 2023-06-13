function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play(); /*reproduzir som */
}
/* Com o *onclick* quando eu clicar no botão vai tocar o som que esta na funcão (tocaSomPom)
document.querySelector('.tecla_pom').onclick = tocaSomPom;*/
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

//enquanto
while (contador < listaDeTeclas.length) {
   
    
    listaDeTeclas[contador].onclick = function() {
        tocaSom('#som_tecla_pom');
    }

    contador = contador + 1;

    console.log(contador);
}

