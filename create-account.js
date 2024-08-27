function createAccount(pin, amount=0) {
    return{
        verifyPin(pinInput) {
            return (pinInput===pin);
        },
    
        checkBalance(pinInput) {
            if(this.verifyPin(pinInput)) return `$${amount}`;
            else return "Invalid PIN.";
        },

        deposit(pinInput, depositAmount){
            if(this.verifyPin(pinInput)){
                amount += depositAmount;
                return `Successfully deposited $${depositAmount}. Current balance: $${amount}.`
            }
            else return "Invalid PIN.";
        },
        withdraw(pinInput, withdrawAmount){
            if(this.verifyPin(pinInput)){
                if(amount > withdrawAmount){
                    amount -= withdrawAmount;
                    return `Successfully withdrew $${withdrawAmount}. Current balance: $${amount}.`
                }
                else return "Withdrawal amount exceeds account balance. Transaction cancelled."
            }
            else return "Invalid PIN."
        },
        changePin(pinInput, newPin){
            if(this.verifyPin(pinInput)){
                pin = newPin
                return "PIN successfully changed!"
            }
            else return "Invalid PIN"
        }
    }
}

// createAccount.prototype.verifyPin = (pinInput) => {
//     return (pinInput===this.pin);
// }

// createAccount.prototype.checkBalance = (pinInput) => {
//     if(this.verifyPin(pinInput)) return this.amount;
//     else return "Invalid PIN.";
// }

// createAccount.prototype.deposit = (pinInput, depositAmount) => {
//     if(this.verifyPin(pinInput)){
//         this.amount += depositAmount;
//         return `Successfully deposited $${depositAmount}. Current balance: $${this.amount}.`
//     }
//     else return "Invalid PIN.";
// }

// createAccount.prototype.withdraw = (pinInput, withdrawAmount) => {
//     if(this.verifyPin(pinInput)){
//         if(this.amount > withdrawAmount){
//             this.amount -= withdrawAmount;
//             return `Successfully withdrew $${withdrawAmount}. Current balance: $${this.amount}.`
//         }
//         else return "Withdrawal amount exceeds account balance. Transaction cancelled."
//     }
//     else return "Invalid PIN."
// }

// createAccount.prototype.changePin = (pinInput, newPin) => {
//     if(this.verifyPin(pinInput)){
//         this.pin = newPin
//         return "PIN successfully changed!"
//     }
//     else return "Invalid PIN"
// }


module.exports = { createAccount };
