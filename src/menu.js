import readlineSync from 'readline-sync';
import { greetUserWithNameReturn } from './index.js';
import scmGame from './games/scm-game.js';
import progressionGame from './games/progression-game.js';

const showMenu = () => {
  const userName = greetUserWithNameReturn();

  console.log('Choose the game!')
  const games = ['SCM', 'Progression'];
  const choise = readlineSync.keyInSelect(games, 'Your choise: ');

  switch (choise) {
    case 0:
      scmGame(true, userName);
      break;
    case 1:
      progressionGame(true, userName);
      break;
    default:
      console.log('See you next time!')
  }
};

export default showMenu;