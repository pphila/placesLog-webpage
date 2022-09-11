// Business Logic for places
function PlacesLog() {
  this.places = {};
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

function Destination(countryName, cityName, dateVisited, landmark) {
  this.countryName = countryName;
  this.cityName = cityName;
  this.dateVisited = dateVisited;
  this.landmark = landmark;
}

Destination.prototype.location = function() {
  return this.landmark + " in " + this.cityName + ", " + this.countryName + " on " + this.dateVisited;
};

//User Interface Logic
let placesLog = new PlacesLog();

function displayPlaces(placesLogToDisplay) {
  let destinationDiv = document.querySelector("div#destination-details");
  destinationDiv.innerText = null;
  const ul = document.createElement("ul");
  console.log(placesLogToDisplay.places);
  Object.keys(placesLogToDisplay.places).forEach(function(key) {
    const place = placesLogToDisplay.findPlaces(key);
    const li = document.createElement("li");
    li.append(place.location());
    li.setAttribute("id", place.id);
    ul.append(li);
  });
  destinationDiv.append(ul);
  destinationDiv.removeAttribute("class");
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedCountryName = document.querySelector("input#country-name").value;
  const inputtedCityName = document.querySelector("input#city-name").value;
  const inputtedDateVisited = document.querySelector("input#date-visited").value;
  const inputtedLandmark = document.querySelector("input#landmark").value;
  let newDestination = new Destination(inputtedCountryName, inputtedCityName, inputtedDateVisited, inputtedLandmark);
  placesLog.addPlace(newDestination);
  displayPlaces(placesLog);
}

window.addEventListener("load", function () {
  document.querySelector("form#places-form").addEventListener("submit", handleFormSubmission);
});  