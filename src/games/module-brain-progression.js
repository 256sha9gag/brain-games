import { getRandom, getBrainGames } from '../index.js';

const termsBrainProgression = 'What number is missing in the progression?';

const getBrainParamProgression = (randomFirstInt, randomStep, randomElem) => {
  const array = [];
  let elemOfQuestion = randomFirstInt;

  for (let i = 0; i < 10; i += 1) {
    array.push(elemOfQuestion);
    elemOfQuestion += randomStep;
  }
  const trueAnswer = array[randomElem + 1];
  const twoDot = '..';
  array[randomElem + 1] = twoDot;
  const question = array.join(' ');

  return [question, trueAnswer];
};

const sendBrainParamProgression = () => {
  const randomFirstInt = getRandom(100);
  const randomStep = getRandom(10);
  const randomElem = getRandom(10);

  return getBrainParamProgression(randomFirstInt, randomStep, randomElem);
};

const startBrainProgression = () => getBrainGames(sendBrainParamProgression, termsBrainProgression);

export default startBrainProgression;
