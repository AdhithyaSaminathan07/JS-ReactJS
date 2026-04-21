// date.getFullYear()
let data = new Date()
console.log(data);

console.log(data.getFullYear());


// date.getMonth()
console.log(data.getMonth()+1);
// date.getDate()
console.log(data.getDate());

// date.getHours()
console.log(data.getHours());
// date.getMinutes()
console.log(data.getMinutes());
// date.getSeconds()
console.log(data.getSeconds());
// date.setFullYear(year, month, day)

// data.setFullYear(2020)
// console.log(data);

// date.setMonth(month, day)

// data.setMonth(11,12)
// console.log(data);
// console.log(data.toLocaleDateString());
// console.log(data.toDateString());
// console.log(data.toLocaleString());
// console.log(data.toLocaleTimeString());


// date.setDate(day)
data.setDate(10);
console.log(data);


// date.setHours(hours, minutes, seconds, milliseconds)
data.setHours(3, 30, 0, 0);
console.log(data);

// date.setMinutes(minutes, seconds, milliseconds)
data.setMinutes(45, 10, 500);
console.log(data);

// date.setSeconds(seconds, milliseconds)
data.setSeconds(20, 250);
console.log(data);

