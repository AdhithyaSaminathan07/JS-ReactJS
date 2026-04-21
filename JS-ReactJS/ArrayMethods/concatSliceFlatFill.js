// let arr =[10,20,30,40]
// let arr1 =[50,60,70,80]

// // Concat Method

// let newArry = arr.concat(arr1)
// let newArry1 = arr.concat(100,200,300)
// // taking Duplicate
// let newArry2 = [].concat(arr)
// arr[0] =777; //Independent

// console.log(newArry,newArry1);
// console.log(newArry2,arr);


// // Slice Method

// let newArry =[10,2,3,4,5,6,7]

// let sliceVal = newArry.slice()
// newArry[0]=1011;

// let sliceVal1 = newArry.slice(1)
// let sliceVal2 =newArry.slice( 1,5)
// let sliceVal3 = newArry.slice(0,3)
// //                        (start,end-1) (1 ,4-1)

// console.log(sliceVal, sliceVal1 ,sliceVal2,sliceVal3);


// // Flat Method

// let arr =[10,20,30,[40,50,[60,70,[80,90,[100,110]]]]]

// let newArr = arr.flat()  // the idel value be 1 , so it removed one nested array
// let newArr1 = arr.flat(2)
// let newArr2 = arr.flat(Infinity) // To remove the all nested array inside 

// console.log(arr,newArr);
// console.log(newArr1);
// console.log(newArr2);


// Fill Method 
 let arr = [10,20,30,40]

//  arr.fill(111)
 arr.fill(111,0,1)
 arr.fill(444,3,4)

 console.log(arr);
 