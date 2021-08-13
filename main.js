
//array.from() to convert our matchingElements into an array.
//nodelist > array.from() > Array

function getRandomNumber (min, max) { // min and max included 
    // SOURCE: https://stackoverflow.com/a/7228322/1034856
    // LICENSE: https://creativecommons.org/licenses/by-sa/4.0/
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let dominoCharacters = "🁣🁤🁥🁦🁧🁨🁩🁪🁫🁬🁭🁮🁯🁰🁱🁲🁳🁴🁵🁶🁷🁸🁹🁺🁻🁼🁽🁾🁿🂀🂁🂂🂃🂄🂅🂆🂇🂈🂉🂊🂋🂌🂍🂎🂏🂐🂑🂒🂓"
let dominoList = Array.from(dominoCharacters)
console.log(dominoList);




let firstIndex = 0
let lastIndex = dominoList.length - 1
let randomIndex = getRandomNumber(firstIndex, lastIndex)
let randomDominoCharacter = dominoList[randomIndex]



console.log(randomDominoCharacter);


for(let index = 0; index < dominoList.length ; index +=1){
let currentdomino = dominoList[index]    


let dominoElement = document.createElement("div") // <div></div>
dominoElement.append(currentdomino)       // <div>🁶</div>
dominoElement.classList.add("domino") // <div class="domino selected">🁶</div>

let mainElement = document.querySelector("main") //<main> tag
console.log(mainElement)
mainElement.append(dominoElement)// <main><div class="domino selected"</div>

if(currentdomino === randomDominoCharacter){
    dominoElement.classList.add("selected");
}

}





