// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Ian Cannon" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#plus-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#plus-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')



// Code to update name display
credit.textContent = `Created by ${yourName}`



// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    "qty-gb" = gb + 1;

// HINT: You can delete this console.log after you no longer need it!
console.log("Gingerbread + button was clicked!")
console.log("Gingerbread - button was clicked!")
console.log("Chocolate chip + button was clicked!")
console.log("Chocolate chip - button was clicked!")
console.log("Sugar + button was clicked!")
console.log("Sugar - button was clicked!")


// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons



