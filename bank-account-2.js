var accounts = [];

var account = {
	balance: 0,
	username: null
}

function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(username){
	var matchedAccount;
	accounts.forEach(function(account){
		if (account.username === username){
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

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

var ivanAccount = createAccount({
	usename: 'ivan',
	balance: 102
});

var davidAccount = createAccount({
	usename: 'Ivan David',
	balance: 99
});

deposit(ivanAccount, 100);
console.log(getBalance(ivanAccount));
console.log(getBalance(davidAccount));

existingAccount = getAccount('ivan');
console.log(existingAccount);