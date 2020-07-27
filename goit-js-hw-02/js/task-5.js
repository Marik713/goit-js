const checkForSpam = (message) => {
    let normalizedMessage = message.toLowerCase();
    let array = normalizedMessage.split(' ');
    let forbiddenItem = ['sale', 'spam'];

    for (const item of array) {
        for (const element of forbiddenItem) {
            if (item.indexOf(element) !== -1) return true;
        }
    }
    return false;
};


console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));