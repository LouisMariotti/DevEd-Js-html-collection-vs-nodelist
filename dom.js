// const collectionItems = document.getElementsByClassName("item");
// const nodeItems = document.querySelectorAll(".item");
// console.log(collectionItems, nodeItems); // give us an html collection for the first one and a node list for the second one

/* html collection can only hold node elements, nodelist can 
hold different node types, node comments, node text */

// const nodeItems = document.querySelectorAll(".item");

// // can also use this with loops

// for (item of nodeItems) {
//   console.log(nodeItems);
// }

// // canot do the above with html collection

// nodeItems.forEach(function (item) {
//   console.log(item);
// });

// With html collection we can also creat new element and add them

// const collectionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-nr")[0]; // for updating the amount of elements we have

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 3";

// todoList.appendChild(newItem); // We have item 3

// // Update the amount of item that we have
// todoNr.innerText = collectionItems.length; // can acces the amount of items that we have and dynamcaly add it here

// Doing the same process but with querySelector

const todoList = document.querySelector("#todo-list");
const items = todoList.children;
console.log(items);
const todoNr = document.querySelector(".todo-nr"); // for updating the amount of elements we have

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const anotherItem = document.createElement("li");
anotherItem.classList.add("Item4");
anotherItem.innerText = "Item4";

todoList.appendChild(newItem); // We have item 3
todoList.appendChild(anotherItem);

todoNr.innerText = items.length;

console.log(items);
