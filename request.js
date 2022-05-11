//====================
//Server requests
//====================

//XMLHttpRequest это API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером.
// Данный API предоставляет простой способ получения данных по ссылке без перезагрузки страницы.

//JSON is a text-based data storage format following the JavaScript object syntax,
// commonly used to transfer data between a server and a client

//GET data
// const URL = 'https://jsonplaceholder.typicode.com/users'

// let xhr = new XMLHttpRequest();
//
// xhr.open('get', URL)
//
// xhr.setRequestHeader('Content-Type', 'application/json')
// xhr.onload = () => {
//     if (xhr.status >= 400) {
//         console.error(xhr.response)
//     } else {
//         console.log(JSON.parse(xhr.response))
//     }
// }
// xhr.send();


// POST data
// let post = new XMLHttpRequest();
//
// post.open('post', URL)
// post.setRequestHeader('Content-Type', 'application/json')
// const body = {
//     name: "Alex",
//     age: 25
// }
// post.onload = () => {
//     const posts = JSON.parse(post.response)
//     console.log(posts)
// }
// post.send(JSON.stringify(body))
//


//Fetch
// Fetch API - is a JavaScript interface for working with HTTP requests and responses
 // function getData(urL) {
 //     return fetch(urL)
 //         .then((response) => {
 //             return response.json()
 //         })
 // }
 //   getData(URL).then((data) => {
 //        console.log(data)
 //    })
 //    .catch((err) => {
 //        console.log(err)
 //    })



//Fetch POST
// function fetchPost(url, type, data) {
//     fetch(url, {
//         method: type,
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({data})
//     })
//         .then((res) => {
//             console.log('HTTP  request getting')
//             return res;
//         })
//         .then((res) => {
//              return res.json()
//         })
//         .then((data) => {
//             console.log(data)
//         }).catch((err)=>{
//             console.error('Error', err)
//     })
// }
//
// fetchPost('https://reqres.in/api/user', 'POST', {
//     name:'Max'
// })
//



//Async Await
// async function getData(url) {
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         return data
//     } catch (err) {
//         console.error("Error")
//     }
// }
//
// getData(URL)
//     .then((res) => {
//         console.log('Data',res)
//