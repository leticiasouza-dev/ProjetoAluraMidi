function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
/* Com o *onclick* quando eu clicar no botão vai tocar o som que esta na funcão (tocaSomPom)
document.querySelector('.tecla_pom').onclick = tocaSomPom;*/
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0
//enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    console.log(instrumento);

    tecla.onclick = function() {
        tocaSom('#som_tecla_pom');
    }

    contador = contador + 1;
    console.log(contador);
}

