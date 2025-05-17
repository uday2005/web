
function getRandomInt(max){

    return Math.floor(Math.random() * max);
}
// This will give 0  inclusive to 3 exclusive and onlt int as we have done floor here.
function getComputerchoice(){
    
    let number = getRandomInt(3);

    if(number === 0){
        return 'rock';
    }
    else if(number === 1){
        return 'paper';
    }
    else{
        return 'scissors'
    }

}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')
const result = document.querySelector('#final_res')

let humanscore = 0;
let computerscore = 0;
function playround(humanchoice , computerchoice){
    
    if((humanchoice === 'rock' && computerchoice === 'scissors') || 
        (humanchoice === 'paper' && computerchoice === 'rock') ||
        (humanchoice === 'scissors' && computerchoice === 'paper')){
            humanscore++;
        console.log(`You win this round! ${humanchoice} beats ${computerchoice}`);
    }
    else if
        (humanchoice === computerchoice){
            humanscore += 0;
            computerscore += 0;
        console.log(`It's a tie! You both chose ${humanchoice}`);
        }
    else{
        computerscore++;
        console.log(`You lose this round! ${computerchoice} beats ${humanchoice}`);
    }
}

   
// paper.addEventListener("click",playround('paper' , computerchoice))
// scissors.addEventListener("click",playround('scissors' , computerchoice))


// rock.addEventListener("click", function() {
//     playround('rock', getComputerchoice());
// });
// so the problem still is when we  clcik button how do we know what is score so 


function score(){
    if(humanscore >= 5 || computerscore >= 5){
    if(humanscore > computerscore ){
    result.textContent = "You won";
    
}
else if(humanscore == computerscore){
   result.textContent = "no one won";
}
else{
    result.textContent = "You Lose";
}
}
}





rock.addEventListener("click", function() {
    playround('rock', getComputerchoice());
    score();
});
paper.addEventListener("click", function() {
    playround('paper', getComputerchoice());
    score();
});
scissors.addEventListener("click", function() {
    playround('scissors', getComputerchoice());
    score();
});


