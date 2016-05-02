/* setTimeout permite ejecutar una función después
 de un tiempo determinado, pero no se detiene la ejecución*/

/*
setTimeout(function(){
	console.log('1');
}, 2000);

setTimeout(function(){
	console.log('3');
}, 1000);

console.log('2');
*/

console.log('Challenge');

function printInTwoSeconds (message){
	setTimeout(function(){
		console.log(message);
	}, 2000);
}

printInTwoSeconds('Holis');