// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
   let  missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = 
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src= ${imageUrl}>`;

 }
 
 function validateInput(testInput) {
   
    if(testInput === ''){
        return 'Empty';
    }
    else if (isNaN(testInput)){
        return 'Not a Number';
    }
    else if (!isNaN(Number(testInput))){
        return 'Is a Number';
    }   

};


 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let launchStatus = document.getElementById('launchStatus');

   if(validateInput(pilot) === 'Empty' || validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Empty' || validateInput(copilot) === 'Is a Number'
|| validateInput(fuelLevel) === 'Empty' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Empty' || validateInput(cargoLevel) === 'Not a Number' ){
    list.style.visibility = 'hidden';
    launchStatus.style.color = 'black';
    launchStatus.innerHTML = 'Awaiting Information Before Launch'
    pilotStatus.innerHTML = '';
    copilotStatus.innerHTML = '';
    fuelStatus.innerHTML = '';
    cargoStatus.innerHTML = '';
 alert('Please make sure that all fields have been entered correctly.');
}

else if(fuelLevel < 10000 && cargoLevel > 10000){
    list.style.visibility = 'visible';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'red';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = 'Fuel level too low for launch';
    cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
}

else if(fuelLevel < 10000 && cargoLevel <= 10000){
    list.style.visibility = 'visible';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'red';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = 'Fuel level too low for launch';
    cargoStatus.innerHTML = 'Cargo mass low enough for launch';
}

else if(fuelLevel >= 10000 && cargoLevel > 10000){
    list.style.visibility = 'visible';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'red';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = 'Fuel level high enough for launch';
    cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
}

else if(fuelLevel >= 10000 && cargoLevel <= 10000){
    list.style.visibility = 'visible';
    launchStatus.innerHTML = 'Shuttle is Ready for Launch';
    launchStatus.style.color = 'green';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = 'Fuel level high enough for launch';
    cargoStatus.innerHTML = 'Cargo mass low enough for launch';
  }
};

 
 async function myFetch() {
     let planetsReturned; 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
        return response.json();
     })
    
       return planetsReturned;
 };

 function pickPlanet(planets) {
   let randomPlanet = planets[Math.floor(Math.random()*planets.length)];
   return randomPlanet;
 };
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;