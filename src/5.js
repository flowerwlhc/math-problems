const { getRandomInt } = require('crypto');

function generateMathProblem(level) {
  const minValue = Math.pow(10, level - 1);
  const maxValue = Math.pow(10, level);

  const operator = getRandomOperator();
  const leftOperand = getRandomInt(minValue, maxValue);
  const rightOperand = getRandomInt(minValue, maxValue);

  let problem;
  if (operator === '+') {
    problem = `${leftOperand} + ${rightOperand}`;
  } else if (operator === '-') {
    problem = `${leftOperand} - ${rightOperand}`;
  } else if (operator === '*') {
    problem = `${leftOperand} * ${rightOperand}`;
  } else if (operator === '/') {
    problem = `${leftOperand} / ${rightOperand}`;
  }

  return {
    level,
    operator,
    leftOperand,
    rightOperand,
    problem,
  };
}

function getRandomOperator() {
  const operators = ['+', '-', '*', '/'];
  return operators[getRandomInt(0, operators.length)];
}

module.exports = generateMathProblem;
