// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(formInput) {
    let inputStr = '';
    if(formInput == ''){
        inputStr = "Empty";
    }
    else if (isNaN(formInput) === true){
        inputStr = "Not a Number";
    }
    else if (typeof formInput === "number"){
        inputStr = "Is a Number";
    }   

    console.log(inputStr);
    return inputStr;
 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let button = document.getElementById("formSubmit");

    button.addEventListener("click", function(){
        
    })

    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;