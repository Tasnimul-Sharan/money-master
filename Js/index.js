//
function getInputValue(inputId) {
    const inputField = document.getElementsByClassName(inputId);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

// function updateCost(foodValue, rentValue, clothValue) {
//     const foodInputValue = document.getElementById(foodValue)
//     const rentInputValue = document.getElementById(rentValue)
//     const clothInputValue = document.getElementById(clothValue)
//     const totalCost = parseFloat(foodInputValue) + parseFloat(rentInputValue) + parseFloat(clothInputValue);
//     return totalCost;
// }

function getIncomeInput() {
    const totalIncome = document.getElementById('income-input').value;
    return totalIncome;
}

function updateBalance(firstInputValue, secondInputValue, thirdInputValue, balance) {
    const totalIncome = document.getElementById('income-input').value;
    const totalExpenses = document.getElementById('Total-Expenses').innerText
    const totalBalance = document.getElementById('total-balance').innerText
    // const totalIncome = getIncomeInput();
    if (balance == true) {
        totalExpenses = parseFloat(firstInputValue) + parseFloat(secondInputValue) + parseFloat(thirdInputValue);
    }
    else {
        totalBalance = parseFloat(totalIncome) - parseFloat(totalExpenses);
    }
}


document.getElementById('Calculate-btn').addEventListener('click', function () {
    const newInputValue = getInputValue('input-field');
    if (newInputAmount > 0) {
        updateCost('Total-Expenses', newInputAmount);
        updateBalance(newInputAmount, true);
    }
    else {
        updateBalance(newInputAmount, false);

    }
})