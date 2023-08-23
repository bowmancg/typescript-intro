// const names: Array<string> = []

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('DONE')
//     }, 2000);
// })

// promise.then(data => {
//     data.split(' ')
// })

function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Chandler", hobbies: ["Books"] },
  { age: 24 }
);
console.log(mergedObj);
