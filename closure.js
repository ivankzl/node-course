/*un closure es una función dentro de otra función*/

function greetMaker(name){
	function greet(){
		var age = 20;
		console.log('Hello ' + name);
	}
	return greet;
}

var greetIvan = greetMaker('Ivan');
greetIvan();

var greetWorld = greetMaker('world');
greetWorld();

/* Un closure tiene que ver con definir funciones
 que tienen acceso a variables de funciones padres */

 function createAdder(baseNumber){
 	return function add(numberToAdd){
 		return baseNumber + numberToAdd;
 	}
 }

 var addTen = createAdder(10);
 console.log(addTen(2)); //12
 console.log(addTen(0));