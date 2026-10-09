// STEP 1
function halfNumber(number) {
    var result = number / 2;
    console.log("Half of " + number + " is " + result + ".");
    return result;
}

// STEP 2
function squareNumber(number) {
    var result = number * number;
    console.log("The result of squaring the number " + number + " is " + result + ".");
    return result;
}

// STEP 3
function percentOf(number1, number2) {
    var result = (number1 / number2) * 100;
    console.log(number1 + " is " + result + "% of " + number2 + ".");
    return result;
}

// STEP 4
function findModulus(number1, number2) {
    var result = number1 % number2;
    console.log(number1 + " is the modulus of " + number2 + " and " + number1 + ".");
    return result;
}

// STEP 5
halfNumber(10);
squareNumber(5);
percentOf(2, 4);
findModulus(10, 3);