//

// function updateCost(foodValue, rentValue, clothValue) {
//     const foodInputValue = document.getElementById(foodValue)
//     const rentInputValue = document.getElementById(rentValue)
//     const clothInputValue = document.getElementById(clothValue)
//     const totalCost = parseFloat(foodInputValue) + parseFloat(rentInputValue) + parseFloat(clothInputValue);
//     return totalCost;
// }

function getIncomeInput() {
    const totalIncome = document.getElementById('income-field').value;
    return totalIncome;
}

function updateBalance(firstInputValue, money) {
    // const totalIncome = document.getElementById('income-field').value;
    const totalExpenses = document.getElementById('Total-Expenses');
    const totalBalance = document.getElementById('total-balance');
    const
    const totalIncome = getIncomeInput();
    if (money == true) {
        totalExpenses.innerText = parseInt(firstInputValue) + parseInt(secondInputValue) + parseInt(thirdInputValue);
    }
    else {
        totalBalance.innerText = parseInt(totalIncome) - parseInt(totalExpenses.innerText);
    }
}

function getInputValue(inputId1, inputId2, inputId3) {
    const inputField = document.getElementsByClassName(inputId1, inputId2, inputId3);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

//
document.getElementById('Calculate-btn').addEventListener('click', function () {
    const newInputValue = getInputValue('food-field', 'rent-field', 'Cloth-field');
    // const totalInputValue = newInputValue.value ;
    if (newInputValue > 0) {
        updateCost('Total-Expenses', newInputValue);
        updateBalance(newInputValue, true);
    }
    // else {
    //     updateBalance(newInputAmount, false);
    // }
})