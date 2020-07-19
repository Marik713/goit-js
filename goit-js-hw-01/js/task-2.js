const total = 100;
let ordered = prompt("Введіть кількість товару");
ordered = Number(ordered);
if (ordered <= total) {
    alert(`Замовлення оформлено, з вами зв'яжеться менеджер`);
} else {
    alert(`На складі недостатньо товарів!`);
}