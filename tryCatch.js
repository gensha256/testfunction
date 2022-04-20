//=====================================//
//try / catch / finally //
//=====================================//

//Throw - used to throw various types of exceptions
//

//  let res = 0;
// try{
//     res = a;
// }
// catch (err){
//     throw err.name
// }
// finally {
//     console.log('A = 0')
// }


//     let b = 0;
//     try{
//   res = m;
//  throw new TypeError('m is not defined')
// }
//  catch (err){
//  console.log('error: ', err.name)
//  }
//   finally {
//  console.log('Always Run')
//   }


//
//   function tryCatch(a, b) {
//       let result = 0;
//       if (a != 0 && b != 0) {
//           result = a + b;
//           console.log(result)
//       } else {
//               throw'error 404'
//           }
//           try {
//               result = a;
//               throw new SyntaxError('a is not defined!!!')
//           } catch (error) {
//               console.log('error: ', error.message )
//           }
//       }
//    tryCatch(5,10);


//=====================================//
//Promise
// Promise - used to set the sequence for asynchronous operations
//=====================================//


// const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: '2000',
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })
// promise.then(function (data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
//         .then(clientData => {
//             console.log('Data received', clientData)
//         })
//         .catch((err) => {
//             console.error('error', err)
//         })
//         .finally(()=> console.log('Finnaly'))
// })


//=====================================//
//THIS
//=====================================//
//arrow function - > this - > window

// console.log(this) - //window
//
// function getPrice() {
//     console.log(this.price)
// }
//
// const product = {
//     name: 'AMD',
//     price: '100',
//     getPrice,
//     info: {
//         information: ['2.3Ghz'],
//         getInfo: function () {
//             console.log('Info ', this)
//         },
//
//     }
// }
//
// product.getPrice()
// product.info.getInfo()
//

//CALL , BIND , APPLY

//
// const user = {
//     name: 'Evgen',
//     age: 18,
//     sayHello(age) {
//         console.log(`My name is  ${this.name}, and my age ${age}`)
//     }
// }
//
// const f = user.sayHello.bind(user, 25)
// user.sayHello.call(user, 26)
// user.sayHello.apply(user, [27])
// f()
// const auto = {
//     brand: 'BMW',
//     drive(price) {
//         console.log(`My brand ${this.brand}, and price ${price}$`)
//     }
// }
// auto.drive.call(auto, 23300)
// auto.drive.apply(auto, [200000])
// const drv = auto.drive.bind(auto, 20000)
// drv()


// function hello() {
//     console.log('Hello', this)
// }
//
// const person = {
//     name: 'Jenya',
//     age: "25",
//     sayHello: hello,
//     logInfo: function (job, phone) {
//         console.group(`${this.name}, info:`)
//         console.log(`Name: ${this.name}, \n Age: ${this.age}, \n Profession: ${job},\n Phone: ${phone}`)
//         console.groupEnd()
//     }
// }
//
// // person.sayHello();
// // person.logInfo.call(person)
//
// const lena = {
//     name: 'Elena',
//     age: 36
// }
// const fnLEna = person.logInfo.bind(lena, 'Developer', '+244-996-497')
// fnLEna()
// person.logInfo.call(lena, 'Developer', '+244-996-497')
// person.logInfo.apply(lena, ['Developer', '+244-996-497'])
