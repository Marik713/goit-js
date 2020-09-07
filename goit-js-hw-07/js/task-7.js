const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
inputRef.addEventListener('input', event => {
    spanRef.style.fontSize = `${inputRef.value}px`;
})