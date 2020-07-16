var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");
const scoreBoard_div = document.getElementById("score-board");
const result_div = document.getElementById("result");

main();

function getComputerChoices() {
    const choices=['r', 'p', 's'];
    var choice = choices[Math.floor((Math.random()*3))];
    return choice;
}

function game(userChoice){
    const compChoice = getComputerChoices();
    console.log(compChoice);
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log('YOU WIN');
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log('YOU LOST');
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log('TIE');
            break;
    };

}


function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    });
    
    scissors_div.addEventListener('click', function(){
        game('s');
    });
    
    paper_div.addEventListener('click', function(){
        game('p');
    });
}



