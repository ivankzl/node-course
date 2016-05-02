var grades = [100, 50];

grades.push(60);
grades.unshift(79); //agregaun item al principio

console.log(grades);

var grade = grades.pop(); //remueve y devuelve él último elemento

console.log(grade);
console.log(grades);

/* iterar un array */
grades.forEach(function(grade){
	console.log(grade);
});

/* sacar un elemento en una posición determinada*/
console.log(grades[1]);

/* conocer el nro total de elementos*/
console.log(grades.length);

var totalGrade = 0;

grades.forEach(function(grade){
	totalGrade += grade;
});

console.log('Total grade = ' + totalGrade + '. Prom = ' + totalGrade / grades.length);