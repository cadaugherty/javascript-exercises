const palindromes = function (stringTest) {
    stringTest = stringTest.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let stringArray = Array.from(stringTest);

    let backwardsString = [];
    for(i = 0; i < stringArray.length; i++){
        if(stringArray[i] == " "){
            stringArray.splice(i, 1);
        }
    };

    for(i=stringArray.length-1; i>=0; i--){
        backwardsString.push(stringArray[i]);
    };
    
    string1 = stringArray.join("");
    string2 = backwardsString.join("");
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
   
    if(string1 === string2){
        return true;
    } else{
        return false;
    };
   
};

// Do not edit below this line
module.exports = palindromes;
