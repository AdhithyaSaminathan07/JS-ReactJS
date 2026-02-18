// // CharAt
// let str ="Hello World"
// console.log(str.charAt(1));
// console.log(str.charAt(str.length-1));

// // CharCodeAt
let str1="JAvascript"
console.log(str1.charCodeAt(1));
console.log(str1.charCodeAt(5));

// // Concat
// let newStr = str.concat(" ",str1);
// console.log(newStr);

// // Includes

// let str2="Single Threaded"

// console.log(str2.includes("i"));
// console.log(str2.includes("i",3)); // the position (number) is give to search from the index to last
// console.log(str2.includes("j"));

// indexOf (Search from Left to right)

// let newStr1 ="Adhithya"

// console.log(newStr1.indexOf("i"));
// console.log(newStr1.indexOf("h",5));

// lastIndexOf
// let newStr1 ="Adhithya"

// console.log(newStr1.lastIndexOf("i"));
// console.log(newStr1.lastIndexOf("h",4));
// console.log(newStr1.lastIndexOf("h",5));

// // repeat

// let repeat = "ECMA Script. "

// console.log(repeat.repeat(5));


// // replace/replcae All
// let str = "JS Is a Scripting Lang -JS -JS";

// console.log(str.replace("JS","JavaScript"));
// console.log(str.replaceAll("JS","JavaScript"));

// Slice

// let newSlice = "Single Thread"

// console.log(newSlice.slice(2));
// console.log(newSlice.slice(2,8)); // (2,(8-1=>7))
// console.log(newSlice.slice(-4,-2)); // (-4,(-4(-2)=>-3))

// Substring

// let newStr1 ="Single Thread"

// console.log(newStr1.substring(3));
// console.log(newStr1.substring(3,8));
// console.log(newStr1.substring(-3));  // it would not accept the negative value of index.it start from 0 only
// console.log(newStr1.substring(8,0)); //start index is greatherthan it will take end index as start index

// Split

// let word = "My Name is iron-man"

// console.log(word.split(""));
// console.log(word.split(" "));
// console.log(word.split(" ", 3));
// console.log(word.split("-"));
// console.log(word.split("-",1));

// Startswith

// let word = "My Name is iron-man"
// console.log(word.startsWith("M"));
// console.log(word.startsWith("M",2));
// console.log(word.startsWith("N",3));
// console.log(word.startsWith("M",4));
// console.log(word.startsWith("Name",3));

// Endswith

// let word = "  My Name is iron-man  "

// // console.log(word.endsWith("n"));
// // console.log(word.endsWith("n",word.length));
// // console.log(word.endsWith("iron",15));

// // tolowercase
// console.log(word.toLowerCase());

// // toUppercase

// console.log(word.toUpperCase());

// // trim //Remove the spacing in start and end 
// console.log(word.trim());

// // trimStart/trimLeft //it remove spacing in start(left) 
// console.log(word.trimStart());
// console.log(word.trimLeft());


// // trimEnd/trimRight //Remove the spacing in right

// console.log(word.trimEnd());
// console.log(word.trimRight());
