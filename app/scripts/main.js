function reloadPage() {
  location.reload();
}

function clearForm(formID) {
  document.getElementById(formID).reset();
}

function getValue() {
  var userBudget = parseFloat(document.budgetCalculator.userBudget.value);
  var userSpending = parseFloat(document.budgetCalculator.userSpending.value);
  var result = userBudget - userSpending;
  result = Math.round(result*100) / 100;
  return result;
}

function createPara(content) {
  var para = document.createElement('p');
  var userInput = document.createTextNode(content);
  para.appendChild(userInput);
  document.getElementById('budgetDiv').appendChild(para);
}

function calculateBudget() {
  var value = getValue();

  if (value == 1 || value == -1) {
    createPara('You will have ' + value + ' dollar left over. :|');
    clearForm('budget');
  } else if (value > 0) {
    createPara('You will have ' + value + ' dollars left over. :D');
    clearForm('budget');
  } else if (value < 0) {
    createPara('You will have ' + value + ' dollars left over. D:');
    clearForm('budget');
  } else if (value == 0) {
    createPara('You will break even. :|');
    clearForm('budget');
  } else {
    createPara('fak u');
    return false;
  }
}
