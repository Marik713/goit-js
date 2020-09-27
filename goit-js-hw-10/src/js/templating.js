import itemsTemplate from '../templates/gallery-items.hbs';
import gallery from '../menu.json';

const markup = itemsTemplate(gallery);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);