"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
// We can also specify variable with multiple types
// One should use this, when the type is not under our control
var multiType;
multiType = 100;
multiType = true;
console.log("multiType value: " + multiType);
// FUNCTIONS
// Return type is automatically detected by compiler to be a NUMBER
// We can also EXPLICITLY Specify number as return type of add()
function add(num1, num2) {
    return num1 + num2;
}
console.log("Add(2, 5): " + add(2, 5));
// It has the following features for functions: 
/*
1. Optional Parameter
2. Default Parameter
*/
//In typescript every parameter is assumed to be called by a function. If you don't pass any parameter (unlike JS) it throws an error.
// To add optional parameter we add '?'
// Optional parameter will always come after REQUIRED parameters
function subOptional(num1, num2) {
    if (num2)
        return num1 - num2;
    else
        return num1;
}
console.log("subOptional(10) " + subOptional(10));
console.log("subOptional(10, 2) " + subOptional(10, 2));
// DEFAULT PARAMETERS
// They are just like optional parameters with some default value
function subDefault(num1, num2) {
    if (num2 === void 0) { num2 = 5; }
    if (num2)
        return num1 - num2;
    else
        return num1;
}
console.log("subDefault(10) " + subDefault(10));
console.log("subDefault(10, 2) " + subDefault(10, 2));
// now we create an object of Person type and pass that to the function
var p = {
    firstName: 'Bruce',
    lastName: 'Chheda'
};
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName(p);
// Classes and Access Modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
// Creating an instance of the class Employee
var emp = new Employee('Ashmi');
console.log(emp.employeeName);
emp.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    // managerName gets initialized, subclass Manager calls super class constructor Employee for this
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var man = new Manager("Bruce");
man.delegateWork();
man.greet();
console.log(man.employeeName);
// ACCESS MODIFIERS
// They are keywords that set the accessibility of properites and methods in a class
// PUBLIC (default), PRIVATED AND PROTECTED access modifiers
// Public - Free accessibility
// Private - Accessibility within the class
// Protected - Accessibility within a class and classes derived from it.
