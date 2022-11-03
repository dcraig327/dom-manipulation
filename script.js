"use strict";

// // your JavaScript file
// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

const body = document.querySelector("body");

// a <p> with red text that says “Hey I’m red!”
let p = document.createElement("p");
p.style = "color: red";
p.textContent = "Hey I'm red!";
body.appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”
let h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I’m a blue h3!";
body.appendChild(h3);

// a <div> with a black border and pink background color with the following elements inside of it:
let div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "1px black soid";

// another <h1> that says “I’m in a div”
let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

// a <p> that says “ME TOO!”
let p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
body.appendChild(div);

/*
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => alert("Hello World"));

function alertFunction() {
  alert("You did it!");
}

const btn3 = document.querySelector("#btn3");
btn3.onclick = alertFunction;

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", alertFunction);

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function (e) {
  //  console.log(e);
  console.log(e.target);
  e.target.style.background = "blue";
});
*/
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
