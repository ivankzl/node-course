console.log("Starting password manager");

var crypto = require('crypto-js');
var storage = require('node-persist');

storage.initSync();

var argv = require ('yargs')
	.command('create', 'Create an account', function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your name',
				type: 'string'
			},
			username: {
				demand:true,
				alias: 'u',
				description: 'Your username',
				type: 'string'
			},
			password: {
				demand:true,
				alias: 'p',
				description: 'Your password',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'Get an account', function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your name',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;

var command = argv._[0];

console.log(argv);

function getAccounts (masterPassword){
	// use getItemSync to fetch accounts
	var encryptedAccount = storage.getItemSync('accounts');
	var accounts = [];

	// decrypt
	if (typeof encryptedAccount !== 'undefined') {
		var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
		accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}

	// return accounts array
	return accounts;
}

function saveAccounts (accounts, masterPassword){
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	storage.setItemsync('accounts', encryptedAccounts.toString());
	return accounts;
}

function createAccount (account, masterPassword){

	var accounts = getAccounts(masterPassword);

	accounts.push(account);

	saveAccounts(accounts, masterPassword);

	return account;
}



function getAccount (accountName, masterPassword){
	var accounts = storage.getItemSync('masterPassword');
	var matchedAccount;

	accounts.forEach(function(account){
		if (account.name === accountName){
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

if (command === 'create'){
	try {
		var createdAccount = createAccount({
			name: argv.name,
			username: argv.username,
			password: argv.password
		}, argv.masterPassword);
		console.log('Account created!');
		console.log(createAccount);
	}catch(e){
		console.log('Unable to create account');
		console.log(e.message);
	}
}else if (command === 'get'){
	
	try{
			var fetchedAccount = getAccount(argv.name, argv.masterPassword);
		if(typeof fetchedAccount === 'undefined'){
			console.log('Account not found');
		}else{
			console.log(fetchedAccount);
		}	
	}catch(e){
		console.log('Unable to get account');
	}
}
