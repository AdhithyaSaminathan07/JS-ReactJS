// let employee ={
//     eName : "Adhithya",
//     eSalary : 10000,
//     introducemySelf : function(a,b){
//         console.log(a+b+this.eName);
//         // console.log(this.eName); // this is used to acces the propery inside object
//     }
// }

// console.log(employee.eName);
// employee.introducemySelf(10,30)

// var eName="MOMO"
// // let eName="MOMO" // let is  block scope so that output is undefined

// let employee1 ={
//     eName : "Muruga",
//     eSalary : 20000,
//     introducemySelf :(a,b)=>{
//         // console.log(a+b+this.eName);
//         console.log(this.eName); // In Arrow function "this" will point out the gobal property
        
//     }
// }
// // console.log(employee1.eName);
// employee1.introducemySelf(10,20)

// Call

let person={
     pFName : "Google",
    pLName : "Aplha",
}

let person1 = {
    pId:"ISA123",
     pFName : "Microsoft",
    pLName : "Windows",
    introducemySelf : function(a,b){
        console.log(this.pFName+" " +this.pLName , (a+b));
        return(a+b)
    }
}

person1.introducemySelf()    //point the current object in Object
person1.introducemySelf.call(person,10,20) // it take property from call object

// Apply
person1.introducemySelf.apply(person,[100,200])

// Bind
let newFun = person1.introducemySelf.bind(person,700,200)
console.log(newFun());
