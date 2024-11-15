"use strict";
const target = document.getElementById("target");

const firstItem = document.createElement("li");
firstItem.textContent = "First item";
target.appendChild(firstItem);

const secondItem = document.createElement("li");
secondItem.textContent = "Second item";

secondItem.classList.add("my-item");
target.appendChild(secondItem);

const thirdItem = document.createElement("li");
thirdItem.textContent = "Third item";
target.appendChild(thirdItem);
