import { getRandom, getBrainGames } from '../index.js';

const termsBrainEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const getIsEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const getBrainParamEven = (randomFirstInt) => {
  const question = randomFirstInt;
  const trueAnswer = getIsEven(randomFirstInt);

  return [question, trueAnswer];
};

const sendBrainParamEven = () => {
  const randomFirstInt = getRandom(100);

  return getBrainParamEven(randomFirstInt);
};

const startBrainEven = () => getBrainGames(sendBrainParamEven, termsBrainEven);

export default startBrainEven;
