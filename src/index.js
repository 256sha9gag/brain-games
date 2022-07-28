import readlineSync from 'readline-sync';

let userName = '';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name?: ');
    return console.log(`Hello, ${userName}!`);
};

const getRandom = (max) => Math.floor(Math.random() * max);

export { greeting, getRandom, userName };
