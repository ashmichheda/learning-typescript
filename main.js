"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
// declare variables
var isBeginner = true;
var total = 0;
var name = 'Ashmi';
var sentence = "My name is " + name + " . I am a beginner in typescript";
console.log(sentence);
// Array Data type declaration
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Array declaration of mixed type
// If you have fixed number of values with different types, tuples is the Data structure to use
var person1 = ['Priya', 22];
// enum Data Type
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
var val = color.Green;
console.log("Value of enum variable : " + val);
// any: data type
// If you are unsure what data type to use, use Any data type
var randomValue = 10;
randomValue = "Ashmi";
randomValue = 300;
console.log("Any type variable value: " + randomValue);
// the below code doesn't show any errors during compile time since it's of type any, 
// but will show errors during run time
console.log(randomValue.name);
//randomValue();
// Unknown: data type, similar to any (data type)
// However one cannot access any properties nor can one call and construct them
var myVariable = 10;
// below line gives error
//console.log(myVariable.name);
// How to fix the above error. 
// Create a function that checks whether the object has property name or not
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' && "name" in obj;
}
if (hasName(myVariable)) {
    console.log("myVariable has property ? " + myVariable.name);
}
else {
    console.log("myVariable does not have property!");
}
//(myVariable as string).toUpperCase();
