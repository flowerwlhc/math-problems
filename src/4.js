
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

const fileName = 'math-problems';
const filePath = path.join(__dirname, `${fileName}.json`);

const mathProblems = JSON.parse(fs.readFileSync(filePath));

function getRandomMathProblem() {
  const problemIndex = Math.floor(Math.random() * mathProblems.length);
  return mathProblems[problemIndex];
}

const startTime = performance.now();

while (performance.now() - startTime < 1000) {
  getRandomMathProblem();
}
