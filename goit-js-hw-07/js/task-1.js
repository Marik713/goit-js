const list = document.querySelector("#categories");
const listElements = list.children;
const countCategories = `У списку ${listElements.length} категорії`
console.log(countCategories)


const listItem = document.querySelectorAll(".item");
const itemInfo = listItem.forEach(item => {
    console.log(`Категорія:${item.firstElementChild.textContent}`)
    console.log(`Кількість елементів:${item.lastElementChild.children.length}`)
});