// Write your JavaScript code here!

window.addEventListener('load', function() {
    let form = document.querySelector('form');
    let list = document.getElementById('faultyItems');
    let listedPlanets;
    let displayedPlanet;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        let varPlanet = pickPlanet(listedPlanets);
        displayedPlanet = addDestinationInfo(document, varPlanet.name, varPlanet.diameter, varPlanet.star, varPlanet.distance, varPlanet.moons, varPlanet.image);
        return displayedPlanet;
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    let button = document.getElementById('formSubmit');
    
    button.addEventListener('click', function (event) {
        event.preventDefault();
         const pilotName = document.querySelector('input[name=pilotName]');
         const copilotName = document.querySelector('input[name=copilotName]');
         const fuelLevel = document.querySelector('input[name=fuelLevel]');
         const cargoMass = document.querySelector('input[name=cargoMass]');
        formSubmission(
         document,
         list,
         pilotName.value,
         copilotName.value,
         fuelLevel.value,
         cargoMass.value
        );
        });
    
 });