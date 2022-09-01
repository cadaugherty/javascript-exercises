const removeFromArray = function() {
    let index;
    let arrayToUse = arguments[0];
    for (i =1 ; i < arguments.length; i++){
        index = arrayToUse.indexOf(arguments[i]);
        if(index > -1){
            arrayToUse.splice(index, 1);
        };
        index = -1;
    };
    return arrayToUse;
};

// Do not edit below this line
module.exports = removeFromArray;
