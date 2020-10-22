import refs from './js/reference';
import imageService from './js/apiService';
import renderNewPictures from './js/addNewPictures';
import PNotify from 'pnotify/dist/es/PNotify.js';
import './js/notification';
import showModal from './js/modalWindow';
import './styles.css';



refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    imageService.query = form.elements.query.value;

    refs.list.innerHTML = '';

    imageService.resetPage();
    fetchImages();
    form.reset();
});
let pageNumber = 1;
refs.button.addEventListener('click', () => {
    refs.button.classList.add('is-hidden');
    imageService.fetchImage().then(data => {
        renderNewPictures(data.hits);
        refs.button.classList.remove('is-hidden');
        refs.upArrow.classList.remove('is-hidden');
        pageNumber += 1;
        window.scrollTo({
            top: (document.documentElement.offsetHeight - (document.documentElement.offsetHeight / pageNumber)),
            behavior: 'smooth',
        });
    });
});
refs.upArrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    refs.upArrow.classList.add('is-hidden');
});

refs.list.addEventListener('click', (event) => {
    showModal(event);

});

function fetchImages() {
    refs.button.classList.add('is-hidden');
    imageService.fetchImage().then(data => {
        renderNewPictures(data.hits);
        PNotify.notice('Your fetch was succesfull!!!');
        refs.button.classList.remove('is-hidden');
    });
}