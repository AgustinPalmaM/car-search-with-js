// variables
const result = document.querySelector('#resultado');
// Events

document.addEventListener('DOMContentLoaded', () => {
  showCars();
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