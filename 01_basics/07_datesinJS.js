//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.getTimezoneOffset());

console.log(typeof myDate);


let myCreatedDate = new Date(2025, 0, 24)
console.log(myCreatedDate.toDateString());

let myOwnDate = new Date(2026, 6, 1, 11, 22)
let myOwnDates = new Date("2026-01-26")
console.log(myOwnDates.toLocaleString());

let myTimeStamp = Date.now()
 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime());
 console.log(Date.now());
 console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
 console.log(newDate.getDate());
 console.log(newDate.getDay());
//  console.log(newDate.getFullYear());
//  console.log(newDate.getHours());
//  console.log(newDate.getMilliseconds());
//  console.log(newDate.getMinutes());
//  console.log(newDate.getMonth()+1);
//  console.log(newDate.getSeconds());
//  console.log(newDate.getTime());
//  console.log(newDate.getTimezoneOffset());
//  console.log(newDate.getUTCDate());
//  console.log(newDate.getUTCDay());
 
 
 
 









