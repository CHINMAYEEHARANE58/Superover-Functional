let strike = document.getElementById("strike")
let reset = document.getElementById("reset")
let scoreInd = document.getElementById("score-ind")
let scorePak = document.getElementById("score-pak")
let wicketsInd = document.getElementById("wickets-ind");
let wicketsPak = document.getElementById("wickets-pak");

let Team1Score = 0;
let Team2Score = 0;
let Team1Wicket = 0;
let Team2Wicket = 0;

let team = 1;
let Team1BallsFaced = 0;
let Team2BallsFaced = 0;

let possibleOutcomes = [0,1,2,3,4,6,'W'];

let gameOverSound = new Audio("http://bit.ly/so-crowd-cheer")
let strikeSound = new Audio("http://bit.ly/so-ball-hit")

function gameOver (){
    gameOverSound.play();
    switch (true) {
        case Team1Score > Team2Score:
            alert("Team IND Won!!!");
            break;
        case Team1Score < Team2Score:
            alert("Team Pak Won!!!");
            break;
        default:
            alert("It is another SuperOver");
    }

}

function updateScores (){
        scoreInd.innerHTML = Team1Score;
        scorePak.innerHTML = Team2Score;
        wicketsInd.innerHTML = Team1Wicket;
        wicketsPak.innerHTML = Team2Wicket;
}

reset.onclick = ()=>{
    window.location.reload();
}

strike.addEventListener("click",()=>{
    strikeSound.pause()
    strikeSound.currentTime = 0;
    strikeSound.play()

    let randomNumber = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    console.log(randomNumber)

    if (team == 2){
        Team2BallsFaced++
        document.querySelector(`#pak :nth-child(${Team2BallsFaced})`).textContent = randomNumber
        
        if (randomNumber == "W"){
            Team2Wicket++
            console.log("Hello")
            updateScores()
        }

        else{
            Team2Score+=randomNumber
            console.log("Hello")
            updateScores()
        }

        if ((Team2Wicket == 2) || (Team2BallsFaced == 6) || (Team2Score > Team1Score)){
            team = 3
            gameOver()
        }
    }

    else if(team == 1){
        Team1BallsFaced++; 
        document.querySelector(`#ind :nth-child(${Team1BallsFaced})`).textContent = randomNumber

        if (randomNumber == "W"){
            Team1Wicket++
        }
        
        else{
            Team1Score += parseInt(randomNumber, 10) || 0;
            console.log(Team1Score)
        }
        
        updateScores()
        console.log(Team1BallsFaced, "ball")
        if ((Team1Wicket == 2) || (Team1BallsFaced == 6)){
            console.log("Team change")
            team = 2;
        }
    }

})