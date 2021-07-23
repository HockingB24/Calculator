//Functions for Math Evaluation 
function  addNums(a, b) {
    return a+b;
}
function subtractNums(a,b) {
    return a-b;
}
function multiplyNums(a, b) {
    return a*b;
}
function divideNums(a, b) {
    if (b == 0) {
        alert("Error: Divided By Zero");
        clearAll();
        return "";
    }
    else
        return a/b;
}

//Operate Function, takes Operator + 2 nums and calls math eval
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return addNums(num1,num2);
            break;
        case "-":
            return subtractNums(num1,num2);
            break;
        case "*":
            return multiplyNums(num1,num2);
            break;
        case "/":
            return divideNums(num1, num2);
            break;
    }
}


//function for displaying numbers when pressed
function display(e) {
    let displayText = this.innerText;
    dispText.innerText += displayText;
    displayValue = parseInt(dispText.innerText);
   //console.log("Display: " + displayValue);
}


//clears display on enter or operator click
function clearDisplay(e) {
    dispText.innerText = "";
}

//Stores data for Calculations
function storeForCalc(e) {
    console.log("Display Value: " + displayValue);
    number1 = displayValue;
    console.log(number1);
    operator = this.innerText;
    console.log(operator);
    periodBtn.addEventListener('click', display);
    periodBtn.addEventListener('click', deactivatePeriod);
    console.log("period added");
    equalBtn.addEventListener('click', clearDisplay);
    equalBtn.addEventListener('click', calculate);
}

function calculate(e) {
    let number2 = displayValue;
    let solution = operate(operator, number1, number2);
    dispText.innerText = solution;
    console.log(solution);
    displayValue = parseInt(dispText.innerText);
    console.log("Display: " + displayValue);
    periodBtn.addEventListener('click', display);
    periodBtn.addEventListener('click', deactivatePeriod);
    equalBtn.removeEventListener('click', clearDisplay);
    equalBtn.removeEventListener('click', calculate);
    
}
function clearAll(e) {
    number1 = 0;
    number2 = 0;
    dispText.innerText = "";
    operator = "";
}

function deleted(e) {
    dispText.innerText = dispText.innerText.slice(0, -1);
    displayValue = parseInt(dispText.innerText);
}

function deactivatePeriod(e) {
    periodBtn.removeEventListener('click', display);
    periodBtn.removeEventListener('click', deactivatePeriod);
}


//numbers for calculation
let number1 = null;
let number2 = null;

let operator = null;

let displayValue = 0;
let dispText = document.querySelector('.dispText')

let operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(element => element.addEventListener('click', clearDisplay));
operatorBtns.forEach(element => element.addEventListener('click', storeForCalc))

let equalBtn = document.querySelector('#equals');

let numberBtns = document.querySelectorAll('.numbers');
numberBtns.forEach(element => element.addEventListener('click', display));
let periodBtn = document.querySelector('#period');
periodBtn.addEventListener('click', display);
periodBtn.addEventListener('click', deactivatePeriod);

let clearBtn = document.querySelector('#clearAll');
clearBtn.addEventListener('click', clearAll);


let deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', deleted);