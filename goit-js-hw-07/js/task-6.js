const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', blurValidate);
inputRef.addEventListener('focus', focusReset)

function blurValidate() {
    if (event.target.value.length === Number(event.target.dataset.length)) {
        event.target.classList.add('valid');
    } else {
        event.target.classList.remove('invalid');
        event.target.classList.add('invalid');
    }
};

function focusReset() {
    event.target.classList.remove('invalid', 'valid');
}