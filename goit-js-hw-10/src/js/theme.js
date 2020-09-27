const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

inputRef.addEventListener('change', changeTheme);
const theme = localStorage.getItem('Theme');
bodyRef.classList.add(theme);

function changeTheme(event) {
    if (event.target.checked) {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('Theme', 'dark-theme');
    } else {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('Theme', 'light-theme');
    }
};

function changeCheckBox() {
    if (theme === Theme.DARK) {
        return inputRef.checked = true
    } else
        return inputRef.checked = false
}

changeCheckBox();