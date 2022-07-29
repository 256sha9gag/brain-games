import readlineSync from 'readline-sync';

const getBrainGames = (getParamGame, terms) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(terms);

  const getStepGame = (acc) => {
    const [question, trueAnswer] = getParamGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (String(trueAnswer) !== String(userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }

    if (acc < 2) {
      console.log('Correct!');
      return getStepGame(acc + 1);
    }

    console.log('Correct!');
    return console.log(`Congratulations, ${userName}!`);
  };
  return getStepGame(0);
};

const getRandom = (max) => Math.floor(Math.random() * max);

export { getRandom, getBrainGames };
