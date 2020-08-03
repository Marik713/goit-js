const findBestEmployee = function(employees) {
    const arrayTasks = Object.values(employees);
    const entries = Object.entries(employees);

    let maxValue = arrayTasks[0];

    for (let i = 1; i < arrayTasks.length; i += 1) {
        if (arrayTasks[i] > maxValue) {
            maxValue = arrayTasks[i];
        }
    }
    for (const entry of entries) {
        const key = entry[0];
        const value = entry[1];
        if (value === maxValue) {
            return key;
        }
    }
};


console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
);

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
);

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
);