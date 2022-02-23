// HINT: You can delete this console.log after you no longer need it!

// First, tell us your name
let yourName = 'Ian Cannon' // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let gbcount = document.querySelector("#qty-gb")
let cccount = document.querySelector("#qty-cc")
let sugarcount = document.querySelector("#qty-sugar")


console.log("Gingerbread", gbcount)

// selecting the element with an id of add-gb
let gbPlusBtn = document.querySelector('#add-gb')
let gbMinusBtn = document.querySelector('#minus-gb')

gbPlusBtn.addEventListener("click", function() {
    gb = gb + 1;

    gbcount.textContent = gb
})

gbMinusBtn.addEventListener("click", function() {
    gb = gb - 1;

    gbcount.textContent = gb
})

console.log("Chocolate Chip", cccount)

let ccPlusBtn = document.querySelector('#plus-cc')
let ccMinusBtn = document.querySelector('#minus-cc')

ccMinusBtn.addEventListener("click", function() {
    cc = cc - 1;

    cccount.textContent = cc
})

console.log("Sugar", sugarcount)

let sugarPlusBtn = document.querySelector('#plus-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')

sugarMinusBtn.addEventListener("click", function() {
    sugar = sugar - 1;

    sugarcount.textContent = sugar
})

ccPlusBtn.addEventListener("click", function() {
    cc = cc + 1;

    cccount.textContent = cc
})

sugarPlusBtn.addEventListener("click", function() {
    sugar = sugar + 1;

    sugarcount.textContent = sugar
})
// Code to update name display
credit.textContent = `Created by ${yourName}`
