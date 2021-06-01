var todoTemp = "Pick up drycleaning";

// Template Strings
var container = document.getElementById('container');

var todo = {
    id : 123,
    name : "Pick up dry cleaning",
    completed: true
}

var displayName = `Todo : ${todo.id}`

// Let and const keyword
for(var x = 0; x <= 5; x++) {
    var counter = x;
}

console.log(counter)

// Here in the above for loop the counter variable is accessible outside of the for-loop which
// shouldn't be the case. But the JS var keyword does it.
// Hence in order to avoid this weird behavior, one should use `let` keyword

// for-in loops
var array = [
    "Pick up dry cleaning",
    "Clean Batcave",
    "Save Gotham"
];

for(var index in array) {
    var value = array[index];
    console.log(`${value} : ${index}`)
}

for(value of array){
    console.log(`${value}`)
}