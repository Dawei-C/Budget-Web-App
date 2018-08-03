function calculateBudget() {
  var userBudget = parseFloat(document.budgetCalculator.userBudget.value);
  var userSpending = parseFloat(document.budgetCalculator.userSpending.value);
  var result = userBudget - userSpending;
  result = Math.round(result*100) / 100

  if (result > 0) {
    alert("Result is " + result + " - within budget.");
  } else if (result < 0) {
    alert("Result is " + result + " - outside of budget.");
  } else if (result == 0) {
    alert("You broke even. Not sure if worth.");
  } else {
    return false
  }
}