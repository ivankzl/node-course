var person = {
	name: 'Ivan',
	age: 24
};

var personJSON = JSON.stringify(person);

/* personJSON ahora tiene un string con la representación
de lo que hay en person */

console.log(personJSON);
console.log(typeof personJSON);

/* Ahora lo volvemos a convertir en un objeto */
var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('CHALLENGE AREA');

var animal = '{"name": "Popi"}';

var animalObject = JSON.parse(animal);

animalObject.age = 3;

console.log(animalObject);

var animalJSON = JSON.stringify(animalObject);