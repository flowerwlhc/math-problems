// Importing required libraries
const express = require('express');
const router = express.Router();

// Defining a GET route to fetch math problems
router.get('/math-problems', (req, res) => {
  // Generating random math problems using JavaScript's Math.random() function
  const problem1 = `What is the value of x in the equation: 2x + 5 = 11?`;
  const answer1 = `The answer to this question is x = 4.`;

  const problem2 = `What is the value of y in the equation: xy - 3 = 20?`;
  const answer2 = `The answer to this question is y = 5.`;

  const problems = [problem1, problem2];
  const answers = [answer1, answer2];

  // Sending the generated math problems and answers as a response
  res.json({ problems, answers });
});

// Exporting the router to be used in the main application file
module.exports = router;
