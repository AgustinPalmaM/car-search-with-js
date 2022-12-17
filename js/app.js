// variables
const brandSelect = document.querySelector('#marca');
const yearSelect = document.querySelector('#year');
const minPriceSelect = document.querySelector('#minimo');
const maxPriceSelect = document.querySelector('#maximo');
const doorsSelect = document.querySelector('#puertas');
const transmissionSelect = document.querySelector('#transmision');
const colorSelect = document.querySelector('#color');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 15;

// Div that contains the results
const result = document.querySelector('#resultado');

// This object store data selected by the user to make a search
const searchData = {
  brand: '',
  year: '',
  maxPrice: '',
  minPrice: '',
  doors: '',
  color: '',
  transmission: '',
}

// Events

document.addEventListener('DOMContentLoaded', () => {

  showCars(cars); // show the entire list of cars when document is loaded

  fillSelectYears(); // fill the options in the years select field

});

brandSelect.addEventListener('change', e => {
  searchData.brand = e.target.value;

  filterCar();

})

yearSelect.addEventListener('change', (e) => {
  searchData.year = e.target.value;
  filterCar();
})

minPriceSelect.addEventListener('change', (e) => {
  searchData.minPrice = e.target.value;
  filterCar();
})

maxPriceSelect.addEventListener('change', (e) => {
  searchData.maxPrice = e.target.value;
  filterCar();
})

doorsSelect.addEventListener('change', (e) => {
  searchData.doors = e.target.value;
  filterCar();
})

transmissionSelect.addEventListener('change', (e) => {
  searchData.transmission = e.target.value;
  filterCar();
})

colorSelect.addEventListener('change', (e) => {
  searchData.color = e.target.value;
  filterCar();
})


// Functions

function showCars(cars) {
  
  cleanHtml() // Delete previuos html elements to avoid duplicated lines in results
  cars.forEach(car => {
    const carHtml = document.createElement('P');
    const { brand, model, year, price, doors, color, transmission } = car;
    carHtml.textContent = `
      ${ brand } - ${ model } - ${ year } - ${ doors } - ${ color } - ${ transmission } - $${ price }
    `
    result.appendChild(carHtml)
  })
  
}

function cleanHtml() {
  while ( result.firstChild ) {
    result.firstChild.remove()
  }
}

// this function fill the options in select years field with years between a max and a min declared in variables
function fillSelectYears() {
  
  for (let i = maxYear; i >= minYear; i--){
    let optionYear = document.createElement('OPTION')
    optionYear.textContent = i;
    optionYear.value = i;
    year.appendChild(optionYear);
  }

}

function filterCar() {
  const resultFiltered =  cars.filter( filterBrand )
                              .filter( filterYear )
                              .filter( filterMinPrice )
                              .filter( filterMaxPrice )
                              .filter( filterDoors )
                              .filter( filterTransmission )
                              .filter( filterColor )
  
  showCars(resultFiltered);
}

function filterBrand(car) {
  const { brand } = searchData;
  if ( brand ) {
    return car.brand === brand
  }

  return car;
}

function filterYear(car) {
  const { year } = searchData;
  if ( year ) {
    return car.year === parseInt(year)
  }

  return car
}

function filterMinPrice(car) {
  const { minPrice } = searchData;
  if ( minPrice ) {
    return parseInt(minPrice) <= car.price 
  }

  return car
}

function filterMaxPrice(car) {
  const { maxPrice } = searchData;
  if ( maxPrice ) {
    return parseInt(maxPrice) >= car.price 
  }

  return car
}

function filterDoors(car) {
  const { doors } = searchData;
  if ( doors ) {
    return parseInt(doors) === car.doors
  }

  return car
}

function filterTransmission(car) {
  const { transmission } = searchData;
  if ( transmission ) {
    return transmission === car.transmission
  }

  return car
}

function filterColor(car) {
  const { color } = searchData;
  if ( color ) {
    return color === car.color
  }

  return car
}