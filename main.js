
//array.from() to convert our matchingElements into an array.
//nodelist > array.from() > Array

function getRandomNumber (min, max) { // min and max included 
    // SOURCE: https://stackoverflow.com/a/7228322/1034856
    // LICENSE: https://creativecommons.org/licenses/by-sa/4.0/
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let dominoList = document.querySelectorAll(".domino-list > li")
console.log(dominoList)

let firstIndex = 0
let lastIndex = dominoList.length - 1
// I want a random number between firstIndex and lastIndex
let randomIndex = getRandomNumber(firstIndex, lastIndex)
let randomDominoElement = dominoList[randomIndex]
console.log(randomDominoElement);

randomDominoElement.classList.add("selected");
 


//creating a new element in javascript
//<img =src="whatever the path is.jpg"> source attribute is a must.
//let element = document.createElement("img");

