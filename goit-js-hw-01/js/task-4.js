let credits = 23580;
const pricePerDroid = 3000;
let numberOfDroid = prompt("Введіть кількість дроїдів");
let totalPrice = pricePerDroid * numberOfDroid;
if (numberOfDroid === null) {
    console.log("Скасовано користувачем!");
} else if (credits >= totalPrice) {
    numberOfDroid = Number(numberOfDroid);
    credits -= totalPrice;
    console.log(`Ви купили ${numberOfDroid} дроїдів, на рахунку залишилося ${credits} кредитів.`);
} else {
    console.log("Недостатньо коштів на рахунку!");
}