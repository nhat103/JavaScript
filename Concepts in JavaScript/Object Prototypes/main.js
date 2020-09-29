// Person is Prototype 
function Person(first, last, age, eye) {
	this.fristName = first;
	this.lastName = last;
	this.age = age;
	this. eyeColor = eye;
} 

// object base on Person
var myFather = new Person("Ba", "Nguyen", 60, "black");// object base on Person
var myMother = new Person("Mom", "Le", 54, "black");// object base on Person
var tay = new Person("Tay", "Nguyen", 1, "black");// object base on Person

// Print values of Objet 
document.getElementById('demo').innerHTML = "My Father is " + myFather.age +".";
