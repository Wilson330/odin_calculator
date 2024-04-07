const add = function(first, second){
    return (parseInt(first) + parseInt(second)).toString();
}

const subtract = function(first, second){
    return first - second;
}

const multiply = function(first, second){
    return first * second;
}

const divide = function(first, second){
    return parseFloat((parseFloat(first) / parseFloat(second)).toFixed(6)).toString();
}

let firstNum = "0";
let operator = "nothing";
let secondNum = "0";
let dotted = false;
let answered = false;

const operate = function(firstNum, operator, secondNum){
    if(operator === "+") return add(firstNum, secondNum);
    else if(operator === "-") return subtract(firstNum, secondNum);
    else if(operator === "*") return multiply(firstNum, secondNum);
    else if(operator === "/") return divide(firstNum, secondNum);
    
    return "0";
}

const newDisplay = function(text){
    let display = document.querySelector(".displayer");
    display.textContent = text;
}

const refreshOperator = function(){
    let dict = {"+": "#add", "-": "#sub", "*": "#mul", "/": "#div"};
    let button = document.querySelector(dict[operator]);
    button.style.backgroundColor = "orange";
}

const markOperator = function(Operator){
    let dict = {"+": "#add", "-": "#sub", "*": "#mul", "/": "#div"};
    
    if(operator !== "nothing"){
        refreshOperator();
    }
    let button = document.querySelector(dict[Operator]);
    button.style.backgroundColor = "brown";
}

// handle digit
let digitList = document.querySelectorAll(".digit");

for(let i = 0;i < digitList.length;i++){
    digitList[i].addEventListener("click", () => {
        if(operator === "nothing"){
            if(firstNum === "0" || answered === true){
                firstNum = digitList[i].textContent;
                newDisplay(firstNum);
                answered = false;
            }
            else{
                firstNum += digitList[i].textContent;
                newDisplay(firstNum);
            }
        }
        else{
            if(secondNum === "0"){
                secondNum = digitList[i].textContent;
                newDisplay(secondNum);
            }
            else{
                secondNum += digitList[i].textContent;
                newDisplay(secondNum);
            }
        }
    });
}

// handle dot
let dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
    if(answered === true){
        firstNum = "0" + dot.textContent;
        newDisplay(firstNum);
        dotted = true;
        answered = false;
    }
    if(dotted === false){
        if(operator === "nothing"){
            firstNum += dot.textContent;
            newDisplay(firstNum);
            dotted = true;
        }
        else{
            secondNum += dot.textContent;
            newDisplay(secondNum);
            dotted = true;
        }
    }
});

// handle operator
let operatorList = document.querySelectorAll(".operator");

for(let i = 0;i < operatorList.length;i++){
    operatorList[i].addEventListener("click", () => {
        markOperator(operatorList[i].textContent);
        operator = operatorList[i].textContent;
        dotted = false;
        answered = false;
    });
}

// handle equal
let equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
    firstNum = operate(firstNum, operator, secondNum);
    newDisplay(firstNum);
    refreshOperator();
    operator = "nothing";
    secondNum = "0";
    answered = true;
});

// handle clear
let clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    firstNum = "0";
    newDisplay(firstNum);
    refreshOperator();
    operator = "nothing";
    secondNum = "0";
    dotted = false;
});

// handle sign
let sign = document.querySelector(".sign");

sign.addEventListener("click", () => {
    if(secondNum === "0"){
        if(firstNum[0] === "-"){
            firstNum = firstNum.replace("-", "");
        }
        else{
            firstNum = "-" + firstNum;
        }
        newDisplay(firstNum);
    }
    else{
        if(secondNum[0] === "-"){
            secondNum = secondNum.replace("-", "");
        }
        else{
            secondNum = "-" + secondNum;
        }
        newDisplay(secondNum);
    }
});

// handle percentage
let percentage = document.querySelector(".percentage");

percentage.addEventListener("click", () => {
    if(secondNum === "0"){
        firstNum = operate(firstNum, "/", "100");
        newDisplay(firstNum);
    }
    else{
        secondNum = operate(secondNum, "/", "100");
        newDisplay(secondNum);
    }
});