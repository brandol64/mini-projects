// Output HTML Element Variables
let tipOutput = document.getElementById('tipAmountOutput');
let totalOutput = document.getElementById('totalBillOutput');
let checkOutput = document.getElementById('paycheckAmountOutput');
let gradeOutput = document.getElementById('percentGradeOutput');
let diceOutput = document.getElementById('diceOutput');
let usernameOutput = document.getElementById('usernameOutput');

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


let dieBtn = document.getElementById("diceButton");
dieBtn.addEventListener('click', function () {


    // Dice Roll Variables
    let numberRolled;


    // Do the math
    //Multiply by 6 because there are 6 sides to a die
    //adding 1 because you can't roll a zero!
    numberRolled = Math.floor(Math.random() * 6 + 1);//adding 1 because you can't roll a zero!


    //Math.floor rounds our random number down to a whole number



    // Show the output
    diceOutput.innerHTML = numberRolled;


})
let usernameBtn = document.getElementById("usernameButton");
usernameBtn.addEventListener('click', function () {
    // Grade Calculator Variables
    let firstName = document.getElementById('firstNameInput').value;
    let favoriteGame = document.getElementById('favoriteGameInput').value;
    let number;
    let username;


    number = Math.random() * 370 + 1
    number = Math.floor(number);

    // Do the math
    username = firstName + favoriteGame + number;





    // Show the output
    usernameOutput.innerHTML = username;


})