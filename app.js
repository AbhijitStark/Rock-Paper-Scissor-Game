let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];        
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];    
};

const drawGame =()=>{
   // console.log("game was draw.");
    msg.innerText = ("Game was Draw. Play again.")
    msg.style.backgroundColor = "#348ceb";
};
const showWinner = (userWin ,userChoice ,compChoice)=>{
      if(userWin){
        userScore++;
        userScorePara.innerText=  userScore ;
        msg.innerText=(`you win! Your ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor = "green";
        //console.log("you win!");
    }else{
        compScore++;
        compScorePara.innerText= compScore ;
        msg.innerText=(`you lost. ${compChoice} beats ${userChoice}`);
        msg.style.backgroundColor = "red";
        //console.log("you lose");
    }
};
const playGame = (userChoice) => {
   // console.log("user choice =", userChoice);
    //Generate computer choice 
    const compChoice = genCompChoice();
   // console.log("compchoice=",compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if( userChoice === "rock"){
            //scissors ,paper
            userWin=compChoice ==="paper" ? false : true;
        }else if( userChoice === "paper"){
            // rock , scissors 
           userWin = compChoice === "scissors" ? false : true;
        }else {
            // rock , paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice ,compChoice);

    }
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});
