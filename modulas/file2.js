// import { name } from "./file.js";
// console.log(name)

// import { parent,child } from "./file.js";
// import { child } from "./file.js";



// console.log(parent);
// console.log(child);

// Asyncornas bevaior

// setInterval(function name() {
//     console.log("hello world")
//     document.write('hello guys'+'<br>')
// },1000)

// console.log('real world')


// function register() {
//     setTimeout(function () {
//         console.log('register')
//     },1000)
// }

// function getdata() {
//     setTimeout(function () {
//         console.log('getdata')
//     },1500)
// }

// function login() {
//     setTimeout(function () {
//         console.log('login')
//     },2000)
// }

// function display() {
//     setTimeout(function () {
//         console.log("display data")
//     },2500)
// }


// register();
// getdata();
// login();
// display();


function register(cb) {
    setTimeout(function () {
        cb()
    },3000)
}

function login(cb) {
    setTimeout(function () {
        cb();
    },2000)
}

function display(cb) {
    setTimeout(function () {
        cb();
    },1000)
}

register( ()=> {
  console.log('register completed')
  
  login( () =>{
    console.log('login completed')

    display( () => {
        console.log('display data');
    })
  })
  
})

// register();
// login();
// display();