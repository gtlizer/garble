//Element nodes
var buttons = document.querySelectorAll('.btn-choice');
var resetBtn = document.querySelector('#resetBtn');
//console.log(buttons);
var roundResultText = document.querySelector('#roundResultText');

var computerScoreText = document.querySelector('#computerScoreText');
var playerScoreText = document.querySelector('#playerScoreText');

//Event Listeners
buttons.forEach(function(button){
    console.log(button);

    button.addEventListener('click',function(event){
        console.log(event);
        var playerChoice = event.currentTarget.getAttribute('data-option');
        console.log(playerChoice);
        playRound(playerChoice);
    });
});

//Variables for the game
const choices = ['Rock','Paper','Scissors'];
var playerScore = 0;
var computerScore = 0;
const winningScore = 10;

//Play a round of Rock, Paper, Scissors
function playRound(playerChoice) {
 //playerChoice represents the data sent to the function from above
    var randomIndex = Math.floor(Math.random() * choices.length);
    console.log(randomIndex);

    var computerChoice = choices[randomIndex];
    console.log(computerChoice);

    if (playerChoice === computerChoice){
        //was a tie
        roundResultText.innerHTML = 'It was a tie!';
    };

    //ROCK

    if (playerChoice === 'Rock'){
        //player chooses rock
        if (computerChoice === 'Paper'){
            //computer wins
            roundResultText.innerHTML = 'You lost';
            computerScore++;
            computerScoreText.innerHTML = computerScore;
        } 
        else if (computerChoice === 'Scissors') {
            //computer didn't choose paper
            //computer chose scissors
            //Player won
            roundResultText.innerHTML = 'You won!';
            playerScore++;
            playerScoreText.innerHTML = playerScore;
        }
    };

    //PAPER

    if (playerChoice === 'Paper'){
        //player chooses paper
        if (computerChoice === 'Rock'){
            //player wins
            roundResultText.innerHTML = 'You won!';
            playerScore++;
            playerScoreText.innerHTML = playerScore;
        } 
        else if (computerChoice === 'Scissors') {
            //computer didn't choose rock
            //computer chose scissors
            //computer wins
            roundResultText.innerHTML = 'You lost';
            computerScore++;
            computerScoreText.innerHTML = computerScore;
        }
    };

    //SCISSORS

    if (playerChoice === 'Scissors'){
        //player chooses Scissors
        if (computerChoice === 'Paper'){
            //player wins
            roundResultText.innerHTML = 'You won!';
            playerScore++;
            playerScoreText.innerHTML = playerScore;
        } 
        else if (computerChoice === 'Rock') {
            //computer didn't choose paper
            //computer chose rock
            //computer won
            roundResultText.innerHTML = 'You lost';
            computerScore++;
            computerScoreText.innerHTML = computerScore;
        }
    };

    if (playerScore === winningScore || computerScore === winningScore){
       setTimeout(function(){
            gameOver(playerScore, computerScore);
       }, 0);
    }
};

//Reset scores and text elements to 0
function resetGame() {
    roundResultText.innerHTML = '';
    playerScore = 0;
    computerScore = 0;
    computerScoreText.innerHTML = 0;
    playerScoreText.innerHTML = 0;
}

//Alert the player whether they won or not after someone reaches 10 points
function gameOver(playerScore, computerScore) {
    if (playerScore > computerScore){
        alert('Congratulations dude. This game is tough to win, but you did it. Wanna try again?');
    } else {
        alert('You lost dude. This game is tough to win. Sorry... Wanna try again?');
    };

    resetGame();
}

//Start over button function - Call the resetGame function in the end of the function
resetBtn.addEventListener("click", function(){resetGame()});
