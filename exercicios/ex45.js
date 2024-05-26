const arrStrings = ["apple", "banana", "apple", "orange", "banana", "apple"];

const objStrings = {};

arrStrings.forEach((data) => {
    if (objStrings[data]) {
        objStrings[data]++;
    } else {
        objStrings[data] = 1;
    };
});

console.log(objStrings);