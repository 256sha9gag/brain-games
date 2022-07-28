import readlineSync from 'readline-sync';

import { greeting, getRandom, userName } from '../src/index.js';

const termsBrainEven = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getIsEven = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    }

    return 'no';
};

const getBrainEvenGames = (acc) => {
    const randomFirstInt = getRandom(100);
    const trueAnswer = getIsEven(randomFirstInt);
    console.log(`Question: ${randomFirstInt}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (trueAnswer !== userAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
        return console.log(`Let's try again, ${userName}!`);
    }

    if (acc < 2) {
        console.log('Correct!');
        return getBrainEvenGames(acc + 1);
    }

    console.log('Correct!');

    return console.log(`Congratulations, ${userName}!`);
};

const startBrainEvenGames = () => {
    greeting();
    termsBrainEven();
    return getBrainEvenGames(0);
};

export default startBrainEvenGames;
