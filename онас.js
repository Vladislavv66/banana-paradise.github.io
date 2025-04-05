document.getElementById('apply-style').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const styledText = document.getElementById('styled-text');
    
    styledText.innerHTML = inputText;
});
