console.log("Hello, World! This is a mini project.");

//tip calculator
let tipAmount;

let subTotal=67.72;

let totalBill;

const tipPercentage = 0.2; // 20% tip

tipAmount = subTotal * tipPercentage;
console.log("Tip Amount: " + tipAmount.toFixed(2));

totalBill = subTotal + tipAmount;
console.log("Total Amount due: " + totalBill.toFixed(2));

//paycheck calculator 

let hoursWorked = 40;
let hourlyRate = 15.50;
let grossPay;

grossPay = hoursWorked * hourlyRate;
console.log("Gross Pay: " + grossPay.toFixed(2));

//grade calculator

let pointsEarned = 85;
let totalPoints = 100;
let grade;

let gradePercentage = (pointsEarned / totalPoints) * 100;

grade = (pointsEarned / totalPoints) * 100;
console.log("Grade Percentage: " + gradePercentage.toFixed(2));

//Gas Cost Calculator

let totalDistance = 150; // in miles
let fuelEfficiency = 25;
letgasPrice = 8.43;

let totalGasCost = (totalDistance / fuelEfficiency) * gasPrice;
console.log("Total Gas Cost: " + totalGasCost.toFixed(2));
