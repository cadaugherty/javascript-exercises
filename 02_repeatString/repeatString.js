const repeatString = function(stringToRepeat, numTimes) {
    let intermediateString = ""
    if(numTimes < 0) {
        return "ERROR";
    }
        else{ for(i = 0; i < numTimes; i++){
            intermediateString += stringToRepeat;
        };
        return intermediateString
    }
};

// Do not edit below this line
module.exports = repeatString;
