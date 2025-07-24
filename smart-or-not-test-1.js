// QUIZ GAME – CUSTOMIZABLE QUESTIONS
console.log(“ Smart Or Not Test");

// Start score at 0
let score = 0;

// Question 1
let q1 = prompt("What is 11 x 11?");
if (parseInt(q1) === 121) {
  console.log("Q1: Correct!");
  score++;
} else {
  console.log("Q1: Nope! The correct answer is 121.");
}

// Question 2
let q2 = prompt("How many months have 28 days?");
if (parseInt(q2) === 12) {
  console.log("Q2: Correct!");
  score++;
} else {
  console.log("Q2: Actually, all 12 months have at least 28 days!");
}

// Question 3
let q3 = prompt("Jimmy is 10 years old. His brother Kyle is half his age. How old is Kyle when Jimmy is 100?");
if (parseInt(q3) === 95) {
  console.log(" Q3: Correct!");
  score++;
} else {
  console.log(" Q3: Kyle is 5 years younger, so he'd be 95.");
}

// Final score
console.log(" You got " + score + " out of 3 correct!");

// Optional feedback
if (score === 3) {
  console.log("Genius level! Perfect score!");
} else if (score === 2) {
  console.log("Nice job, almost there!");
} else {
  console.log("Keep practicing, you're learning!");
}
