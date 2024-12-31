// const textBox = document.querySelector('.text');
// function logkey(event){
//     console.log(`you have pressed '${event.key}'. `)
// };

// textBox.addEventListener("keydown", logkey);


// textBox.addEventListener("keydown", function (event){
//     console.log(`you have pressed '${event.key}'.`);
// });
// // This is the anonymous function of upper one

// textBox.addEventListener("keydown",(event) => {
//     console.log(`you have pressed '${event.key}'. `);
// });
// //This is the the arrow function which we cna write like wise form
// // of upper two


// // if we have one one parameter of function then we can remove
// // the close bracket 

// //aditionally if we have only one return statment then we can also remove the paranthesis

// const originals = [1, 2, 3];

// const doubled = originals.map(item => item * 2);
// // so here we are not mentioning that item is speicfic indices value but still it goes to work
// // as it is map inside property to iterate over the loop

// console.log(doubled);

// const textbox = document.querySelector("#textBox");
// const output = document.querySelector("#output");

// textbox.addEventListener("keydown",(event) =>{
//     output.textContent = `You pressed '${event.key}'.`;
// });


// // function Showprimes(n){
// //     nextPrime: for(let i = 2;i < n;i++){

// //         for (let j = 2;j<i;j++){
// //             if (i%j==0) continue nextPrime   
// //         }
// //     }
// //     alert(i);
// // }

// function Showprime(n){
//     for(let i = 2;i<n;i++){
//         if (!(isPrime(i))) continue
//         alert(i)
//     }
    
// }

// function isPrime(n){
//     for (let i = 2;i<n;i++){
//         if (n%i==0) return false
//     }
//     return true
// }

// function checkage(age){
//     if (age>18){
//         return true;
//     }
//     return confirm("Did your parent allowed this");
// }

// function checkage(age){
//     return (age>18) ? true :confirm("Did your parents allowed this");
// }

// function checkage(age){
//     return (age>18) || confirm("Did your parents allowed this");
// }

// function min(a,b){
//     if (a<b){
//         return a
//     }
//     return b
// }

// function min(a,b){
//     return a<b ? a: b
// }

// function pow(x,n){
//     let result = x;
//     for(let i = 1;i<n;i++){
//         x  = result * x
//     };
//     return x
// }

// function sum(a,b){
//     return a+ b
// }

// let sum = function sum (a,b) {
//     return a+ b
// };

// let sum = (a,b) => {
//     return a+ b
// };

// let double = (n) =>{
//     return n* 2
// }

// let sayhi = () =>{
//     alert('hello')
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     () =>  alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );

  let add7 = (num) => num+7;
  let multiply = (a,b) => a*b;

  let lastletter = (string) =>{
    cap = string.split('');
    return cap[string.length-1]
    
  };

  let capitalize = (string) =>{
    const you = string.split('');
    const first=you[0].toUpperCase();
    const rest= string.slice(1)
    return first+rest

  }
