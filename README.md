# Hallow Nest

A Hollow Night inspired Clicker Game, match values to the randomly
https://poeboyo.github.io/hallownest-hoarder/

## How it's Made

- By using a random number generator and multiple buttons with different values on a win or loss value

```javascript
var butOne = Math.floor(1 + Math.random() * 11);
var butTwo = Math.floor(1 + Math.random() * 11);
var butThree = Math.floor(1 + Math.random() * 11);
var butFour = Math.floor(1 + Math.random() * 11);
```

-If the Player Score matches the Computer Score, it will update the win score, if it exceeds the Computer Generated score, it'll updates the loss counter

```javascript
function reset() {
  butOne = Math.floor(1 + Math.random() * 11);
  butTwo = Math.floor(1 + Math.random() * 11);
  butThree = Math.floor(1 + Math.random() * 11);
  butFour = Math.floor(1 + Math.random() * 11);
  playerScore = 0;
}

function win() {
  wins++;
  $("#winCount").text("Wins: " + wins);
  reset();
}

function lose() {
  losses++;
  $("#lossCount").text("Losses: " + losses);
  reset();
}
```

- And this is the full functionality of the app

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## Difficulties and Learning

-Using JavaScript within 2 weeks of learning it was difficult but only to understand basic context and syntax
