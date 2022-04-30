// ==========================================
// Function declaration
// ==========================================
//

// function fn(){
//     const x = 5;
//     const y =10;
//     console.log(x + y)
// }
//

// Function expression - переменая либо константа которой присвоена функ
//    const f3 = function (){
//     console.log('hello')
//   }
// f3();


//==========================================
//                      //function for finding random number


// let max = 200
// let min = 100
// function randomInt(){
//     let rand = Math.floor(min + Math.random() * (max + 1 - min))
//     console.log(rand)
// }
// randomInt();
//


//==========================================
//                           //Function on many parameters


// function shoAllSum(...args){
//     console.log(args);
//     let sum = 0;
//     for (i=0;i<arguments.length;i++){
//         sum = sum + arguments[i];
//     }
//
//     console.log(sum)
// }
// shoAllSum(4,5,6,1,3)
//


// function f1(x,y){
//    return x + y;
// }
// f1(4,5);
//
//  function f2(){
//      return 5;
//  }
//  f2();
// console.log(5+5+5+f1(2,1))
//
//

//      function rando(min,max) {
//          let rand = min + Math.random() * (max + 1 - min);
//          return Math.floor(rand)
//      }
//       let r = rando(222,333)
//       console.log(r)
//

//==========================================
//                                   //Interrupt function


// function IndexOf(arr, num) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === num) return i;
//     }
//     return -1
// }
//
// let result = IndexOf([40, 50, 65, 60], 45)
// console.log(result)
// //
// //
//
// const arr1 = [[3, 4, 5], [6, 7, 9], [7, 7, 1]];
// const arr2 = arr1.filter(function (item) {
//     return (sum(item) % 2 === 0)
// })
// console.log(arr2)
// function sum(arr) {
//     let summ = 0;
//     for (i = 0; i < arr.length; i++) {
//         summ = summ + arr[i];
//     }
//     return summ;
// }


//==========================================
//                                //Calback function


//
// function f1(y) {
//   console.log(1)
//     y();
// }
//
// function second(a, b){
//   console.log(a * b)
// }
// f1(function () {
//   second(2, 10)
// });
//
//
// const user = {
//   age : 18,
//   password : 'asdtdgf',
//   agreeToTerm : true
// }
// function checkPassword(){
//   return user.password.length > 6;
// }
// function checkTerms(){
//   return user.agreeToTerm === true;
// }
// function checkAge(){
//   return user.age >= 18;
// }
// console.log(checkAge(user),checkPassword(user))

//
//      function createValid(...args){
//   return function (obj){
//     for (i = 0;i < args.length;i++){
//       if(args[i](obj) === false) return false;
//     }
//     return true;
//   }
// }
// const validator1 = createValid(checkAge, checkPassword, checkTerms)
// console.log(validator1(user))

// const names = ['evgen', 'alex', 'anna', 'vita']
//
// function mapArr(arr, fn) {
//     const res = []
//     for (i = 0; i < arr.length; i++) {
//         res.push(fn(arr[i]))
//     }
//     return res;
// }
//
// function namelenght(el) {
//     console.log(el)
//     return el.length
// }
//
// function nameToupperCase(el) {
//     return el.toUpperCase()
// }
//
// const result = mapArr(names, namelenght)
// const rs = mapArr(names, nameToupperCase)
// console.log(rs)


// function copyArray(arr, instuck){
//     const output = [];
//
//     for (i=0;i<arr.length;i++){
//         output.push(instuck(arr[i]))
//     }
//     return output;
// }
//
// function summNumber(num){
//     return num*num;
// }
// const result = copyArray([1,2,3,4],summNumber)
// console.log(result)
//


// const arr =[1,2,3,4]
// const users ={
//     name:'jekki'
// }
// function f1(callback,obj){
//     arr[3] = arr[3]*2
//     console.log(arr)
//     callback(arr);
// }
// function showArr(a){
//     out = '--'
//     console.log(a.join(out))
// }
// function Showname(a){
//     arr[1]=arr[1] + 4
//     console.log(a.join(users.name))
//
// }
// f1(Showname,users);
//


//==========================================
//                                  //Recursion function

//
// let t =0;
//   function fr(){
//     t++;
//     console.log(t)
//       if(t >= 30) return
//       fr();
//   }
//   fr();

//
//
// function rf(){
//   let out ='';
//   for(i = 1;i<30;i++){
//     out = out + i + ' ';
//   }
//   console.log(out)
// }
// rf();
//
//
//
// let i = 0;
// let out = '';
//     function f3() {
//      i++;
//     out = out + i + ' ';
//      if(i >= 30) return;
//      f3();
//      }
//     f3();
// console.log(out)
//
//
//
//   function randomInteger(min,max) {
//       let rand = min + Math.random() * (max + 1 - min);
//       return Math.floor(rand)
//   }
//   let sum = 0;
// function moneyRecursion(){
//   let money = randomInteger(0,200)
//   console.log('add :'+ money)
//   sum = sum + money;
//   console.log('my summ :',sum)
//   if(sum >= 5500) return
//   moneyRecursion();
// }
// moneyRecursion();

//
//
//    function moneyCycle(){
// let summ = 0;
// while(true){
//   let money = randomInteger(0,200)
//   summ = summ + money
//   console.log('my sum :',summ)
//   if(summ >= 500)return
// }
// }
// moneyCycle();
//
//
//
// function factorial(n){
//   let s = 1;
//   for (i=1;i<=n;i++){
//    s = s * i
//   }
//   console.log(s)
// }
// factorial(5);
//
//
//
// let s1 = 1;
// function fact2(n){
// if(n === 0) return;
// s1 = s1 * n;
// fact2(n-1);
// }
// fact2(5)
// console.log(s1);

//==========================================
//closure function


//
//     function createStep(n= 0) {
//       let count = n;
//       return function step() {
//         count++;
//         console.log(count)
//       }
//     }
//    let step1 = createStep(10);
//  step1();
//
//
//
//
//
//   function randomI(min,max) {
//       let rand = min -0.5 + Math.random() * (max -min +1);
//       return Math.round(rand)
//     }
//   function createBeggar() {
//     let s1 = 0;
//     return function beggar() {
//           s1 = s1 + randomI(0, 100)
//           console.log(s1)
//           if (s1 >= 250) return
//           beggar();
//         }
//   }
//   let begg1 = createBeggar();
//   begg1();
// //
//
//
//
//     function createCall(n){
//         return function (){
//             console.log(1000 * n)
//         }
//     }
//
// const calc =createCall(5)
// calc();



//==========================================
// higher order function


// const user = {
//     age: 29,
//     password: 'assfhhh',
//     agree: true
// }
// const user2 = {
//     age: 36,
//     password: 'asadsgdh',
//     agree: false
// }
//
// function checkAge(user) {
//     return user.age > 18
// }
//
// function checkPassword(user) {
//     return user.password >= 6
// }
//
// function checkAgreement(user) {
//     return user.agreee === true
// }
//
//
// function createValidator(...args) {
//     return function (obj) {
//         for (i = 0; i < args.length; i++) {
//             if (args[i](obj) === false) return false;
//         }
//         return true;
//     }
// }
//
// const validator = createValidator(checkAge, checkAgreement)
// console.log(validator(user))

