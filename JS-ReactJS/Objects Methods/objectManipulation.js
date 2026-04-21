let person ={
    pName:"Murugan",
    age:20
}
console.log(person);

// let arr =[1,2,3,4,5]
// console.log(arr);

// Object.create
let newObj =Object.create(person)
newObj.loaction ="TamilNadu"

console.log(newObj.__proto__);
console.log(Object.getPrototypeOf(newObj));

// console.log(newObj.age);
// console.log(newObj);

// Object.assign
let person1 ={
    id:"QWE123",
    p1Name:"Vel"
}
let newObj1 =Object.assign(person1,{role : "MERN STACK Developer",Salary :10000})
console.log(person1);
console.log(newObj1);

// Object.entries
let employee ={
    eName : "Messi",
    eRole:"Football GOAT"
}

let multiArr = Object.entries(employee)

multiArr.push(["Name","MoMo"])
console.log(multiArr);

// Object.fromEntries

let normalObj = Object.fromEntries(multiArr)
console.log(normalObj);
// Object.keys
let onlyKeys = Object.keys(normalObj)
console.log(onlyKeys);
// Object.values
let onlyVal =Object.values(normalObj)
console.log(onlyVal);

// Object.freeze
let newObj2 ={
    id:1
}
Object.freeze(newObj2)  // Once we assign the freeze we can add the object

newObj2.Name = "Alagu"
newObj2.id = "XYZ"
console.log(newObj2);

// Object.isFrozen
console.log(Object.isFrozen(newObj2));
console.log(Object.isFrozen(normalObj));
