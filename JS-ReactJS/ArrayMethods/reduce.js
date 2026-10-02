let arr =[10,2,3,4,5]

let totalVal = arr.reduce((acc,cElement,index,array)=>{return acc+cElement},0) //the acc(accumlater) value is 0 

// 1st =>acc + cElement => 0+10 =10
// 2nd =>acc + cElement => 10+2 =12
// 3rd =>acc + cElement => 12+3 =15
// 4th =>acc + cElement => 15+4 =19
// 5th =>acc + cElement => 19+5 =24
console.log(totalVal);

// Anothe Example

let employees=[
  {name:"xyz",salary:1000},
  {name:"momo",salary:10000},
  {name:"lolo",salary:20000},
  {name:"adhi",salary:25000},
]

let totalEmployeeSalary = employees.reduce((acc,cElement)=>{return acc+cElement.salary},0)

console.log(totalEmployeeSalary);
