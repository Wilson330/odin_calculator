const add = function(first, second){
    return first + second;
}

const subtract = function(first, second){
    return first - second;
}

const multiply = function(first, second){
    return first * second;
}

const divide = function(first, second){
    return first / second;
}

let firstNum;
let operator;
let secondNum;

const operate = function(firstNum, operator, secondNum){
    if(operator === "+") return add(firstNum, secondNum);
    else if(operator === "-") return subtract(firstNum, secondNum);
    else if(operator === "*") return multiply(firstNum, secondNum);
    else return divide(first, second);
}

const changeDisplay = function(text){
    let display = document.querySelector(".displayer");
    display.textContent = text;
    secondNum = parseInt(text);
}

let nowValue = 0;

let display = document.querySelector(".displayer");

let digitList = document.querySelectorAll(".digit");

for(let i = 0;i < digitList.length;i++){
    digitList[i].addEventListener("click", () => {
        changeDisplay(digitList[i].textContent);
    });
}