
const CambiarTexto = document.querySelector('#cambiarTexto')
const MiParrafo = document.querySelector('#miParrafo')

CambiarTexto.addEventListener('click', function(event) {
MiParrafo.textContent = 'Texto cambiado';
});

