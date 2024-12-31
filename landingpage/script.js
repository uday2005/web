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

  // let add7 = (num) => num+7;
  // let multiply = (a,b) => a*b;

  // let lastletter = (string) =>{
  //   cap = string.split('');
  //   return cap[string.length-1]
    
  // };

  // let capitalize = (string) =>{
  //   const you = string.split('');
  //   const first=you[0].toUpperCase();
  //   const rest= string.slice(1)
  //   return first+rest

  // }

  // try {
  //   // This  will throw a ReferenceError because undefinedVariable is not defined
  //   let a = undefinedVariable;
  // } catch(e)
  // {
  //   // e is the error object that conatains the details about the error
  //   console.log(e instanceof ReferenceError); // true , because the error is a ReferenceError
  //   console.log(e.message);  // gives the error message 
  //   console.log(e.name);  // Gives the name of error
  //   console.log(e.stack); // gives complete error by stacking up  name and message
  // }

  // //To create a new Refernce Error

  // try{
  //   throw new ReferenceError('Hello')
  // } catch(e){
  //   console.log(e instanceof ReferenceError) // true
  //   console.log(e.message)  // Hello
  //   console.log(e.name)  // give the name of the error
  //   console.log(e.stack)

  // }

  // try {
  //   eval("hoo bar");
  // } catch (e) {
  //   console.log(e instanceof SyntaxError); // true
  //   console.log(e.message);
  //   console.log(e.name); // "SyntaxError"
  //   console.log(e.stack); // Stack of the error
  // }


  
  const data= [
    { name: "Alice", id: 4, email: "Alice@gmail.com" },
    { name: "Bob", id: 7, email: "Bob@gmail.com" },
    { name: "Charlie", id: 6, email: "Charlie@gmail.com" },
    { name: "Diana", id: 8, email: "Diana@gmail.com" }
  ];
  console.time('one')  // this is to show time like we input the parametrs  variable as one and any code that is 
  //between the console.time('var') and console.timeEnd('var') and what time it takes to complete b/w them
  console.log('Hello')
  console.log({data:data})
  console.dir(data)  // What it does is that it convert our variable to the json format
  console.error(new Error('Error is prone'))
  console.info('info has so thing')
  console.warn('warn to do so')
  //console.assert(condition,what will print if it is false)
  console.assert(false,'it is not what you wanted')
  console.clear()
  console.assert(2,'it will not show anything as it is truth condition')
  console.assert(1-1,'it is false as 0 is falsy condition so it will show')
  console.timeEnd('one')

  // console.table(data)
  
  // like we have so many data and we want to have group them 

  // console.group('Group')
  // for (let i = 0; i< data.length;i++){
  //   console.log(data[i].name)
  // }
  // console.groupEnd('Group')

  // trace()  how this to to that function goes like its tell the path

  function one(){
    two()
  }

  function two(){
    three()
  }

  function three(){
    console.trace('inside three')
  }

  one();


  
  