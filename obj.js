//===========================================
//All data type in js

//number
//string
//Boolean : true,false
//Null : null
//undefined
//Symbol()
//BigInt
//Object
//===========================================


//======================
//Create object
//======================

// const user = {
//     name: 'Evgeniy',
//     age: 25,
//     isAdmin: true,
//     email: 'developweb@gmail.com',
//     address: {
//         country: 'Ukraine',
//         city: 'Kiev',
//     },
//     skills: ['html', 'css', 'js']
// };
//
// console.log(user.name)
// console.log(user['address'])
// console.log(user['address'].country)
// console.log(user.skills[0])
//

//======================
//Getters amd setters
//======================


// let person = {
//     firstName: 'Ivan',
//     lastName: 'Petrov',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}  `
//     },
//     set fullName(value) {
//         this.firstName = value.trim();
//     },
// }
// person.fullName = 'Max'
// // console.log(person.fullName )



//==========================
//Object prototype
// Prototypes -  are the mechanism by which JavaScript objects inherit properties from each other.
//==========================


// const user = new Object({
//     name: 'Ivan',
// //     age: 25,
// //     city: 'Poltava',
// //     show() {
// //         console.log(`${this.name} ${this.age} and i live in ${this.city}`)
// //     }
// // })
// // Object.prototype.sayHello = function () {
// //     console.log('Hello', this.name)
// // }
// //
// const user2 = Object.create(user)
// console.log(user2.show())
//
// let key = Object.keys(user)
// console.log(key)
//
// let values = Object.values(user)
// console.log(values)
//
// let entries =Object.entries(user)
// console.log(entries)


