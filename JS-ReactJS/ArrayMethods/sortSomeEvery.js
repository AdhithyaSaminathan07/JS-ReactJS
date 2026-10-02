// let arr =[20,4,89,67,38,50]

// arr.sort((a,b)=>{return a-b})  // Normal sorting .not Ascci sort

// // Ascending order
// // a - b => Positive , a>b => Swapping
// // a - b => Negative , a<b => No Swapping

// // Explain (Ascending)
// // a-b => 20-4 => 16 =>[4,20,89,67,38,50]
// // a-b => 20-89 => -69 =>[4,20,89,67,38,50]
// // a-b => 89-67 => 22 =>[4,20,67,89,38,50]
// // And go on until to reach correct value....

// console.log(arr);

// // Descending Order

// // b - a => Positive b>a => Swapping
// // b - a =>Negative  b<a => No Swapping

// let newArr =[10,20,30,4,6,8,1,true,"100"]
// let descendingSort =newArr.sort((a,b)=>{return b-a})

// // b-a => 20-10 => 10 =>[20,10,30,4,6,8,1,true,"100"]
// // b-a => 300-10 => 20 =>[20,30,10,4,6,8,1,true,"100"]
// // b-a => 10-4 => -6 =>[20,30,10,4,6,8,1,true,"100"]   // No swapping

// // b-a => 1-true = 1-1 => 0  // No swapping
// // b-a => "100"-true = 100-1 => 99 // swapping
// // b-a => "100A"-true = NAN-1 => NAN // No swapping [20,30,10,4,6,8,1,true,"100A"] 


// console.log(descendingSort);

// Some and Every

let arr =[1,2,3,4,5]
    
// Some (one Condition is true ,then all are true)
let val1 =arr.some((Element,index,array)=>{
    return Element%2 ==0
})

// Every (if one condition is false . the all are false)
let val2 =arr.every((Element,index,array)=>{
    return Element%2 ==0
})
console.log(val1,val2);

