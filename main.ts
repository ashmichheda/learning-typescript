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

