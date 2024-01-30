const prompt = require('prompt');

prompt.start();

prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('User selection: ' + result.userSelection);
    
    let computerSelection;
    let randomNum = Math.random();
    
    if (randomNum <= 0.34) {
        computerSelection = 'PAPER';
    } else if (randomNum <= 0.67) {
        computerSelection = 'SCISSORS';
    } else {
        computerSelection = 'ROCK';
    }
    
    console.log('Computer selection: ' + computerSelection);
    
    if (result.userSelection === computerSelection) {
        console.log("It's a tie");
    } else if (
        (result.userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (result.userSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (result.userSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        console.log('User Wins');
    } else {
        console.log('Computer Wins');
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}
