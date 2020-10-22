import refs from './reference'
import picture from './templates/picture.hbs'

function renderNewPictures(data) {
    const markup = picture(data);
    refs.list.insertAdjacentHTML('beforeend', markup);
    refs.load.classList.remove('show');

}
export default renderNewPictures;