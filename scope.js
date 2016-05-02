/* Variable global */
var age = 24;
console.log(age);

function localFunction(){
	age = 0;
}

localFunction();
console.log(age);