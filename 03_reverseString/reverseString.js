const reverseString = function(stringToReverse) {
    const stringArray = stringToReverse.split("");
    const targetArray = [];
    while (stringArray.length > 0){
        targetArray.push(stringArray.pop());
    };
    let answerString = targetArray.join("");
    return answerString;
};

// Do not edit below this line
module.exports = reverseString;
