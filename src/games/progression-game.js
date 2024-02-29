import { getRandomNumber, runGame } from '../index.js';

const generateProgression = () => {
  const progressionLength = getRandomNumber(5, 15);
  const firstElement = getRandomNumber();
  const multiplier = getRandomNumber(2);
  
  return Array(progressionLength)
    .fill(0)
    .map((_item, i) => firstElement * Math.pow(multiplier, i));
};

const generateQuestionAndAnswer = () => {
  const progression = generateProgression();

  const positionToGuess = getRandomNumber(0, progression.length - 1);
  const correctAnswer = `${progression[positionToGuess]}`;
  
  progression[positionToGuess] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const progressionGame = (fromMenu = false, userName = '') => {
  const rulesString = 'What number is missing in the progression?';
  runGame(generateQuestionAndAnswer, rulesString, fromMenu, userName);
};

export default progressionGame;