const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const emailInput = form.elements['email'];
    const passwordInput = form.elements['password'];

    if(!emailInput || !passwordInput){
        console.error('Не вдалося знайти елементи форми');
    }

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };

    console.log(formData);

    form.reset();
});

