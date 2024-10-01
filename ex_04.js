let a = 2
let b = 4
let action = "sub"
function calculator() {
if (action==="add")return addition (a, b)
  else if (action === "sub"){
return substraction(a, b)
	}
}

function addition() {
return (b = a + b)
}

function substraction() {
return (b = a - b)
}


// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
} else {
	console.error("Missing/bad variables or calculator function");
}