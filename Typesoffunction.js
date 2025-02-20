//Function Declaration: Hoisted
function greet1(name) {
    return `Hello,${name}`
}
console.log(greet1('Anil'));
//Function Expression: not Hoisted
let greet2 = function(name) {
    return `Hello,${name}`
}
console.log(greet2('Anil'));
//Arrow Function: call back
let greet3 = (name)=> {
  return `Hell0,${name}`
}
console.log(greet3('Java Script'));
function getCurrentYear() {
    return new Date().getFullYear();
}

// Calling the function and storing the result
 let year = getCurrentYear();
console.log("Current year is:", year);

function add(name) {
 return `Hello! ${name}`;
}
console.log(add('anil'));