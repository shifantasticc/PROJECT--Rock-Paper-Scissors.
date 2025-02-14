let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(math.random() * 3);
    return option[ranIdx];
};

const drawGame = () => {
    msg.innerText = "Its a Draw. Try Again!";
    msg.style.backgroundColor = "#07121f";1
    
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#00cc00";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose!! ${userChoice} beats Your ${compChoice}`;
        msg.style.backgroundColor = " #d21a25";
    }
};

const playGame = (userChoice) => {
    //generate computer choice -> modular
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else{
        let userWin = true;
        if( userChoice === "rock"){
            // paper, scissors.
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock, scirrors.
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // rock, paper.
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});