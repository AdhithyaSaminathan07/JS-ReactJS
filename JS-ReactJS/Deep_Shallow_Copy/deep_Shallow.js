// // Deep Copy

// let a =10;
// let b = a;
// a=20
// console.log(a,b);

// let obj1 ={
//     name1:"Adhithya",
//     role :"Developer"
// }

// let obj2= {...obj1}    //Spread operator can do deep copy only when you manually spread all primitive Values.

// obj2.name1="Yuva"

// console.log(obj1,obj2);

// Object - Shallow Copy (Shallow copy copies the object, but not the nested objects. Nested objects are shared)

// let person ={
//     name:"MoMo",
//     role :"Player",
//     hobbies:{
//         cricket:"T20 Player",
//         football : "90 mins player"
//     }

// }

// let person2 ={...person}

// person.role = "Video Creator"

// person.hobbies.cricket ="ODI Player"

// console.log(person,person2);

// //Object a- Deep Copy  

// let person3 ={
//     name:"MoMo",
//     role :"Player",
//     hobbies:{
//         cricket:"T20 Player",
//         football : "90 mins player"
//     }

// }

// let person4 ={...person3,hobbies:{...person3.hobbies}}
// // let person5 =JSON.stringify(person3)  //Convert Normal object to string
// // let newObj = JSON.parse(person5)      //Convert string to Normal object

// let newObj=JSON.parse(JSON.stringify(person3))

// person3.role = "Video Creator"

// person3.hobbies.cricket ="ODI Player"

// console.log(person3,person4);


// // console.log(person5);
// console.log(newObj);


// Array -Shallow Copy

// let arr =[1,2,3,[4,5,6]]
// let arr1 =[...arr]

// arr[0]="one"
// arr[3][0]="four"
// console.log(arr,arr1);

// Array -Deep Copy

let arr =[1,2,3,[4,5,6]]
let arr1 =[...arr]
let newArr =JSON.parse(JSON.stringify(arr));

arr[0]="one"
arr[3][0]="four"

newArr[3][1] ="Five"

console.log(arr,arr1);
console.log(newArr);

