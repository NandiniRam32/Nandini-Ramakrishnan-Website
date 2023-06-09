var plus = document.getElementById("+");
var minus = document.getElementById("-");
var multiply = document.getElementById("x");
var divide = document.getElementById("/");
var button7 = document.getElementById("7");
var button8 = document.getElementById("8");
var button9 = document.getElementById("9");
var backspace = document.getElementById("<-");
var button4 = document.getElementById("4");
var button5 = document.getElementById("5");
var button6 = document.getElementById("6");
var clear = document.getElementById("C");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var plusMinus = document.getElementById("+/-");
var decimal = document.getElementById(".");
var button0 = document.getElementById("0");
var equals = document.getElementById("=");
var power = document.getElementById("^");
var current = document.getElementById("calculator-top-box");

function buttonPressed(a) {
    if (current.innerText == "0") {
        current.innerText = a;
    } else {
        current.innerText = "" + current.innerText + a;
    }
}

function buttonPressedSign(a) {
    if (current.innerText == "0") {
        current.innerText = a;
    } else {
        current.innerText = "" + current.innerText + a;
    }
}

plus.addEventListener('click', () => {
    buttonPressedSign("+");
    //current.innerText = current.innerText + "+";
})  

minus.addEventListener('click', () => {
    buttonPressedSign("−");
})

multiply.addEventListener('click', () => {
    buttonPressedSign("×");
})

divide.addEventListener('click', () => {
    buttonPressedSign("÷");
})

button7.addEventListener('click', () => {
    buttonPressed("7");
})

button8.addEventListener('click', () => {
    buttonPressed("8");
})

button9.addEventListener('click', () => {
    buttonPressed("9");
})

backspace.addEventListener('click', () => {
    //SPECIAL ONE
})

button4.addEventListener('click', () => {
    buttonPressed("4");
})

button5.addEventListener('click', () => {
    buttonPressed("5");
})

button6.addEventListener('click', () => {
    buttonPressed("6");
})

clear.addEventListener('click', () => {
    //ADD A SPECIAL ONE HERE
})

button1.addEventListener('click', () => {
    buttonPressed("1");
})

button2.addEventListener('click', () => {
    buttonPressed("2");
})

button3.addEventListener('click', () => {
    buttonPressed("3");
})

plusMinus.addEventListener('click', () => {
    //ADD A SPECIAL ONE HERE
})

decimal.addEventListener('click', () => {
    buttonPressed(".");
})

button0.addEventListener('click', () => {
    buttonPressed("0");
})

equals.addEventListener('click', () => {
    //SPECIAL ONE
})

power.addEventListener('click', () => {
    buttonPressed("^");
})