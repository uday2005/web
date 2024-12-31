let humanscore = 0;
let computerscore = 0;

function getComputerChoice (){
    values = ['rock','paper','scissors'];
    number = Math.floor(Math.random()*3);
    return values[number];


}

function getHumanChoice (){
    
    value= prompt("what you want to choose");
    return  value;
}
let humanchoice = getHumanChoice();
let computerchoice = getComputerChoice();


function playround(humanchoice,computerchoice){

    humanchoice = humanchoice.toLowerCase();
    if (humanchoice === computerchoice){
        return [0,0]
    }
    else if((humanchoice === 'rock' && computerchoice === 'scissors')  || (humanchoice === 'paper' && computerchoice === 'rock') || (humanchoice ==='scissors' && computerchoice === 'paper') )                                                     
            {
                return [1,0]
            }
    else 
            {
               return [0,1]
                
            }
}

function playgame(){
   let  humanscorefinal = 0;
    let computerscorefinal = 0;

    for (let i  = 0; i<5;i++){
    const humanchoice = getHumanChoice(); // Replace with actual human choice
    const computerchoice = getComputerChoice();
    let [humanscore,computerscore] =  playround(humanchoice,computerchoice);
    humanscorefinal += humanscore;
    computerscorefinal += computerscore;
    console.log(`Round ${i + 1}:`);
    console.log(`Human chose: ${humanchoice}`);
    console.log(`Computer chose: ${computerchoice}`);
    console.log(`Round scores - Human: ${humanscore}, Computer: ${computerscore}`);
    console.log(`Total scores - Human: ${humanscorefinal}, Computer: ${computerscorefinal}`);

    }
    if (humanscorefinal === computerscorefinal){
        console.log("Hey it a draw")
    }
    else if(humanscorefinal > computerscorefinal){
        console.log("hey you wom")

    }
    else{
        console.log("hey you lose")
    }

    return [humanscorefinal , computerscorefinal]
}

playgame();