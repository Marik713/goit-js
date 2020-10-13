import countries from '../templates/countries.hbs';
import ref from './reference';

function renderCountriesInfo(data) {
    ref.list.innerHTML = '';
    const markup = countries(data);
    return ref.list.insertAdjacentHTML('beforeend', markup);
}

export default renderCountriesInfo;