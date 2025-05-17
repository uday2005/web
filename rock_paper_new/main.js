
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

function getHumanchoice(){
    let chosen = prompt("Choose rock , paper , scissors");
    chosen  = chosen.toLowerCase();
    return chosen
}

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



let  i =  0;
while(i < 5){
    let humanchoice = getHumanchoice();
    let computerchoice = getComputerchoice();
    playround(humanchoice , computerchoice);
    console.log(`Score: You ${humanscore} - Computer ${computerscore}`);
    i++;
}

if(humanscore > computerscore ){
    console.log('you win')
}
else if(humanscore == computerscore){
 
   console.log('no one won')
}
else{
    console.log('you lost')
}

