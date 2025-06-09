

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("რიცხვი არის ლუწი");
    } else {
        console.log("რიცხვი არის კენტი");
    }
}


function checkTemperature(celsius) {
    if (celsius < 10) {
        console.log("ცივი");
    } else if (celsius >= 10 && celsius <= 25) {
        console.log("ზომიერი");
    } else {
        console.log("ცხელი");
    }
}


function evaluateGrade(score) {
    if (score >= 90 && score <= 100) {
        console.log("A");
    } else if (score >= 80 && score <= 89) {
        console.log("B");
    } else if (score >= 70 && score <= 79) {
        console.log("C");
    } else if (score >= 60 && score <= 69) {
        console.log("D");
    } else if (score >= 0 && score <= 59) {
        console.log("F");
    } else {
        console.log("არასწორი ქულა");
    }
}


