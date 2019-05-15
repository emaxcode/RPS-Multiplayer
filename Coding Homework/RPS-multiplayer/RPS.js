let userScore = 0;
let computerScore = 0;

// Score & Result Divs
const userScore_span = document.getElementById("your-ccore");
const computerScore_span = document.getElementById("computer-score");
const results_p = document.querySelector(".results > p");

// Divs
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

// Action: Computer Choice  
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

   //  Win
function win(userChoice, computerChoice) {
	
	userScore++;
	const userchoice_div = document.getElementById(userChoice);
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	results_p.innerHTML = `${userChoice}<sub>(You)</sub> beats ${computerChoice}<sub>(Computer)</sub>. You Win!`;
	userchoice_div.classList.add('blue-glow');    
	
}

    // Lose
function lose(userChoice, computerChoice) {
	
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	results_p.innerHTML = `${userChoice}<sub>(You)</sub> loses to ${computerChoice}<sub>(Computer)</sub>. You lost!`;
	
}
 
// Action: Tie
function Tie(userChoice, computerChoice) {
	
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	results_p.innerHTML = `${userChoice} beats ${computerChoice} It's a Tie!`;

}


function game(userChoice, computerChoice) {
	
    switch (userChoice.toLowerCase() + computerChoice.toLowerCase()) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
			console.log(userChoice.toLowerCase() + computerChoice.toLowerCase());
			console.log('Win');
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
			console.log(userChoice.toLowerCase() + computerChoice.toLowerCase());
			console.log('Loose');
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
			console.log(userChoice.toLowerCase() + computerChoice.toLowerCase());
			console.log('Tie');
            Tie(userChoice, computerChoice);
            break;
    }  
}

// Action: Main
function main() {
    rock_div.addEventListener("click", function(){
		const computerChoice = getComputerChoice();
		game("Rock", computerChoice);
	});
    paper_div.addEventListener("click", function(){
		const computerChoice = getComputerChoice();
		game("Paper", computerChoice);
	});
    scissors_div.addEventListener("click", function(){
		const computerChoice = getComputerChoice();
		game("Scissors", computerChoice);
	});
}
main();