//
function updateTotalCost(foodValue, rentValue, clothValue) {
    const foodInputValue = document.getElementById(foodValue);
    const rentInputValue = document.getElementById(rentValue);
    const clothInputValue = document.getElementById(clothValue);
    const totalCost = parseFloat(foodInputValue) + parseFloat(rentInputValue) + parseFloat(clothInputValue);
    return totalCost;
}

function getTotalExpenses() {
    const totalExpenses = document.getElementById('Total-Expenses');
    const totalExpensesAmount = totalExpenses.innerText;
    return totalExpensesAmount;
}

function updateBalance(foodValue, rentValue, clothValue, money) {
    const incomeField = document.getElementById('income-field');
    const totalIncomeField = incomeField.value;
    const totalExpenses = document.getElementById('Total-Expenses');
    const totalBalance = document.getElementById('total-balance');
    const totalExpensesAmount = getTotalExpenses();
    if (money == true) {
        totalExpenses.innerText = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothValue);
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
    const newInputValue1 = getInputValue('food-field');
    const newInputValue2 = getInputValue('rent-field');
    const newInputValue3 = getInputValue('Cloth-field');
    const incomeField = document.getElementById('income-field');
    const errorMessage = document.getElementById('error-message');
    const negativeError = document.getElementById('negative-error');

    // const totalInputValue = newInputValue.value ;
    if (newInputValue1 > 0 && newInputValue2 > 0 && newInputValue3 > 0) {
        updateTotalCost('Total-Expenses', newInputValue1, newInputValue2, newInputValue3);
        updateBalance(newInputValue1, newInputValue2, newInputValue3, true);
    }
    if (newInputValue1 > 0 && newInputValue2 > 0 && newInputValue3 > 0 && newInputValue1 < incomeField && newInputValue2 < incomeField && newInputValue3 < incomeField) {
        updateBalance(newInputValue1, newInputValue2, newInputValue3, false);
    }

    if (newInputValue1 < 0 && newInputValue2 < 0 && newInputValue3 < 0 && incomeField < 0) {
        // console.log(alert('its not allowed'))
        negativeError.style.display = 'block';
        errorMessage.style.display = 'none';

    }

    else if (newInputValue1 == String("") && newInputValue2 == String("") && newInputValue3 == String("") && incomeField == String("")) {
        errorMessage.style.display = 'block';
        // console.log(alert('its not allowed'))
        negativeError.style.display = 'none';
    }

})


// newInputValue1 > 0 && newInputValue2 > 0 && newInputValue3 > 0

// else if (newInputValue1 = newInputValue2 = newInputValue3 < 0) {
//     errorMessage.style.display = 'block';
// }







function handleError() {


    // const negativeError = document.getElementById('negative-error');
    // const number = event.target.value;
    // totalBalance > incomeField && totalBalance < 0 && totalExpenses > incomeField
    // const incomeField = document.getElementById('income-field').value;
    const totalBalance = document.getElementById('total-balance');
    // const totalExpenses = document.getElementById('Total-Expenses').innerText;
    const errorMessage = document.getElementById('error-message');
    //
    // }

    // handleError();
    if (totalBalance > 0 && totalBalance < incomeField) {
        // negativeError.style.display = 'block';
        // incomeField.value = '';
        // totalBalance.innerText = '';
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'block';
    }

}

// if (totalBalance < 0 && incomeField == '')