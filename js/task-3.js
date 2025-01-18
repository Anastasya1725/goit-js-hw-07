const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function(){
    const trimmedName = nameInput.ariaValueMax.trim();

    if (trimmedName === ''){
        nameOutput.textContent = 'Anonymous'
    }else{
        nameOutput.textContent = trimmedName;
    }
});