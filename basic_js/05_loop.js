// for loop

for (let i = 0; i < 10; i++) {
    console.log(i);   
}

// for of
var nums = [5,6,8,9,7];
for (var num of nums) {
    console.log(num);  // 5 6 8 9 7
}

// for in
var obj = {'age': 10, 'name': 'John'};
for (var key in obj) {
    console.log(key + ","); // age, name
}

for (var [key,value] of Object.entries(obj)) {
    console.log(key,value);
}

// forEach
let animals = ["ant","dog","cat"];
animals.forEach((animal) => {
    console.log(animal);
});


// while loop
let i = 0
while (i<10) {
    console.log(i);
    i++;
}

// do while 

let j = 1;

do {
    console.log(j);
    j++
} while (j<10);
