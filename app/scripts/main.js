function reloadPage() {
  location.reload();
}

function calculateBudget() {
  var userBudget = parseFloat(document.budgetCalculator.userBudget.value);
  var userSpending = parseFloat(document.budgetCalculator.userSpending.value);
  var result = userBudget - userSpending;
  result = Math.round(result*100) / 100;

  var paragraph = document.createElement('p');


  if (result > 0) {
      var result = document.createTextNode("You'll have $" + result + " left over. :)");
      paragraph.appendChild(result);
      document.getElementById('main').appendChild(paragraph);
      return false;
  } else if (result < 0) {
      var result = document.createTextNode("You'll have $" + result + " left over. :(");
      paragraph.appendChild(result);
      document.getElementById('main').appendChild(paragraph);
      return false;
  } else if (result == 0) {
      var result = document.createTextNode("You'll break even. Not sure if worth. :|");
      paragraph.appendChild(result);
      document.getElementById('main').appendChild(paragraph);
      return false;
  } else {
      return false;
  }
}