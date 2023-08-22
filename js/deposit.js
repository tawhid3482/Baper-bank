
document.getElementById('deposit-btn').addEventListener('click',function(){
    const newDepositAmount = getInputValueById('deposit-input')
    const previousDepositTotal = getTextValueById('Deposit-amount')

   const newDepositTotal = previousDepositTotal + newDepositAmount;

   setTextElementValueById('Deposit-amount',newDepositTotal);

   const previousBalanceTotal = getTextValueById('balance-amount')
   const totalBalance = previousBalanceTotal + newDepositAmount;
   setTextElementValueById('balance-amount',totalBalance)
})