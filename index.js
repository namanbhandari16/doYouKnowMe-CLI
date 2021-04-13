const chalk = require('chalk');
const readlineSync = require('readline-sync')

var score = 0;
const questions = [
  {
    q: "Which is my favorite color?",
    options: "a: Red, b: Pink, c: Blue",
    a: "c",
  },
  {
    q: "What is my primary tech stack",
    options: "a: LAMP, b: MERN, c: MEAN",
    a: "b",
  },
  {
    q: "Which is my degree name?",
    options: "a: BTech, b: BCom, c: Other",
    a: "a",
  },
  {
    q: "Which is my favorite cricket player?",
    options: "a: Rahane, b: Dhoni, c: Kohli",
    a: "b",
  },
  {
    q: "What is my branch",
    options: "a: CSE, b: IT, c: CCE",
    a: "a",
  },
];

const validOptions = ['a', 'b', 'c'];

function ask(question) {
  console.log(chalk.yellow(question.q));
  const answer = readlineSync.question(chalk.cyan(question.options));
  if (validOptions.includes(answer)) {
    if (answer == question.a) {
      console.log(chalk.green("That is correct!!"));
      console.log(chalk.cyan("Your score is "), chalk.bold.yellow(++score));
    } else {
      console.log(chalk.redBright("Wrong answer :("));
    }
  } else {
    console.log(chalk.red("Please select one of the valid options", validOptions));
    ask(question);
  }
  console.log("\n")
}

console.log(chalk.green("Welcome to Do you know Naman!!"));

var userName = readlineSync.question("What's Your name? ");

console.log("Hi " + userName + ", Let's get started\n");
console.log("We will ask you some questions about Naman.") 

for (var i = 0; i < questions.length; i++) {
  ask(questions[i]);
}

console.log("------------------\n\n------------------")
console.log("Your score is ", chalk.bold.green(score))