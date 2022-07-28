import readlineSync from 'readline-sync';

import { greeting, getRandom, userName } from '../src/index.js';

const symbol = ['+', '-', '*'];
let question = '';
let randomIndex = 0;
let randomFirstInt = 0;
let randomSecondInt = 0;

const getRandomExpression = () => {
    randomFirstInt = getRandom(100);
    randomSecondInt = getRandom(100);
    randomIndex = getRandom(3);
    return `${randomFirstInt} ${symbol[randomIndex]} ${randomSecondInt}`;
};

const calcResult = () => {
    let result = 0;
    question = `Question: ${getRandomExpression()}`;

    if (symbol[randomIndex] === '+') {
        result = randomFirstInt + randomSecondInt;
    }
    if (symbol[randomIndex] === '-') {
        result = randomFirstInt - randomSecondInt;
    }
    if (symbol[randomIndex] === '*') {
        result = randomFirstInt * randomSecondInt;
    }

    return result;
};

const termsBrainCalc = () => console.log('What is the result of the expression?');

const getBrainCalcGames = (acc) => {
    const trueAnswer = calcResult();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (String(trueAnswer) !== String(userAnswer)) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
        return console.log(`Let's try again, ${userName}!`);
    }

    if (acc < 2) {
        console.log('Correct!');
        return getBrainCalcGames(acc + 1);
    }

    console.log('Correct!');

    return console.log(`Congratulations, ${userName}!`);
};

const startBrainCalcGames = () => {
    greeting();
    termsBrainCalc();
    return getBrainCalcGames(0);
};

export default startBrainCalcGames;
