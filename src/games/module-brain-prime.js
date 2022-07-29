import { getRandom, getBrainGames } from '../index.js';

const termsBrainPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getBrainParamPrime = (randomInt) => {
    let index = randomInt - 1;
    let trueAnswer = 'yes';

    for (index; index >= 2; index -= 1) {
        if (randomInt % index === 0) {
            trueAnswer = 'no';
        }
    }

    return [randomInt, trueAnswer];
};

const sendBrainParamPrime = () => {
    const randomInt = getRandom(30) + 2;

    return getBrainParamPrime(randomInt);
};

const startBrainPrime = () => getBrainGames(sendBrainParamPrime, termsBrainPrime);

export default startBrainPrime;
