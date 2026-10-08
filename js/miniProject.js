// Output HTML Element Variables
let tipOutput = document.getElementById('tipAmountOutput');
let totalOutput = document.getElementById('totalBillOutput');
let checkOutput = document.getElementById('paycheckAmountOutput');
let gradeOutput = document.getElementById('percentGradeOutput');
let gasOutput = document.getElementById('gasCostOutput');
let diceOutput = document.getElementById('diceOutput');

let tipBtn = document.getElementById("tipButton");
tipBtn.addEventListener('click', function () {
    // Tip Calculator Variables
    let subTotal = document.getElementById('subTotalInput').valueAsNumber;
    let percentage = document.getElementById('percentageInput').valueAsNumber;
    let tipAmount;
    let totalBill;


    // Do the math
    tipAmount = subTotal * percentage;
    totalBill = subTotal + tipAmount;


    // Only show 2 decimal places
    tipAmount = tipAmount.toFixed(2);
    totalBill = totalBill.toFixed(2);


    // Show the output
    tipOutput.innerHTML = "$" + tipAmount;
    totalOutput.innerHTML = "$" + totalBill;
})


let paycheckBtn = document.getElementById("paycheckButton");
paycheckBtn.addEventListener('click', function () {
    // Paycheck Calculator Variables
    let hoursWorked = document.getElementById('hoursWorkedInput').valueAsNumber;
    let hourlyRate = document.getElementById('hourlyRateInput').valueAsNumber;
    let paycheckAmount;


    // Do the math
    paycheckAmount = hoursWorked * hourlyRate;


    // Only show 2 decimal places
    paycheckAmount = paycheckAmount.toFixed(2);


    // Show the output
    checkOutput.innerHTML = "$" + paycheckAmount;
})




let gradeBtn = document.getElementById("gradeButton");
gradeBtn.addEventListener('click', function () {
    // Grade Calculator Variables
    let pointsEarned = document.getElementById('pointsEarnedInput').valueAsNumber;
    let totalPoints = document.getElementById('totalPointsInput').valueAsNumber;
    let percentGrade;


    // Do the math
    percentGrade = pointsEarned / totalPoints;


    // Change to Percent instead of Decimal
    percentGrade = Math.round(percentGrade * 100);


    // Show the output
    gradeOutput.innerHTML = percentGrade + "%";


})


let gasBtn = document.getElementById("gasButton");
gasBtn.addEventListener('click', function () {


    // Gas Cost Calculator Variables
    let tankGallons = document.getElementById('tankGallonsInput').valueAsNumber;
    let perGallon = document.getElementById('perGallonInput').valueAsNumber;
    let gasCost;


    // Do the math
    gasCost = tankGallons * perGallon;


    // Only show 2 decimal places
    gasCost = gasCost.toFixed(2);


    // Show the output
    gasOutput.innerHTML = "$" + gasCost;


})


let dieBtn = document.getElementById("dieButton");
dieBtn.addEventListener('click', function () {




    // Gas Cost Calculator Variables
    let numberRolled;




    // Do the math
    numberRolled = Math.floor(Math.random() * 6 + 1);




    // Only show 2 decimal places
    numberRolled = Math.floor(numberRolled)




    // Show the output
    diceOutput.innerHTML = numberRolled;




})
