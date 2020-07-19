let total = 0;
do {
    let input = prompt("Введіть число");
    if (input === null) {
        alert("Відмінено користувачем")
        break;
    }
    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
        alert('Було написано не число, спробуйте ще раз');
        continue;
    }
    total += input;
} while (true);
alert(`Загальна сума чисел дорівнює ${total}`);