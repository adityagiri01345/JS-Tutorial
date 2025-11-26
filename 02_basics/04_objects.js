// const tinderUser = new Object()// Singletone objects
//  const tinder = {} // Non singletone objects

// tinderUser.id = "123abc"
// tinderUser.name = "Samay"
// tinderUser.isLoggedIn = false

// //console.log(tinderUser);


// const regularUser = {
//     email:"Some@fmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Gukesh",
//             lastname:"Chourasiya"
//         }
//     }
// }
// console.log(regularUser.fullname.email);


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}


// const obj6 = {obj1, obj2, obj4}
// console.log(obj6);

// //spread
// const obj5 = {...obj1, ...obj2, ...obj4}
// console.log(obj5);




// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

// const users = [
//     {
//         id:1,
//         email:"h2gmail.com"
//     },
//     {
//         id:2,
//         email:"h3@gmail.com"
//     },
//     {
//         id:3,
//         email:"h3@gmail.com"
//     },
//     {
//         id:4,
//         email:"h3@gmail.com"
//     },
//     {
//         id:5,
//         email:"h3@gmail.com"
//     }
// ]
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(Object.hasOwnProperty('isLoggedIn'));

const course = {
    coursename:"999",
    courseInstructor: "histesh"
}

// course.courseInstructor

const{courseInstructor:instructor} = course
console.log(instructor);





