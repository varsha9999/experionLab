// function handleSubmit(e){
//     e.preventDefault();
//     console.log(e); 
//     const email = document.forms.login.email;
//     const password = document.forms.login.password;
//     console.log(email,password);

//     const emailValue = email.value;
//     const passwordValue = password.value;

//     const passwordErrorDisplay = password.nextElementSibling
//     if(passwordValue.length < 6){
//         password.style.border = '1px solid red';
//         passwordErrorDisplay.classList.remove('d-none');
//         passwordErrorDisplay.innerHTML += '<li> password must be at least 6 characters</li>';
//     }
//     if(passwordValue.includes (' ') ){
//         password.style.border = '1px solid red';
//         passwordErrorDisplay.classList.remove('d-none');
//         passwordErrorDisplay.innerHTML += '<li> password must not contain spaces</li>';
//     }
// // validate password
//     if(emailValue.length < 15){
//         email.style.border = '1px solid red';
//         email.nextElementSibling.classList.remove('d-none');
//     }
// }

const formData = {
    email: {
        field:document.forms.login.email,
        errors: []
    },
    password: {
        field:document.forms.login.password,
        errors: []
    },

clean: function(){
    this.email.errors = [];
    this.password.errors = [];
}
};

function handleSubmit(e){
    e.preventDefault();
    validate();
}

 function displayErrors();

function validate() {
    if (formData.email.field.value === '') {
        formData.email.errors.push('email is required');
    }

    if (formData.email.field.value.includes('@')) {
        formData.email.errors.push('email must be valid');
    }

    if (formData.password.field.value === '') {
        formData.password.errors.push('Password is required.');
    }
    if (formData.password.field.value.length < 6) {
        formData.password.errors.push('Password must be at least 6 characters long.');
    }
}

 {
    if (formData.email.errors.length > 0) {
        nextElement.classList.remove('d-none');
        nextElement.innerHTML = formData.email.errors.join('<br>');
    }

    if (formData.password.errors.length > 0) {
        nextElement.classList.remove('d-none');
        nextElement.innerHTML = formData.password.errors.join('<br/>');
    }
    displayErrors();
}
document.querySelectorAll('#login input').forEach(element=>{
    element.addEventListener('keyup', ()=>{validate();});
});
