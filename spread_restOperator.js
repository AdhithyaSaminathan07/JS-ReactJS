// // Spread Operator in Array

// let hobbies =["cricket","football","Basketball","Vollyball"]
// let hobbies1 =["Reading","Writing"]

// let newArry =[...hobbies,...hobbies1]

// hobbies[0]="BaseBall"
// let newArry1=[...newArry,"suma","GumOn"]

// console.log(newArry,hobbies);
// console.log(newArry1);

// Spread Operator in Object

let empDetail ={
    empId : "IQS123",
    empName :"Adhi",
    empRole : "ReactDeveloper"
}

let team2 ={...empDetail,empId : "IQS456",empSalar : 20000, team2 : "MERNStack"}

console.log(team2);

// Rest parameter or Rest Operator

function restPara(a,b,...arr){
    console.log(arr);
    console.log(a,b);
}

restPara(1,2,3,4,5)