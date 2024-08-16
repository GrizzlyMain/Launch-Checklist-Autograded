

function validateInput(testInput) {
   
    if(testInput == ''){
        return 'Empty';
    }
    else if (isNaN(testInput)){
        return 'Not a Number';
    }
    else if (typeof testInput == 'number'){
        return 'Is a Number';
    }   

}

console.log(validateInput(3));
