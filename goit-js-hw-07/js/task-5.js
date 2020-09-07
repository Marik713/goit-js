const inputRef = document.querySelector('#name-input');
const nameSpanRef = document.querySelector('#name-output');
inputRef.addEventListener('input', editSpanContent);

function editSpanContent() {
    if (event.target.value === '') {
        nameSpanRef.textContent = "незнайомець"
    } else
        nameSpanRef.textContent = event.target.value
};