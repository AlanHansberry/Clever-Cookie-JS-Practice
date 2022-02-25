// HINT: You can delete this console.log after you no longer need it!
// console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Alan Hansberry" // HINT: Replace this with your own name!
// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let qtyTotal = (gb + cc + sugar) //sum of cookie count
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
const gbText = document.getElementById('qty-gb') 
const ccText = document.getElementById('qty-cc')
const sugarText = document.getElementById('qty-sugar')
const totalText = document.getElementById('qty-total')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
// Code to update name display
credit.textContent = `Created by ${yourName}`
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Event listener for clicks on the "+" button for Gingerbread cookies
// TODO: Hook up event listeners for the rest of the buttons
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
gbPlusBtn.addEventListener('click', function() { 
    gb++  
    qtyTotal++
    gbText.textContent = gb
    totalText.textContent = qtyTotal
})
gbMinusBtn.addEventListener('click', function() {
    if(gb >= 1){
    gb--
    qtyTotal--
    gbText.textContent = gb
    totalText.textContent = qtyTotal
    }
    
})
ccPlusBtn.addEventListener('click', function() {
    cc++
    qtyTotal++
    ccText.textContent = cc
    totalText.textContent = qtyTotal
})
ccMinusBtn.addEventListener('click', function() {
    if(cc >= 1){
    cc--
    qtyTotal--
    ccText.textContent = cc
    totalText.textContent = qtyTotal
    }
})
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    qtyTotal++
    sugarText.textContent = sugar
    totalText.textContent = qtyTotal
})
sugarMinusBtn.addEventListener('click', function() {
    if(sugar >= 1){
    sugar--
    qtyTotal--
    sugarText.textContent = sugar
    totalText.textContent = qtyTotal
    }
})


