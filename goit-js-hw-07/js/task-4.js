const buttonPlus = document.querySelector('button[data-action ="increment"]');
const buttonMinus = document.querySelector('button[data-action ="decrement"]');
const spanValue = document.querySelector('#value');

let counterValue = Number(spanValue.textContent);

buttonPlus.addEventListener('click', increment);
buttonMinus.addEventListener('click', decrement);

function increment() {
    counterValue++;
    spanValue.textContent = counterValue
}

function decrement() {
    counterValue--;
    spanValue.textContent = counterValue
}