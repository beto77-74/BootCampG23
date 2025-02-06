const TextArea = document.querySelector('.dtextarea')

const TextAreaCaracteres = document.querySelector('.caracteres')
const TextAreaPalabras = document.querySelector('.palabras')
const TextAreaParrafos = document.querySelector('.parrafos')


TextArea.addEventListener('click', function(event) {

    console.log('Hola1')
    //function contarTexto (TextArea='qqqqqqq') {

        console.log('Hola2')
        console.log(TextArea.textContentog)
        const numCaracteres = TextArea.textContent.length);
    
       // const numPalabras = TextArea.trim().split(/\s+/).length;
    
        //const numParrafos = TextArea.trim().split(/\n+/).length;
    
        console.log(numCaracteres);
        //console.log(numPalabras);
        //console.log(numParrafos);
   // }
})


//contarTexto('aaa aaa aaa /n bbb bbb')

const numCaracteres = TextArea.textContent.length