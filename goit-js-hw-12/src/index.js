import fetchCountries from './js/fetchCountries';
import renderCountriesInfo from './js/updateCountriesInfo';
import renderCountriesList from './js/updateListInfo';
import ref from './js/reference';
const debounce = require('lodash.debounce');
import PNotify from 'pnotify/dist/es/PNotify.js';
import './js/notification';
import './styles.css';


ref.input.addEventListener('input', debounce(function(e) {
    e.preventDefault();
    let inputValue = e.target.value;
    fetchCountries(inputValue).then(renderCountriesList);

    setTimeout(() => {
        if (ref.searchItems.childElementCount <= 10) {
            ref.searchItems.classList.remove('is-hidden');
        }
        if (ref.searchItems.childElementCount > 10) {
            PNotify.error('Too many matches found.Please enter a more specific query!');
            ref.searchItems.classList.add('is-hidden');
        }
        if (ref.searchItems.childElementCount === 1) {
            fetchCountries(ref.searchItems.outerText).then(renderCountriesInfo);
            ref.input.value = '';
            ref.searchItems.classList.add('is-hidden');
        }
    }, 500);

    ref.searchItems.addEventListener('click', e => {
        e.preventDefault();
        inputValue = e.target.textContent;
        ref.list.innerHTML = '';
        ref.input.value = inputValue;
        fetchCountries(inputValue).then(renderCountriesInfo);
        ref.input.value = '';
        ref.searchItems.classList.add('is-hidden');
    })
}, 500));