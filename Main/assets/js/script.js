var searchCity = document.querySelector('#search-form');
var today = moment().format('DD-MM-yyyy');
   
$(document).ready(function () {
   $('#CCD').hide()
});


var APIKey = "afad52e8ca20da3827e5cb6084687d0f";

var getUvIndex = function (lat, lon) {
  var apiURL = `https://api.openweathermap.org/data/2.5/uvi?appid=cb888a3ff2e15203b988ff3728172064&lat=${lat}&lon=${lon}`
  fetch(apiURL)
      .then(function (response) {
          response.json().then(function (data) {
              console.log(data);
              $("#uv").text(data.value);

          });
      })};

var get5d = function (searchedCity) {
        var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&units=imperial&appid=cb888a3ff2e15203b988ff3728172064`
        fetch(apiURL)
            .then(function (response) {
                response.json().then(function (data) {
                    console.log(data);

                    $("#d2cityName").text(searchedCity);
                    $("#d2temp").text(data.list[0].main.temp + "°f");
                    $("#d2date").text(today.add(1, 'days'));
                    $("#d2humidity").text(data.main.humidity);
                    $("#d2wind").text(data.wind.speed);
                });
            });
    };

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

          console.log(data);   

      var lat = data.coord.lat;
      var lon = data.coord.lon;

      $("#cityName").text(searchedCity);
      $("#temp").text(data.main.temp + "°f");
      $("#date").text(today);
      $("#humidity").text(data.main.humidity);
      $("#wind").text(data.wind.speed);

      getUvIndex(lat, lon);

      get5d(searchedCity);

      $('#CCD').show();


})};};

searchCity.addEventListener('submit', searchCitySubmit);
