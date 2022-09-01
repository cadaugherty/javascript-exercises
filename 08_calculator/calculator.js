const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	
  return num1 - num2;
};

const sum = function(sumArray) {
  if(sumArray.length == 0){
    return 0;
  }
  else{
    let answer = 0;
    for(i = 0; i < sumArray.length; i++){
      answer += sumArray[i];
    };
    return answer;
  }
	
};

const multiply = function(mulArray) {
  let answer = 1;
  for(i=0; i< mulArray.length; i++) {
    answer *= mulArray[i];
  }
  return answer;
};

const power = function(num1, num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num1) {
  let answer = 1;
  for(i=num1; i>0; i--){
    answer *= i;
  }
  return answer;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
