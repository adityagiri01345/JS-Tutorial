// permitive 

//datatypes:7 types: String, Number, Boolean, BigInt, null, undefined, Symbol

 const score  =45
   const scoreValue = 45.2

   const issLoggedIn = false
   const outsideTemp = null
   let userEmail;

   const id = Symbol('123')
   const anotherId = Symbol('123')

   console.log(id===anotherId);

   const bigNumber = 5131216787745478n




   // Refrence Type (Non primitive)
   // Array, Objects, Functions

   const heros = ["Anna", "nagraj", "doga"] // this type of data is primituve


   let myObj = {
    name:"Muttu",
    age:22,
   }

   const myFunction = function(){
    console.log("Hello world")
   }

  console.log(typeof bigNumber)


   //+++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

   let myYoutubename = "chaiaurcodebyhitesh"

    let anothername = myYoutubename
    anothername="codebyhitesh"

    console.log(myYoutubename);
    console.log(anothername);

    let userOne = {
      email: "user@google.com",
      upi:"user@ybl"
    }

    let userTwo = userOne

    userTwo.email = "hitesh@google.com"

    console.log(userOne.email);
    console.log(userTwo.email);
    
    
    
    