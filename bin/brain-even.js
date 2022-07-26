#!/usr/bin/env node

import readlineSync from 'readline-sync';

let randomInt = 0;
let userName = '';
let userAnswer = '';
let trueAnswer = '';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getIsEven = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    }
    return 'no';
};

const getBrainEvenResult = (acc) => {
    randomInt = getRandomInt(100);
    trueAnswer = getIsEven(randomInt);
    console.log(`Question: ${randomInt}`);
    userAnswer = readlineSync.question('Your answer: ');

    if (trueAnswer !== userAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
        return console.log(`Let's try again, ${userName}!`);
    }

    if (acc < 2) {
        console.log('Correct!');
        return getBrainEvenResult(acc + 1);
    }

    console.log('Correct!');
    return console.log(`Congratulations, ${userName}!`);
};

console.log('Welcome to the Brain Games!');
userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
getBrainEvenResult(0);
