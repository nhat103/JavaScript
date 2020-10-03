/*
*
*  Declare and initial variable  before use it
*/
//========= Reference Error==========
/*console.log(message);
message = "The parallel universe";
//============ undefined==============
console.log(message);
var message = "The parallel universe";
//============== The parallel universe==========
var message = "The parallel universe";
console.log("The parallel universe");

//========= Reference Error==========
function hoist() {
	console.log(message);
	 message = "The parallel universe";
}

hoist();

//============ undefined==============
function hoist() {
	console.log(message);
	 var message = "The parallel universe";
}

hoist();
*/

function hoist() {
	console.log(message);
	  message = "The parallel universe";
}
let message;
hoist();


