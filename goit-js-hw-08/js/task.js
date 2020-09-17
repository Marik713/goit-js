import items from "./gallery-items.js";

const listRef = document.querySelector(".js-gallery");

// Function to create one picture block

const createOneItem = (item, i) => {
    let index = 0;
    const listItemRef = document.createElement("li");
    listItemRef.classList.add("gallery__item");

    const listItemLinkRef = document.createElement("a");
    listItemLinkRef.classList.add("gallery__link");
    listItemLinkRef.href = item.original;

    listItemRef.appendChild(listItemLinkRef);

    const listItemImageRef = document.createElement("img");
    listItemImageRef.classList.add("gallery__image");
    listItemImageRef.src = item.preview;
    listItemImageRef.alt = item.description;
    listItemImageRef.setAttribute("data-source", item.original);
    listItemImageRef.setAttribute("data-index", index + i);
    listItemLinkRef.appendChild(listItemImageRef);

    return listItemRef;
};

// Create all gallery

const createItem = items.map((item, i) => createOneItem(item, i));
listRef.append(...createItem);

// Create modal window

const modalWindowRef = document.querySelector(".lightbox");
const modalImageRef = document.querySelector(".lightbox__image");
const overlay = document.querySelector(".lightbox__content");
const buttonClose = document.querySelector(".lightbox__button");

listRef.addEventListener("click", openModalWindow);
buttonClose.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeOverlay);

function openModalWindow(event) {
    event.preventDefault();
    const target = event.target;
    if (target.nodeName !== "IMG") {
        return;
    }
    modalImageRef.src = target.dataset.source;
    window.addEventListener("keydown", onPressEscape);
    modalWindowRef.classList.add("is-open");
    let index = Number(event.target.dataset.index);
    window.addEventListener("keydown", event => {
        if (event.key === "ArrowLeft") {
            if (index !== 0) {
                modalImageRef.src = items[index - 1].original;
                return (index -= 1);
            }
            return;
        } else if (event.key === "ArrowRight") {
            if (index < items.length - 1) {
                modalImageRef.src = items[index + 1].original;
                return (index += 1);
            }
            return;
        }
    })
};

function onPressEscape(event) {
    if (event.code === "Escape") {
        closeModalWindow();
        console.log(event);
    }
}

function closeModalWindow() {
    window.removeEventListener("keydown", onPressEscape)
    modalWindowRef.classList.remove("is-open");
}

function closeOverlay(event) {
    if (event.currentTarget === event.target) {
        closeModalWindow();
        modalImageRef.src = "";
    }
    return;
}