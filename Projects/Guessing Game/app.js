let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum && guess !== "q") {
  if (guess === "q") break;
  attempts++;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = parseInt(prompt("Too high! Enter a new guess!"));
  } else if (guess < targetNum) {
    guess = parseInt(prompt("Too low! Enter a new guess!"));
  } else {
    guess = prompt("Invalid guess! Enter a valid number or q to quit!");
  }
}

if (guess === "q") {
  console.log("You quit!");
} else {
  console.log(`You got it! It took you ${attempts} guesses!`);
}
