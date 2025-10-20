let incomeInput = prompt("Enter your income:");
let expenseInput = prompt("Enter your expenses:");

// Log types before conversion
console.log("income input type: ", typeof incomeInput); //string
console.log("Expense input type: ", typeof expenseInput); //string

//convert inputs to numbers
let income = Number(incomeInput);
let expenses = Number(expenseInput);

//Check for valid number input
if (isNaN(income) || isNaN(expenses)) {
  console.log("Invalid input. please enter valid numbers.");
} else {
  let balance = income - expenses;

  console.log("Budjet Summary");
  console.log("Income: $" + income);
  console.log("Expenses: $" + expenses);
  console.log("Balence: $" + balance);

  //type coercion
  console.log("\n Type coercion Checks:"); //true
  console.log('"100" == 100 -> ', "100" == 100); //true
  console.log('"100" === 100 -> ', "100" === 100); //false
}
