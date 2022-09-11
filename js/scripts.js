// Business Logic for places
function PlacesLog() {
  this.places = {}
  this.currentId = 0;
}

PlacesLog.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

PlacesLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

PlacesLog.prototype.findPlaces = function(id) {
  if (this.places[id] !== undefined) {
    return this.places[id];
  }
  return false;
};

function Destination(countrytName, cityName, dateVisited, landmark) {
  this.countryName = countrytName;
  this.cityName = cityName;
  this.dateVisited = dateVisited;
  this.landmark = landmark;
}

//User Interface Logic
let placesLog = new PlacesLog();

function displayPlaces(placesLogToDisplay) {
  let destinationDiv = document.querySelector("div#destination-details");
  destinationDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(placesLogToDisplay.places).forEach(function(key) {
  const contact = placesLogToDisplay.findPlaces(key);
  const li = document.createElement("li");
  li.append()
})
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedCountryName = document.querySelector("input#country-name").value;
  const inputtedCityName = document.querySelector("input#city-name").value;
  const inputtedDateVisited = document.querySelector("input#date-visited").value;
  const inputtedLandmark = document.querySelector("input#landmark").value;
  let newDestination = new Destination(inputtedCountryName, inputtedCityName, inputtedDateVisited, inputtedLandmark);
  placesLog.addPlace(newDestination);
}

window.addEventListener("load", function () {
  document.querySelector("form#places-form").addEventListener("submit", handleFormSubmission);
});  