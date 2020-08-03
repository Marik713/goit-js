const countProps = function(obj) {
    const propertyTotal = Object.keys(obj);
    return (propertyTotal.length)
};


console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));