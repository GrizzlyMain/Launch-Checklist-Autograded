

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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    window.addEventListener('load', function(){
     let form = document.querySelector('form');
     form.addEventListener('submit', function (event){
         let pilot = document.querySelector('input[name="pilotName"]');
     
     })
    })
  }
