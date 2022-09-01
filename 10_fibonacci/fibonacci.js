const fibonacci = function(num1) {
    num1 = parseInt(num1);
    fib = [1,1];
    if(num1 >0){
    for(i=1; i<num1; i++){
        fib.push(fib[i] + fib[i-1]);
     }
        return fib[i-1];
    } else {
        return "OOPS";
    }

};

// Do not edit below this line
module.exports = fibonacci;
