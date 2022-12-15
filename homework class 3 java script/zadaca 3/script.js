function atm(account, amount) {

    if (amount > account) {
        console.log("Not enough money");
    } else {
        let change = account - amount;

        console.log("You have withdrawn $" + amount + ". You now have $" + change);

    }
}

let atm1 = atm(5000, 2355)
console.log(atm1);

