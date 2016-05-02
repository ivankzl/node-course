var person = {};

var person2 = {
	gender: 'Male',
	age: 19
};

var firstNameProperty = 'firstName';

person[firstNameProperty] = 'Ivan';
person.lastName = 'Kuzel';
person.age = 24;

/* otra notación
person['firstName'] = 'Ivan';
*/
delete person.age;

console.log(person);

function greetUser(person){
	console.log('Hello ' + person.firstName + ' ' + person.lastName);
}

greetUser(person);

var pet = {
	name: 'Popi',
	type: 'Dog'
};

function printPet(pet){
	console.log ('You own a ' + pet.type + ' named ' + pet.name);
}

printPet(pet);