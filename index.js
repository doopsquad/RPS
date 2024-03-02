let playerPick = document.getElementById('playerPick');
let computerPick = document.getElementById('computerPick');
let result = document.getElementById('result');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');

let computerValue = 0;
let playerValue = 0;

function rps(choice) {


    let computerRPS = Math.floor(Math.random() * 3);
    switch (computerRPS) {
        case 0:
            computerPick.innerHTML = "Rock!";
            break;
        case 1:
            computerPick.innerHTML = "Paper!";
            break;
        case 2:
            computerPick.innerHTML = "Scissor!";
            break;
    }

    switch (choice) {
        case 'r':
            playerPick.innerHTML = "Rock!";
            break;
        case 'p':
            playerPick.innerHTML = "Paper!";
            break;
        case 's':
            playerPick.innerHTML = "Scissor!";
            break;
    }

    if (playerPick.innerHTML == 'Rock!' && computerPick.innerHTML == 'Scissor!') {
        result.innerHTML = "Player wins!";
        playerValue++;
        playerScore.innerHTML = `Player:${playerValue}`;
    }
    else if (playerPick.innerHTML == 'Scissor' && computerPick.innerHTML == 'Paper!') {
        result.innerHTML = "Player wins!";
        playerValue++;
        playerScore.innerHTML = `Player:${playerValue}`;
    }
    else if (playerPick.innerHTML == 'Paper!' && computerPick.innerHTML == 'Rock!') {
        result.innerHTML = "Player wins!";
        playerValue++;
        playerScore.innerHTML =`Player:${playerValue}`;
    } 
    else {
        result.innerHTML = "Computer wins!";
        computerValue++;
        computerScore.innerHTML = `Computer:${computerValue}`;
    }

    
}