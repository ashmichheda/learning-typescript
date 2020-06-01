export {}
let message = 'Welcome back';
console.log(message);


// declare variables

let isBeginner : boolean = true;
let total : number = 0;
let name : string = 'Ashmi';

let sentence : string = `My name is ${name} . I am a beginner in typescript`;
console.log(sentence);


// Array Data type declaration
let list1 : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];

// Array declaration of mixed type
// If you have fixed number of values with different types, tuples is the Data structure to use
let person1 : [string, number] = ['Priya', 22];

// enum Data Type
enum color {Red, Green, Blue};

let val : color = color.Green;
console.log("Value of enum variable : "+val);

// any: data type
// If you are unsure what data type to use, use Any data type
let randomValue : any = 10;
randomValue = "Ashmi";
randomValue = 300
console.log("Any type variable value: "+randomValue);

// the below code doesn't show any errors during compile time since it's of type any, 
// but will show errors during run time
console.log(randomValue.name);
//randomValue();



// Unknown: data type, similar to any (data type)
// However one cannot access any properties nor can one call and construct them

let myVariable : unknown = 10;

// below line gives error
//console.log(myVariable.name);

// How to fix the above error. 
// Create a function that checks whether the object has property name or not

function hasName(obj : any) : obj is {name : string} {
    return !!obj && 
            typeof obj === 'object' && "name" in obj
}

if(hasName(myVariable)){
    console.log("myVariable has property ? "+myVariable.name);
}
else{
    console.log("myVariable does not have property!");
}

//(myVariable as string).toUpperCase();

// We can also specify variable with multiple types
// One should use this, when the type is not under our control
let multiType : number | boolean;
multiType = 100;
multiType = true;
console.log("multiType value: "+multiType);


// FUNCTIONS


// Return type is automatically detected by compiler to be a NUMBER
// We can also EXPLICITLY Specify number as return type of add()
function add(num1: number, num2: number) : number{
    return num1 + num2;
}
console.log("Add(2, 5): "+add(2, 5));

// It has the following features for functions: 
/*
1. Optional Parameter
2. Default Parameter
*/
//In typescript every parameter is assumed to be called by a function. If you don't pass any parameter (unlike JS) it throws an error.

// To add optional parameter we add '?'
// Optional parameter will always come after REQUIRED parameters
function subOptional(num1 : number, num2? : number) : number{
    if(num2)
        return num1 - num2;
    else
        return num1;
}

console.log("subOptional(10) "+subOptional(10));
console.log("subOptional(10, 2) "+subOptional(10, 2));

// DEFAULT PARAMETERS
// They are just like optional parameters with some default value
function subDefault(num1 : number, num2 : number = 5) : number{
    if(num2)
        return num1 - num2;
    else
        return num1;
}

console.log("subDefault(10) "+subDefault(10));
console.log("subDefault(10, 2) "+subDefault(10, 2));


// INTERFACES
// We can create interface of the person object and use that interface as a type for a function parameter
interface Person {
    firstName: string,
    lastName: string
}

// now we create an object of Person type and pass that to the function
let p : Person = {
    firstName : 'Bruce',
    lastName : 'Chheda'
}
function fullName(person : Person){
    console.log(`${person.firstName} ${person.lastName}`);
}
fullName(p);