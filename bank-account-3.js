var accounts = [];


function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(username){
	var matchedAccount;
	for(var i = 0; i<= accounts.length){
		if (accounts[i].username === username){
			matchedAccount = accounts[i];
		}
	}

	return matchedAccount;
}

/* Depósito */
function deposit(account, amount){
	if (typeof amount == 'number'){
		account.balance += amount;
	}else
		console.log("Amount should be a number");
	}
}

/* Retirar dinero */
function withdraw(account, amount){
 	if (typeof amount == 'number'){
		account.balance -= amount;
	}else
		console.log("Amount should be a number");
	}
}

/* Obtener saldo */
function getBalance (account){
	return account.balance;
}

