// function

function hello() {
    console.log("Hello!");
}

function show(name) {
    console.log(name);
}

// Arrow Function

let hello = () => { console.log("hello"); }

let show = name => name;

let add = (a,b) => a + b;

// Constructor Function

function Book(name,price){
    this.name = name;
    this.price = price;
}

let book1 = new Book("a",100);

console.log(book1); // {name: 'a', price: 100}  //data type is obj