var account = {
	balance: 0
};

/* Depósito */
function deposit(account, amount){
	account.balance += amount;
}

/* Retirar dinero */
function withdraw(account, amount){
 	account.balance -= amount;
}

/* Obtener saldo */
function getBalance (account){
	return account.balance;
}

deposit(account, 1000);
console.log(getBalance(account));
withdraw(account, 807);
console.log(getBalance(account));
