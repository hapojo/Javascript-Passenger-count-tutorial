//document.getElementById("count-el").innerText = 5;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

//function save() {
 //   newCount = count + " - "
   // saveEl.textContent += newCount
    //countEl.textContent = 0
    //count = 0
    
//}

//let myPoints = 3

//function add3Points() {
  //  myPoints += 3 

//}

//function remove1Point() {
    //myPoints -= 1
//}

//add3Points()
//add3Points()
//add3Points()
//remove1Point()
//remove1Point()

//console.log(myPoints)


//function button() {
   // let button = "Something went wrong, please try again"
    //document.getElementById("error").textContent += button
//}

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    addNum = num1 + num2
    document.getElementById("sum-el").textContent += addNum
}

function subtract() {
    subtractNum = num1 - num2
    document.getElementById("sum-el").textContent += subtractNum
}

function divide() {
    divideNum = num1 / num2
    document.getElementById("sum-el").textContent += divideNum
}

function multiply() {
    multiplyNum = num1 * num2
    document.getElementById("sum-el").textContent += multiplyNum
}