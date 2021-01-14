'use strict';

// console.log(document.querySelector('.message ').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 15) + 1;
let score = 15;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    //  document.querySelector('.message ').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Number!';
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '🤔 Too HIGH!' : '😓 Too LOW!';
      score--;
      displayMessage(guess > secretNumber ? '🤔 Too HIGH!' : '😓 Too LOW!');
      document.querySelector('.score').textContent = score;
      // when losses game with too high
    } else {
      // document.querySelector('.message').textContent = '💀 GAME OVER! 💀';
      displayMessage('💀 GAME OVER! 💀');
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#fe0000';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.message').style.fontSize = '35px';
    }
  }
  //when is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🤔 Too HIGH!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       // when losses game with too high
  //     } else {
  //       document.querySelector('.message').textContent = '💀 GAME OVER! 💀';
  //       document.querySelector('.score').textContent = 0;

  //       document.querySelector('body').style.backgroundColor = '#fe0000';
  //       document.querySelector('.number').style.width = '30rem';
  //       document.querySelector('.message').style.fontSize = '35px';
  //     }
  //     // when is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '😓 Too LOW!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       // when losses game with too low
  //     } else {
  //       document.querySelector('.message').textContent = '💀 GAME OVER! 💀';
  //       document.querySelector('.score').textContent = 0;

  //       document.querySelector('body').style.backgroundColor = '#fe0000';
  //       document.querySelector('.number').style.width = '30rem';
  //       document.querySelector('.message').style.fontSize = '35px';
  //     }
  //   }
});

// just reload the page but lose highscore...
// document
//   .querySelector('.again')
//   .addEventListener('click', function refreshPage() {
//     window.location.reload();
//   });

document.querySelector('.again').addEventListener('click', function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 15) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.message').style.fontSize = '20px';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
