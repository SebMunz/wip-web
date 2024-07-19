let estadoBoton = 0;
const rotarBoton = document.getElementById('boton-rotativo');
const elegirSkill = document.getElementById('skill-set');
const elegirIcono = document.getElementById('skill-icono');
const elegirDiv = document.getElementById('rotador');
const elegirEstrella = document.getElementById('estrellas');
const elegirCorazon = document.getElementById('corazones');

rotarBoton.addEventListener('click', () => {
    if (estadoBoton === 0){ //cambiar a corazones
        elegirEstrella.classList.add('hidden');
        elegirCorazon.classList.remove('hidden');
        estadoBoton = 1;
    } else if (estadoBoton === 1){ // cambiar a texto
        elegirSkill.classList.add('hidden');
        elegirIcono.classList.add('hidden');
        elegirDiv.classList.remove('hidden');
        estadoBoton = 2;
    } else { //retorno original
        elegirDiv.classList.add('hidden');
        elegirIcono.classList.remove('hidden');
        elegirSkill.classList.remove('hidden');
        elegirCorazon.classList.add('hidden');
        elegirEstrella.classList.remove('hidden')
        estadoBoton = 0;
    }
});