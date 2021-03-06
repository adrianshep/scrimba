/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, prevRoll0, prevRoll1, setScoreToWin, scoreToWin;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {

        // 1. Random number
        var dice0 = Math.floor(Math.random() * 6) + 1;
        console.log('dice: ' + dice0);
        console.log('prevRoll: ' + prevRoll0);

        var dice1 = Math.floor(Math.random() * 6) + 1;
        console.log('dice: ' + dice1);
        console.log('prevRoll: ' + prevRoll1);

        // 2. Display the result
        var diceDOM0 =   document.querySelector('.dice-0');
        diceDOM0.style.display = 'block';
        diceDOM0.src = 'dice-' + dice0 + '.png';

        var diceDOM1 =   document.querySelector('.dice-1');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';

        // 3. Update the round score IF the rolled number is NOT a 1
        // 4. CHALLENGE 6 PART 1: Update the player's ENTIRE score to 0 if he rolls two 6's in a row

        if ((dice0 === 6 || dice1 === 6) && (prevRoll0 === 6 || prevRoll1 === 6)) {
            // reduce GLOBAL score to 0
            scores[activePlayer] = 0;

            // update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            // Next player
            nextPlayer();

        } else if (dice0 !== 1 || dice1 !== 1) {
            //Add score
            roundScore = roundScore + dice0 + dice1;
            prevRoll0 = dice0;
            prevRoll1 = dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        } 
    }

    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
        // add CURRENT score to GLOBAL
        scores[activePlayer] += roundScore;

        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // check if player won the game
        if (scores[activePlayer] >= scoreToWin) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
    } else {
        // next player
        nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    scoreToWin = 100;

    document.querySelector('.score-to-win').textContent = "Score of " + scoreToWin + " wins the game.";

    document.querySelector('.dice-0').style.display = 'none';

    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

document.getElementById('form').addEventListener('submit', function() {
    event.preventDefault();
    scoreToWin = document.getElementById('setscore').value;
    console.log('score to win is: ' + scoreToWin);
    document.querySelector('.score-to-win').textContent = "Score of " + scoreToWin + " wins the game.";
});

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;