import { getRandomNumber, runGame } from '../index.js';

const generateQuestionAndAnswer = () => {
  const nums = Array(3).fill(0).map(() => getRandomNumber());

  let scm = Math.max(...nums);
  while (!(scm % nums[0] === 0 && scm % nums[1] === 0 && scm % nums[2] === 0)) {
    scm += 1;
  }

  const question = nums.join(' ');
  const correctAnswer = `${scm}`;

  return [question, correctAnswer];
};

const scmGame = (fromMenu = false, userName = '') => {
  const rulesString = 'Find the smallest common multiple of given numbers.';
  runGame(generateQuestionAndAnswer, rulesString, fromMenu, userName);
};

export default scmGame;
