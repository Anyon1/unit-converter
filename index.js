/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

- Generate all conversions when the user clicks "Convert"
- Round the numbers down to three decimal places
*/
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const submit = document.getElementById("submit")


submit.addEventListener("click", function() {
    let value = inputEl.value

    lengthEl.textContent =`${value} meter = ${(value * 3.281).toFixed(3)} feet |
                           ${value} feet = ${(value / 3.281).toFixed(3)} meter `

    volumeEl.textContent =`${value} liters = ${(value * 0.264).toFixed(3)} gallons |
                           ${value} gallons = ${(value / 0.264).toFixed(3)} liters `

    massEl.textContent =`  ${value} kilos = ${(value * 2.204).toFixed(3)} pounds |
                           ${value} pounds = ${(value / 2.204).toFixed(3)} kilos `
})
