//

function updateTotalCost(foodValue, rentValue, clothValue) {
    const foodInputValue = document.getElementById(foodValue);
    const rentInputValue = document.getElementById(rentValue);
    const clothInputValue = document.getElementById(clothValue);
    const totalCost = parseFloat(foodInputValue) + parseFloat(rentInputValue) + parseFloat(clothInputValue);
    return totalCost;
}

function getIncomeInput() {
    const totalExpenses = document.getElementById('Total-Expenses');
    const totalExpensesAmount = totalExpenses.innerText;
    return totalExpensesAmount;
}

function updateBalance(foodValue, rentValue, clothValue, money) {
    const incomeField = document.getElementById('income-field');
    const totalIncomeField = incomeField.value;
    const totalExpenses = document.getElementById('Total-Expenses');
    const totalBalance = document.getElementById('total-balance');
    const totalExpensesAmount = getIncomeInput();
    if (money == true) {
        totalExpenses.innerText = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothValue);
        // totalBalance.innerText = parseInt(totalIncomeField) - parseInt(totalValue);
    }
    else {
        totalBalance.innerText = parseInt(totalIncomeField) - parseInt(totalExpensesAmount);
    }
}

function getInputValue(inputId1, inputId2, inputId3) {
    const inputField = document.getElementById(inputId1, inputId2, inputId3);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
//
document.getElementById('Calculate-btn').addEventListener('click', function () {
    const incomeInputField = document.getElementById(' getInputValue');
    const newInputValue1 = getInputValue('food-field');
    const newInputValue2 = getInputValue('rent-field');
    const newInputValue3 = getInputValue('Cloth-field');
    // const totalInputValue = newInputValue.value ;
    if (newInputValue1 > 0 && newInputValue2 > 0 && newInputValue3 > 0) {
        updateTotalCost('Total-Expenses', newInputValue1, newInputValue2, newInputValue3);
        updateBalance(newInputValue1, newInputValue2, newInputValue3, true);
    }
    if (newInputValue1 > 0 && newInputValue2 > 0 && newInputValue3 > 0 && newInputValue1 < incomeInputField && newInputValue2 < incomeInputField && newInputValue3 < incomeInputField) {
        updateBalance(newInputValue1, newInputValue2, newInputValue3, false);
    }
})

