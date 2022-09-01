const getTheTitles = function(bookArray) {
    const answer = [];
    let intermediate = [];
    for (i=0; i<bookArray.length; i++){
        intermediate = bookArray[i];
        answer.push(intermediate.title);
    }
    return answer;

};

// Do not edit below this line
module.exports = getTheTitles;
