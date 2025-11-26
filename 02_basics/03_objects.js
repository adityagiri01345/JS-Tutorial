// singleton  

// objects literals

const mySym = Symbol("Key1")
const mySyms = Symbol("Key2")
 const mySyms1 = Symbol("Key3")

const JsUser = {
  name:"Aditya",
  [mySym]: "myKey1",
  [mySyms]:"myKey2",
  [mySyms1]:"myKey3",
  age:22,
  location:"Varanasi",
  email:"adityagiri2809@gmail.com",
  isLoggedIn:false,
  lastLoginDays:["Monday", "Saturday"]
}


// console.log(JsUser[mySym]);
// console.log(JsUser[mySyms]);
// console.log(JsUser[mySyms1]);


// console.log(JsUser.email);
// console.log(JsUser["email"]);

 JsUser.email = "AditaymsUK@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Aditya@ms.com"
// console.log(JsUser);


JsUser.greeting = function(){
console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





