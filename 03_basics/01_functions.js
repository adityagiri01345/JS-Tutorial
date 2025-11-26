function mycode(){
    // console.log("muttu");
    // console.log("raju");
    // console.log("guddu");
    // console.log("munnnu");
    // console.log("mintu");
    // console.log("mutthu");
    // console.log("matru");
    
}
mycode()

// function addTwoNumbers(number1,  number2){

//     console.log(number1+ number2);
    
// }
function addTwoNumbers(number1,  number2){
    
    let result = number1 + number2
    return result


   // return number1 +  number2
    
}
const result = addTwoNumbers(3, 5)

//console.log("Result: ",  result);

function loginUserMassage(username = "sam"){
if (!username) {
    console.log("please enter your name");
    return
}

return `${username} just logged in`
} 




console.log(loginUserMassage("aditya"))
console.log(loginUserMassage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(555, 5555, 9999));


const user = {
    username:"hitesh",
    price:499
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)



handleObject({
    username: "guru",
    price: 299
})
 
const myNewArary = [500, 800, 600, 400]

function returnSecondValue(getway){
    return getway[1]

}
console.log(returnSecondValue(myNewArary));
console.log(returnSecondValue([500, 800, 600, 900]));
