
const ToggleParrafo = document.querySelector('#toggleParrafo')
//const MiParrafo = document.querySelector('#miParrafo')


ToggleParrafo.addEventListener('click', function() {
    const parrafo = document.querySelector('#miParrafo');
    if (parrafo.style.display === 'none') {
        parrafo.style.display = 'block';
    } else {
        parrafo.style.display = 'none';
    }
});