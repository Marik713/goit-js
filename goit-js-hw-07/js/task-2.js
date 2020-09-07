const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const listRef = document.querySelector('#ingredients');

const createListInfo = item => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = item;
    return listItemRef
};
const generateList = ingredients.map(item =>
    createListInfo(item)
)

listRef.append(...generateList);