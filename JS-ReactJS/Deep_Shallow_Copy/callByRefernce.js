/* Call By Reference

   Stack Memory

   | Address  |Variable        | value -> Reference/Pointer (Address) |
   |-----------------|------------------------------|
   | 0x100    | obj            | 0x001                        |
   | 0x103    | arr            | 0x012                        |
   | 0x107    | obj1           | obj =0x001                        | i assigned obj for obj1
   | 0x112    | arr1           | arr =0x012                        | i assigned arr for arr1

   Heap Memory

   | Address | Object                 |
   |---------|------------------------|
   | 0x001   | { name: 'Adhithya' }   |   // Object Literal
   | 0x012   | [1,2,3]                |   // Array Literal

*/

let obj ={
    name:"Adhithya"
}

let arr =[1,2,3]

let obj1=obj
let arr1 =arr

obj1.name="Yuva"     // The change of one is effect the other also. Because the both memory address are same  
obj.name = "Geon"

obj1.role ="UI/UX Developer" //why it affecting both? Because the memory address are same ...

arr[0]="One"             // Both Array value are same. so the change of one will affect the other 
arr1[2]="Three"

console.log(obj,obj1);

console.log(arr,arr1);
