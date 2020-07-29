const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    return login.length >= 4 && login.length <= 16;
};


const isLoginUnique = function(allLogins, login) {
    return allLogins.includes(login);
};

const addLogin = function(allLogins, login) {

    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    };

    if (isLoginUnique(allLogins, login)) {
        return 'Такий логін вже використовується!';
    };

    return 'Логін успішно доданий!';
};


console.log(addLogin(logins, 'Ajax'));
console.log(addLogin(logins, 'robotGoogles'));
console.log(addLogin(logins, 'Zod'));
console.log(addLogin(logins, 'jqueryisextremelyfast'));