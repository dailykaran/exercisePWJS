
//Function Declaration: A standard way to define a function

function add(a, b) {
    return a + b;
}

//Function Expression: A function can also be defined using an expression and can be anonymous.

let user1 = function(name) { console.log(`Hi ${name}`) }        

//Arrow Function: concise way to write functions using => syntax

let user2 = () => 'Hello, Home!';
console.log(user2())

//Asynchronous function

test("Title of the test", async ({page}) => {

    const browser = await chromium.launch();
})


// Callback function : A function which takes another function as an argument inside it is called a callback function

function processUserInput(callback){
    let name = prompt("Please enter your name");
    callback(name);
}

function displayName(name) {
    alert("Hello " + name );
}

//Calling the function
processUserInput(displayName)


