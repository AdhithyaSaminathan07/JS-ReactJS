// let arr =[100,200,300,400]

// // arr.pop() // to delete the last element

// let popval =arr.pop()
// // console.log(arr);
// console.log(popval);

// // Pop Method

// arr.push(500,600,700,800)

// console.log(arr);

//shift method 
let fruits = ["Apple", "Banana", "Cherry"];

let removedFruit = fruits.shift();

console.log(fruits);       // Output: ["Banana", "Cherry"]
console.log(removedFruit); // Output: "Apple"

// If the array is empty, it returns undefined
let emptyArray = [];
console.log(emptyArray.shift()); // Output: undefined


//unshift

let colors = ["Red", "Green"];

colors.unshift("Blue");
let newLength = colors.unshift("Yellow", "Purple");

console.log(colors);
console.log(newLength);