let employees=[
    {employeeName:"xyz",salary:10000},
    {employeeName:"Abc",salary:30000},
    {employeeName:"uvw",salary:50000},
]

let filterVal = employees.filter( (val,index,array) => {
    console.log(index); 
    val.salary>20000});
// let filterVal = employees.filter( val => val.salary>20000).fill({id:1,Name:" Klm"})   // Chaning Call Posibile

// employees.filter(val => console.log(val));

console.log(filterVal);

// Find 
let FiletrDataByFind = employees.find((val,index,array)=>{
    console.log(index);
    return val.salary>10000
})
console.log(FiletrDataByFind);
