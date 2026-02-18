let fruits =["Apple","WaterMelon","MuskMelon","Banana"]

// fruits.forEach(printfruits)

// function printfruits(CurrentElement,Index,totalArray){
//     console.log(CurrentElement,Index,totalArray);
    
// }

// fruits.map(function(CurrentEle,Index,totalArray){
//     console.log(CurrentEle,Index,totalArray);
    
// } )

// let newArr = fruits.forEach((cElement)=>{
//     console.log(cElement.toUpperCase());   
//    return cElement;    
// })

// console.log(newArr);

// // MAP Method

// let newArr1 = fruits.map((cElement,index)=>{
//    return {id:index+1,fruit:cElement}   
// })

// console.log(newArr1);

// // Chanining Method for Map()

// // let newArr = fruits.map(cEle => cEle.toUpperCase()).sort()
// let newArr = fruits.map(cEle => cEle.toUpperCase()).sort().fill("NANA")

// console.log(newArr);


// // Chanining Method for forEach()
// let newArr1 = fruits.forEach(cEle => cEle.toUpperCase()).sort().fill("NANA")
// console.log(newArr1);

// Condition Based Statement Map

// let newArr2 = fruits.map((cEle) =>{return cEle=="Apple"})
// console.log(newArr2);

// Condition Based Statement ForEach

fruits.forEach(Val => console.log(Val =="Apple"))