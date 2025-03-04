// Generate a random math problem using Node.js
const getRandomProblem = () => {
  // Randomly select a math operator (+, -, \*, /)
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  // Randomly generate two numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  
  // Generate the math problem using the operator and numbers
  let problem = `${num1} ${operator} ${num2}`;
  
  // Return the problem
  return problem;
};
