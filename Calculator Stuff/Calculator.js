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
var length = 0;
var frontSign = 0;
var text = 0;
var decimalUsed = 0;
let num1, num2, sign;
var signUsed = 0;

function buttonPressed(a) {
    if (current.innerText == "0") {
        current.innerText = a;
        length = 1;
        text = current.innerText;
    } else if (length == 9) {
        return;
    } else if (decimalUsed == 1 && a == ".") {
        return;
    } else if (current.innerText == "+" || current.innerText == "−" || current.innerText == "×" || current.innerText == "÷" || current.innerText == "^") {
        length = 1;
        current.innerText = "" + a;
    } else {
        current.innerText = "" + current.innerText + a;
        length++;
        if (frontSign == 0) {
            text = current.innerText;
        } else {
            text = (current.innerText).substring(1);
        }
        if (a == ".") {
            decimalUsed = 1;
        }
    }
}

function buttonPressedSign(a) {
    if (text.includes("+") || text.includes("−") || text.includes("×") || text.includes("÷") || text.includes("^")) {
        return;
    } else if (length == 0) {
        return;
    } else if (signUsed != 0) {
        return;
    } else {
        num1 = current.innerText;
        current.innerText = a;
        length = 0;
        text = 0;
        decimalUsed = 0;
        signUsed = a;
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
    if (current.innerText == "+" || current.innerText == "−" || current.innerText == "×" || current.innerText == "÷" || current.innerText == "^") {
        current.innerText = num1;
        length = num1.length;
        signUsed = 0;
    } else {
        text = text.substring(0, length - 1);
        current.innerText = current.innerText.substring(0, length - 1);
        length--;
        if (length <= 0) {
            length = 0;
            current.innerText = 0;
            text = 0;
        }
    }
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
    length = 0;
    text = "";
    current.innerText = "0";
    signUsed = 0;
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
    if (frontSign == 0 || frontSign == "+") {
        current.innerText = "-" + text;
        frontSign = "-";
    } else if (frontSign == "-") {
        current.innerText = "+" + text;
        frontSign = "+";
    }
})

decimal.addEventListener('click', () => {
    buttonPressed(".");
})

button0.addEventListener('click', () => {
    buttonPressed("0");
})

equals.addEventListener('click', () => {
    num2 = current.innerText;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    //current.innerText = parseFloat(-1);
    if (signUsed == "+") {
        current.innerText = num1 + num2;
    } else if (signUsed == "−") {
        current.innerText = num1 - num2;
    } else if (signUsed == "×") {
        current.innerText = num1 * num2;
    } else if (signUsed == "÷") {
        current.innerText = num1 / num2;
    } else if (signUsed == "^") {
        current.innerText = num1 ** num2;
    }
    //Add stuff here
    num1 = 0;
    num2 = 0;
    signUsed = 0;
    if (current.innerText.length > 9) {
        current.innerText = current.innerText.toExponential();
    }
    //Problems to fix: signs and backspace
})

power.addEventListener('click', () => {
    buttonPressedSign("^");
})