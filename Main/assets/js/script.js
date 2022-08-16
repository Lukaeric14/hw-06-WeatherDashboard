var searchCity = document.querySelector('#search-form');

function searchCitySubmit(evt) {
  evt.preventDefault();

  var searchedCity = document.querySelector('#search-input').value;

  if (!searchedCity) {
    console.error('Enter relevant US City');
    return;
  }

  console.log(searchedCity);

  



}

searchCity.addEventListener('submit', searchCitySubmit);
