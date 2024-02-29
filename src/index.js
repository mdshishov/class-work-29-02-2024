import readlineSync from 'readline-sync';

const getRandomNumber = (start = 1, end = 10) => {
  const num = Math.floor(Math.random() * (end + 1 - start)) + start;
  return num;
};

const greetUserWithNameReturn = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const runGame = (generateQuestionAndAnswerFunction, rulesString, fromMenu = false, name = '', rounds = 3) => {
  let userName = name;
  if (!fromMenu) {
    userName = greetUserWithNameReturn();
  }

  console.log(rulesString);

  let correctCount = 0;
  while (correctCount < rounds) {
    const [questionString, correctAnswer] = generateQuestionAndAnswerFunction();

    console.log(`Question: ${questionString}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      correctCount = rounds + 1;
    }
  }

  if (correctCount === rounds) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export { getRandomNumber, runGame, greetUserWithNameReturn };
