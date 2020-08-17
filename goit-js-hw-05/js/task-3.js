class Storage {
    constructor([...items]) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(product) {
        this.items.push(product)
    }
    removeItem(productName) {
        for (let i = 0; i < this.items.length; i += 1) {
            if (productName === this.items[i]) {
                this.items.splice(i, 1);
            }
        }
    }
};

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();

console.table(items);

storage.addItem('Дроїд');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);