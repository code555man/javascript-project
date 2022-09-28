let num = new Array(5);

num[0] = 1;
num[1] = 2;
num[2] = 3;
num[3] = 4;
num[4] = 5;

let num2 = new Array(10,20,30,50,40);

let num3 = [5,4,3,2,1];

console.log(num); // 1,2,3,4,5
console.log(num2); // 10,20,30,50,40
console.log(num3); // 5,4,3,2,1


// Array operator

num3.length; // 5
num3.sort() // 1,2,3,4,5
num3.pop() // 5

[1,2,3].every(x => x < 5) // true
[1,2,3].some(x => x < 5) // true
[1,2,3].filter(x => x < 2) // 1

// Assigning array items to variable

const [a,b,c] = [123,'second', true];
/*
    a => 123
    a => 'second'
    a => true
*/

// Skipping items
const [, x] = [123,'second', true];
// x => 'second'

// Assigning the first values storing the rest togetther

const [m,n,...rest] = [123,'second',true,false,42]; 

/* 
    m => 123
    n => 'second'
    rest => [true,false,42]
*/

/*
    concat()	Joins arrays and returns an array with the joined arrays
    constructor	Returns the function that created the Array object's prototype
    copyWithin()	Copies array elements within the array, to and from specified positions
    entries()	Returns a key/value pair Array Iteration Object
    every()	Checks if every element in an array pass a test
    fill()	Fill the elements in an array with a static value
    filter()	Creates a new array with every element in an array that pass a test
    find()	Returns the value of the first element in an array that pass a test
    findIndex()	Returns the index of the first element in an array that pass a test
    forEach()	Calls a function for each array element
    from()	Creates an array from an object
    includes()	Check if an array contains the specified element
    indexOf()	Search the array for an element and returns its position
    isArray()	Checks whether an object is an array
    join()	Joins all elements of an array into a string
    keys()	Returns a Array Iteration Object, containing the keys of the original array
    lastIndexOf()	Search the array for an element, starting at the end, and returns its position
    length	Sets or returns the number of elements in an array
    map()	Creates a new array with the result of calling a function for each array element
    pop()	Removes the last element of an array, and returns that element
    prototype	Allows you to add properties and methods to an Array object
    push()	Adds new elements to the end of an array, and returns the new length
    reduce()	Reduce the values of an array to a single value (going left-to-right)
    reduceRight()	Reduce the values of an array to a single value (going right-to-left)
    reverse()	Reverses the order of the elements in an array
    shift()	Removes the first element of an array, and returns that element
    slice()	Selects a part of an array, and returns the new array
    some()	Checks if any of the elements in an array pass a test
    sort()	Sorts the elements of an array
    splice()	Adds/Removes elements from an array
    toString()	Converts an array to a string, and returns the result
    unshift()	Adds new elements to the beginning of an array, and returns the new length
    valueOf()	Returns the primitive value of an array
*/
