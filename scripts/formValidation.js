const contact_form = document.getElementById('contact_form');
const form_btn_submit = document.getElementById('form_btn_submit')
let validName = false;
let validEmail = false;
const users = [];

const validate = (regex, input, isValid) => {
    if (regex.test(input.value)) {
        input.classList.remove('input-error')
        isValid = true;
    } else {
        input.classList.add('input-error')
        isValid = false;
    }

    return isValid;
}

form_btn_submit.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name_input');
    const email = document.getElementById('email_input');
    const consent = document.getElementById('consent');

    const nameValidation = /^[A-Za-z]{2,100}$/;
    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/

    validName = validate(nameValidation, name, validName)
    validEmail = validate(emailValidation, email, validEmail);

    !consent.checked ? consent.classList.add('consent-error') : consent.classList.remove('consent-error');

    if (validEmail && validName && consent.checked) {
        sendForm("https:jsonplaceholder.typicode.com/posts", { name: name.value, email: email.value })
        name.value = '';
        email.value = '';
        consent.checked = false;

        name.classList.remove('input-error')
        email.classList.remove('input-error')
    }


})