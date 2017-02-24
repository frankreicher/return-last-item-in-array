/*
Create a function that accepts an array and returns the last item in the array.
The array can contain any of JavaScript's five primitive data types.
Number
String
Boolean
Undefined
Null

Examples:
[1, 2, 3] => 3
['cat', 'dog', 'duck'] => 'duck'
[true, false, true] => true
*/

function getLastItem (array) {
    return array[array.length - 1];
}

var testArray = [];

for (var i = 0; i < 10; i++) {
    testArray.push(i);
}

console.log(testArray);

var lastItem = getLastItem(testArray);
console.log(lastItem);
