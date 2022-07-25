// implement promise.all polyfill

// The Promise.all() accepts an array of promises and returns a promise that resolves when all of the promises in the array are fulfilled
// or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.


function showLogAfterDelay(text, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, delay)
    });
}

function customPromiseAll(promises) {
  let promiseResult = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p,index) => {
      p.then((val) => {
        promiseResult[index]= val;
        if (++counter === promises.length) {
          resolve(promiseResult);
        }
      }).catch((val) => reject(val))
    })
  })
}

customPromiseAll([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me')])
    .then((val) => console.log('in resolve', val))
    .catch((val) => console.log('in reject', val));
customPromiseAll([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me'), Promise.reject('Reject me')])
    .then((val) => console.log('in resolve', val))
    .catch((val) => console.log('in reject', val));
