let balance = 100000;
const pin = 2134;
const banks = ["Access Bank", "Eco Bank", "GTB", "Tiidebank",  "UBA", "Wema Bank","Zenith Bank"]

let enteredPin = prompt(`Welcome to TiideBank 
Please enter you secret pin number`);
if(enteredPin == pin){
    const transactionType = prompt(`What will you like to do today?
    1. Withdraw
    2. Check Balance
    3. Transfer
    `)
    if(transactionType==1){
        const withdrawalAmount = prompt(`How much will you like to withdraw (without the naira symbol) ?`)
        if(withdrawalAmount && withdrawalAmount % 100 == 0 && withdrawalAmount < balance){
            alert(`Kindly have the withdrawn #${withdrawalAmount}
            Your balance is now #${balance-withdrawalAmount}`)
            alert("Thank you for using Tiidebank")
        }

        else if(withdrawalAmount && withdrawalAmount < balance && withdrawalAmount % 100 != 0){
            alert(`Please note that only multiples of #100 can be withdrawn`)
        }

        else if(withdrawalAmount > balance){
            alert(`Kindly beware that you cannot withdraw beyond your current balance: #${balance}`)
        }
        
        else{
            alert("You didn't enter a withdrawal amount")
        }
    }

    else if(transactionType == 2){
        alert(`Your current balance is #${balance}`)
        alert("Thank you for using Tiidebank")
    }

    else if(transactionType==3){
       let bank = prompt(`Which bank do you want to transfer to ?
       1. Access Bank
       2. Ecobank
       3. GTB
       4. TiideBank
       5. UBA 
       6. Wema Bank  
       7. Zenith Bank
       `) 
       let accountNumber  = prompt(`Please enter the account number to transfer to`)
       if(bank < 1 || bank > 7){
        alert(`You did not select a valid bank`)
       }

       else if(accountNumber.length != 10){
        alert(`You entered an invalid account number`)
       }

       else if(bank >=1 && bank <= 7 && accountNumber.length == 10){
        let transferAmount = prompt("How much will you like to Transfer ?")
        if(transferAmount && transferAmount < balance ){
            let confirmMessage = prompt(`You are about to transfer #${transferAmount} to ${banks[bank-1]} user ${accountNumber}
            press 1 to confirm`)
                if (confirmMessage==1){
                    alert(`You have successfully transfered ${transferAmount}
                    Your new balance is #${balance-transferAmount}`)
                    alert("Thank you for using Tiidebank")
                }
                else{
                    alert(`Transaction terminated`)
                }
            }
           
            else if(transferAmount > balance){
                alert(`Please beware that you cannot transfer beyond your current balance.
                Your current balance is #${balance}`)
            }
    
            else{
                alert(`You did not specify the transfer amount.
                Your current balance is: #${balance}`)
            }
        }
            
    }
        
        
}

else{
    alert("Pin incorrect");
}