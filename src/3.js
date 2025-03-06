const mathProblems = require('math-problems');

function getRandomMathProblem() {
  const problem = mathProblems.random();
  return `What is ${problem.left} x ${problem.right}?`;
}

console.log(getRandomMathProblem());
