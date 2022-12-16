import { getRandom, getBrainGames } from '../index.js';

const termsBrainCalc = 'What is the result of the expression?';

const getBrainParamCalc = (randomFirstInt, randomSecondInt, randomSymbol) => {
  let trueAnswer = 0;
  const question = `${randomFirstInt} ${randomSymbol} ${randomSecondInt}`;

  if (randomSymbol === '+') {
    trueAnswer = randomFirstInt + randomSecondInt;
  }
  if (randomSymbol === '-') {
    trueAnswer = randomFirstInt - randomSecondInt;
  }
  if (randomSymbol === '*') {
    trueAnswer = randomFirstInt * randomSecondInt;
  }

  return [question, trueAnswer];
};

const sendBrainParamCalc = () => {
  const symbol = ['+', '-', '*'];
  const randomFirstInt = getRandom(100);
  const randomSecondInt = getRandom(100);
  const randomIndex = getRandom(3);
  const randomSymbol = symbol[randomIndex];

  return getBrainParamCalc(randomFirstInt, randomSecondInt, randomSymbol);
};

const startBrainCalc = () => getBrainGames(sendBrainParamCalc, termsBrainCalc);

export default startBrainCalc;
