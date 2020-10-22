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
    refs.upArrow.classList.remove('is-hidden');
    form.reset();
});

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
        showLoading();
    }
});

refs.upArrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    refs.upArrow.classList.add('is-hidden');
});


refs.list.addEventListener('click', (event) => {
    showModal(event)
});

function showLoading() {
    refs.load.classList.add('show');
    setTimeout(fetchImages, 1000)
};

function fetchImages() {
    imageService.fetchImage().then(data => {
        renderNewPictures(data.hits);
        PNotify.notice('Your fetch was succesfull!!!');
    });
};