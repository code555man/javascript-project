// Object in JavaScript

const car = {type:"Fiat", model:"500", color:"white"};

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() { // fullName()
      return this.firstName + " " + this.lastName;
    }
};

console.log(person.lastName);
console.log(person.fullName);
