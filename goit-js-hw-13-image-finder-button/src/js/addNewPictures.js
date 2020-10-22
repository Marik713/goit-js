import refs from './reference'
import picture from './templates/picture.hbs'

function renderNewPictures(data) {
    const markup = picture(data);
    return refs.list.insertAdjacentHTML('beforeend', markup);
}
export default renderNewPictures;