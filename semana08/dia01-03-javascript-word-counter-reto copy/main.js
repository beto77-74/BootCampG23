document.addEventListener('DOMContentLoaded', function() {
    var textArea = document.getElementById('text-area');
    var counter = document.getElementById('counter');

    Countable.on(textArea, function(counterData) {
        counter.innerHTML = `
            Words: ${counterData.words} <br>
            Characters: ${counterData.characters} <br>
            Paragraphs: ${counterData.paragraphs}
        `;
    });
});