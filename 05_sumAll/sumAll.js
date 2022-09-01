const sumAll = function(num1, num2) {
    let answer = 0;
    if(Number.isInteger(num1) == false || Number.isInteger(num2) == false){
        return "ERROR";
    }
    else if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    else {
        for(i = Math.min(num1, num2); i <= Math.max(num1,num2); i++){
            answer += i;
        }
        return answer;
    };

};

// Do not edit below this line
module.exports = sumAll;
