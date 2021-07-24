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

//Stores number inputted before operator press AND specifies which operator.
//Combines with calculate to do the overall calculation.
function storeForCalc(e) {
    number1 = displayValue; //Grabs current displayed value for calculation
    operator = this.innerText; //Grabs current operator for calculation 

    //Restore period button functionality since it is deactivated upon use
    //periodBtn.addEventListener('click', display);  
    //periodBtn.addEventListener('click', deactivatePeriod);

    //Give equal button functionality, so it can only be used AFTER operator is selected to avoid error
    equalBtn.addEventListener('click', clearDisplay);
    equalBtn.addEventListener('click', calculate);
}


//Uses number1 and operator from storeForCalc, and takes input from current displayed value for number2
//Does the specified operation on number1 and number2
function calculate(e) {
    let number2 = displayValue; //Grab display value for number2
    let solution = operate(operator, number1, number2); //solve operation 
    dispText.innerText = solution;  //display solution 
    displayValue = parseInt(dispText.innerText);    //Set new DisplayValue for further chain calculations

    //Restore period button functionality in case it was pressed and therefore deactivated (see below)
    //periodBtn.addEventListener('click', display);
    //periodBtn.addEventListener('click', deactivatePeriod);

    //Removes equal button functionality until operator is pressed again
    equalBtn.removeEventListener('click', clearDisplay);
    equalBtn.removeEventListener('click', calculate);
    
}

//clears all data from variables and display
function clearAll(e) {
    number1 = 0;
    number2 = 0;
    dispText.innerText = "";
    operator = "";
}

//Delete the rightmost value off the display and current number 
function deleted(e) {
    dispText.innerText = dispText.innerText.slice(0, -1);
    displayValue = parseInt(dispText.innerText);
}

//Whenever period is pressed, deactivate it until reactivated (After either hitting = or an operator)
/*function deactivatePeriod(e) {
    periodBtn.removeEventListener('click', display);
    periodBtn.removeEventListener('click', deactivatePeriod);
}
*/

//numbers for calculation
let number1 = null;
let number2 = null;

//Set default operator to null
let operator = null;

//Set up display
let displayValue = 0;
let dispText = document.querySelector('.dispText')

//Retrieve and set up operator buttons
let operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(element => element.addEventListener('click', clearDisplay));
operatorBtns.forEach(element => element.addEventListener('click', storeForCalc))

//Retrieve equal button
let equalBtn = document.querySelector('#equals');

//Retrieve number buttons, set up event listener
let numberBtns = document.querySelectorAll('.numbers');
numberBtns.forEach(element => element.addEventListener('click', display));


//Retrieve period button, set up two event listeners
//let periodBtn = document.querySelector('#period');
//periodBtn.addEventListener('click', display);
//periodBtn.addEventListener('click', deactivatePeriod);


//Retrieve clear button, set up event listener
let clearBtn = document.querySelector('#clearAll');
clearBtn.addEventListener('click', clearAll);

//Retrieve delete button, set up event listener 
let deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', deleted);