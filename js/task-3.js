const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function(){
    const trimmedName = nameInput.value.trim();

    nameOutput.textContent = trimmedName ? trimmedName : 'Anonymous';
});