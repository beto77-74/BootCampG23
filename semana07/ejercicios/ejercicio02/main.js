
const CambiarEstilo = document.querySelector('#cambiarEstilo')
const MiDiv = document.querySelector('.miDiv')


document.querySelector('#cambiarEstilo').addEventListener('click', function() {
    MiDiv.style.backgroundColor = 'lightblue';
    MiDiv.style.color = 'white';
});