// console.log("script start") //1

// async function async1() {
//   await async2()
//   console.log("async1 end")
// }
// async function async2() {
//   console.log("async2 end")
// }
// async1()

// setTimeout(function () {
//   console.log("setTimeout")
// }, 0)

// new Promise((resolve) => {
//   console.log("Promise")
//   resolve()
// })
//   .then(function () {
//     console.log("promise1")
//   })
//   .then(function () {
//     console.log("promise2")
//   })

// console.log("script end")

// setTimeout(() => {
//   console.log("s1") //2
//   Promise.resolve().then(() => {
//     console.log("p1") //3
//   })
//   Promise.reject().catch(() => {
//     console.log("p2") //4
//   })
// })
// setTimeout(() => {
//   console.log("s2") //5
//   Promise.resolve().then(() => {
//     console.log("p3") //6
//   })
//   Promise.reject().catch(() => {
//     console.log("p4") //7
//   })
// })
// Promise.resolve().then(() => {
//   console.log("p3") //1
// })

setTimeout(() => {
  console.log("s1") 
  Promise.resolve().then(() => {
    console.log("p1")  
  })
  Promise.reject().catch(() => {
    console.log("p2") 
  })
})

Promise.resolve.then(()=>{
    console.log('p1')
    setTimeout(()=>{
        console.log('s2')
    })
    setTimeout(()=>{
        console.log('s3')
    })
})
