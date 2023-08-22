document.getElementById('withdrow-btn').addEventListener('click',function(){
    const newWithdrowInput = getInputValueById('withdrow-input')
    const previousWithdrowAmount = getTextValueById('withdrow-amount')
    const totalWithdrow = previousWithdrowAmount + newWithdrowInput;
    setTextElementValueById('withdrow-amount',totalWithdrow)
    const previousBalanceTotal = getTextValueById('balance-amount')
    const totalBalance = previousBalanceTotal - newWithdrowInput;
    setTextElementValueById('balance-amount',totalBalance)
})