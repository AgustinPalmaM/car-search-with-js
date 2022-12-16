// variables
const result = document.querySelector('#resultado');
const year = document.querySelector('#year');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 15;

// Events

document.addEventListener('DOMContentLoaded', () => {

  showCars(); // show the entire list of cars when document is loaded

  fillSelectYears(); // fill the options in the years select field

})

// Functions

function showCars() {
  
  cars.forEach(car => {
    const carHtml = document.createElement('P');
    const { brand, model, year, price, doors, color, transmission } = car;
    carHtml.textContent = `
      ${ brand } - ${ model } - ${ year } - ${ doors } - ${ color } - ${ transmission } - $${ price }
    `
    result.appendChild(carHtml)
  })
  
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