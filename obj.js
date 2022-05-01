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
//     age: 25,
//     city: 'Poltava',
//     show() {
//         console.log(`${this.name} ${this.age} and i live in ${this.city}`)
//     }
// })
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

//==========================
//Methods massive
//==========================

// const friends =['Max', 'Vitaliy','Vladislav']
//
// // Push
// friends.push('Alex');
// console.log(friends)
//

// const people = [
//     {name: 'Elena', age: 20, budget: 40000},
//     {name: 'Alex', age: 25, budget: 50000},
//     {name: 'Max', age: 17, budget: 19000},
//     {name: 'Mikhail', age: 15, budget: 2000}
// ]


//forEach
// people.forEach(function (person, index){
// console.log(person)
// })
//

//Map
//  const newPeople = people.map(function (person){
//      return person.name
// })
// console.log(newPeople)

//Filter
// const adults = people.filter((person, index) =>  {
//     if (person.age >= 18) return true ;
// })
// console.log(adults)


//Reduce
// const amount = people.reduce(function (total, person,index){
//     if(person.budget >= 20000){
//         return total + person.budget
//     }
//     return total
// },0)
// console.log(amount)

//Find
//  const names = people.find((person)=>{
//     return person.name === 'Mikhail'
// })
// console.log(names)
