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

                    var d2date = moment().add(1,'days').format('l');
                    var d3date = moment().add(2,'days').format('l');
                    var d4date = moment().add(3,'days').format('l');
                    var d5date = moment().add(4,'days').format('l');
                    var d6date = moment().add(5,'days').format('l');

                    $('#icon2').attr('src', `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`);
                    $("#d2temp").text(data.list[0].main.temp + "°f");
                    $("#d2date").text(d2date);
                    $("#d2humidity").text(data.list[0].main.humidity);
                    $("#d2wind").text(data.list[0].wind.speed);

                    $('#icon3').attr('src', `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`);
                    $("#d3temp").text(data.list[1].main.temp + "°f");
                    $("#d3date").text(d3date);
                    $("#d3humidity").text(data.list[1].main.humidity);
                    $("#d3wind").text(data.list[1].wind.speed);

                    $('#icon4').attr('src', `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`);
                    $("#d4temp").text(data.list[2].main.temp + "°f");
                    $("#d4date").text(d4date);
                    $("#d4humidity").text(data.list[2].main.humidity);
                    $("#d4wind").text(data.list[2].wind.speed);

                    $('#icon5').attr('src', `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`);
                    $("#d5temp").text(data.list[3].main.temp + "°f");
                    $("#d5date").text(d5date);
                    $("#d5humidity").text(data.list[3].main.humidity);
                    $("#d5wind").text(data.list[3].wind.speed);
                    
                    $('#icon6').attr('src', `https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`);
                    $("#d6temp").text(data.list[4].main.temp + "°f");
                    $("#d6date").text(d6date);
                    $("#d6humidity").text(data.list[4].main.humidity);
                    $("#d6wind").text(data.list[4].wind.speed);
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
      $('#icon').attr('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      $("#temp").text(data.main.temp + "°f");
      $("#date").text(today);
      $("#humidity").text(data.main.humidity);
      $("#wind").text(data.wind.speed);

      getUvIndex(lat, lon);

      get5d(searchedCity);

      $('#CCD').show();


})};};

searchCity.addEventListener('submit', searchCitySubmit);
