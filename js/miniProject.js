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