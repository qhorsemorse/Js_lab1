function calculate_gcd(a, b){
    while(b != 0){
        let c = a
        a = b
        b = c%b
    }
    return a
}

function calculate_lcm(a, b){
    return (a*b)/calculate_gcd(a, b)
}

function clearOutput(divID) {
    var outputDiv = document.getElementById(divID);
    while (outputDiv.firstChild) {
        outputDiv.removeChild(outputDiv.firstChild);
    }
}

function Find_lcm(){
	
	var value1 = document.getElementById("LCM1").value;
	var value2 = document.getElementById("LCM2").value;
	if ((value1.charCodeAt(0)>=48 && value1.charCodeAt(0)<=57)|| (value2.charCodeAt(0)>=48 && value2.charCodeAt(0)<=57)){
		var outputDiv = document.getElementById("outputLCM");
		value1 = Number(value1);
		value2 = Number(value2);
		p = document.createElement("p");
		p.textContent = calculate_lcm(value1, value2);
		clearOutput("outputLCM")
		outputDiv.appendChild(p);
	}
	else{
		var outputDiv = document.getElementById("outputLCM");
		p = document.createElement("p");
		p.textContent = "Error, my brother!"
		clearOutput("LCM");
		outputDiv.appendChild(p);
	}
}

function Sum() {
    var value1 = parseInt(document.getElementById("Sum1").value);
    var value2 = parseInt(document.getElementById("Sum2").value);
    var ouputDiv = document.getElementById("outputSum");
    p = document.createElement("p");
    p.textContent = value1+value2;
    clearOutput("outputSum")
    ouputDiv.appendChild(p);
}

function PowerRaise() {
    var value1 = parseInt(document.getElementById("Power1").value);
    var value2 = parseInt(document.getElementById("Power2").value);
    var ouputDiv = document.getElementById("outputPower");
    p = document.createElement("p");
    p.textContent = value1**value2;
    clearOutput("outputPower")
    ouputDiv.appendChild(p);
}

function GeneratePassword() {
    var ouputDiv = document.getElementById("outputPassword");
    const length = 10; // Change the length of the password if needed
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
    p = document.createElement("p");

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    p.textContent = password;
    clearOutput("outputPassword")
    ouputDiv.appendChild(p);
}

function countOccurrences() {
    var inputString = document.getElementById("Set").value;
    var targetNumber = parseInt(document.getElementById("Num").value);
    var ouputDiv = document.getElementById("outputOccurence");
    p = document.createElement("p");

    const numbers = inputString.split(/[ ,/]+/);
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = parseInt(numbers[i]);

        if (!isNaN(currentNumber) && currentNumber === targetNumber) {
            count++;
        }
    }

    clearOutput("outputOccurence");
    p.textContent = "The number occures " + count + " times";
    ouputDiv.appendChild(p);
}

function checkDivisibility() {
    var number = parseInt(document.getElementById("Num_to_check").value);
    var ouputDiv = document.getElementById("outputDividents");
    p = document.createElement("p");

    let result = "number is divisible by: ";

    if (number % 2 === 0) {
        result += "2, ";
    }
    if (number % 3 === 0) {
        result += "3, ";
    }
    if (number % 5 === 0) {
        result += "5, ";
    }
    if (number % 9 === 0) {
        result += "9, ";
    }
    if (number % 10 === 0) {
        result += "10, ";
    }
    if (result === "number is divisible by: ") {
        result = "Not divisible by 2, 3, 5, 9, or 10";
    } else {
        result = result.slice(0, -2);
        result += ";"
    }

    p.textContent = result;
    clearOutput("outputDividents");
    ouputDiv.appendChild(p);
}