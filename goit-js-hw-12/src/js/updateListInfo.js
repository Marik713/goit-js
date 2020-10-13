import listCountries from '../templates/renderList.hbs';
import ref from './reference';

function renderCountriesList(data) {
    ref.searchItems.innerHTML = '';
    const markup = listCountries(data);
    return ref.searchItems.insertAdjacentHTML('beforeend', markup);
}
export default renderCountriesList;