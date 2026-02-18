// console.log(document.head);


let heading = document.getElementsByTagName("h1")


console.log(heading);

let para1 = document.getElementsByClassName("para")

console.log(para1);

let uniqPara = document.getElementById("uniq-para")

console.log(uniqPara);

let nameAttr1 = document.getElementsByName("input-01")

console.log(nameAttr1);

// let selectOne = document.querySelector("h1")   // By Tag Name
// let selectOne = document.querySelector(".para")   // By class Name
let selectOne = document.querySelector("#uniq-para")   // By Id


// console.log(selectOne);
console.log(selectOne.innerHTML);


// let multiElement = document.querySelectorAll("h1") // By Tag Name
// let multiElement = document.querySelectorAll(".para") // By class Name
let multiElement = document.querySelectorAll("#uniq-para") // By Id

console.log(multiElement);

let newElement = document.createElement("h2")

newElement.innerText ="Manipulation"

console.log(newElement);

document.body.append(newElement)

