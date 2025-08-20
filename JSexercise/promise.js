



/*
JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. 
Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states

Pending: The task is in the initial state.
Fulfilled: The task was completed successfully, and the result is available.
Rejected: The task failed, and an error is provided.
*/

/* 
  let checkEven = new Promise((resolve, reject) => {
    let number = 5;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure
 */
/*
Async and Await in JavaScript are used to simplify handling asynchronous operations using promises. 
By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.
*/

/* async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
  const data = await response.json();
  console.log(data);
}
fetchData(); */


/* //async function
const getData = async () => {
    let data = "Green world";
    return data;
}
getData().then(data => console.log(data));

 */
// 
// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();


// freeze the debugger on the browser
setTimeout(function () {
    debugger}, 2000);

