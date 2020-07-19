let cost;
let country;
const userInput = prompt("введіть,будь ласка,назву країни:");
let normalizedInput = userInput.toLowerCase();
switch (normalizedInput) {
    case 'китай':
        cost = 100;
        country = "Китай";
        console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);
        break;

    case 'чилі':
        cost = 250;
        country = "Чилі";
        console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);
        break;

    case 'австралія':
        cost = 170;
        country = "Австралія";
        console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);
        break;

    case 'індія':
        cost = 80;
        country = "Індія";
        console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);
        break;

    case 'ямайка':
        cost = 120;
        country = "Ямайка";
        console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);
        break;

    default:
        alert("У вашій країні доставка недоступна");
}