const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {

    const values = [];

    for (const product of products) {
        if (prop === 'name') {
            values.push(product.name);
        }
        if (prop === 'price') {
            values.push(product.price);
        }
        if (prop === 'quantity') {
            values.push(product.quantity);
        }
    }
    return values;
};

console.log(getAllPropValues(products, 'name'));

console.log(getAllPropValues(products, 'quantity'));

console.log(getAllPropValues(products, 'category'));