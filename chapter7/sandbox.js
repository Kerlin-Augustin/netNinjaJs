// console.log(1)
// console.log(2)

// setTimeout(() => {
//   console.log('callback')
// }, 2000)

// console.log(3)
// console.log(4)


// setTimeout(() => {
//   console.log('callback 2')
// }, 1000)

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//       // console.log(request, request.readyState)
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         resolve(data)
//       } else if (request.readyState === 4) {
//         reject('error')
//       }
//     })

//     request.open('GET', resource);
//     request.send()
//   })
// }

// getTodos('https://jsonplaceholder.typicode.com/todos/').then(data => {
//   console.log('promise resolves: ', data)
//   return getTodos('todos.json')
// }).then(data => {
//   console.log('promise 2: ', data)
// }).catch(err => {
//   console.log('promise rejected: ', err)
// })

// getTodos('todos.json', (err, data) => {
//   console.log(data)
//   getTodos('https://jsonplaceholder.typicode.com/todos/', (err, data) => {
//     console.log(data)
//   })
// })

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve('resolve')
//     reject('reject')
//   });
// }

// getSomething()
//   .then((data) => {
//     console.log(data)
//   }).catch(err => {
//     console.log(err)
//   })

// fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => {
//     console.log(response)
//     return response.json()
// }).then(data => {
//   console.log(data)
// }).catch((reject) => {
//   console.log(reject)
// })

const getTodos = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    if(!response.ok){
      throw new Error('fetch error')
    }

    let data = await response.json()

    response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    if(!response.ok){
      throw new Error('fetch error')
    }
    
    data = await response.json()

    response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    if(!response.ok){
      throw new Error('fetch error')
    }

    data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

getTodos()
  .then(data => console.log(`resolve: `, data))
  .catch(err => console.log(`rejectd: `,err.message))
