//  DOM style

element.style.bgColor = "#000";
element.style.fontSize = "20px";


// DOM Class

element.classLis.add('classname');
element.classLis.remove('classname');
element.classLis.replace('classname1','classname2');

btn.addEventListener('click',() => {
    body.classList.toggle('classname');
})

// Create Element

let input = document.createElement('input');
document.body.appendChild(input);


// innerHTML

document.body.innerHTML = "demo";

// innerText
let v = document.getElementById("data").innerText;
console.log(v); // data in element
