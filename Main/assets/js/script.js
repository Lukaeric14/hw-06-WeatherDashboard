var searchCity = document.querySelector('#search-form');
var today = moment();
   
$(document).ready(function () {
   $('#CCD').hide()
});


var APIKey = "afad52e8ca20da3827e5cb6084687d0f";

function searchCitySubmit(evt) {
  evt.preventDefault();

  var searchedCity = document.querySelector('#search-input').value;

  if (!searchedCity) {
    console.error('Enter relevant US City');
    return;
  } else {
  console.log(searchedCity);

  var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchedCity + '&units=imperial' + '&appid=' + APIKey;
  fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then (function(data) {

      $("#cityName").text(data.temp);
     // $("#temp").text(todayTemp);
      $("#date").text(today);
      $("#humidity").text(todayHumidity);
      $("#wind").text(todayind);


      $('#CCD').show();
})};}

searchCity.addEventListener('submit', searchCitySubmit);
