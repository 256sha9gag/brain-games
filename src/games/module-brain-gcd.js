import { getRandom, getBrainGames } from '../index.js';

const termsBrainGcd = 'Find the greatest common divisor of given numbers.';

const getBrainGcdParam = (firstNum, secondNum) => {
    let divider = 0;
    const question = `${firstNum} ${secondNum}`;

    if (firstNum >= secondNum) {
        divider = secondNum;
    } else {
        divider = firstNum;
    }

    for (divider; divider > 0; divider -= 1) {
        if ((firstNum % divider === 0) && (secondNum % divider === 0)) {
            break;
        }
    }

    return [question, divider];
};

const sendBrainGcdParam = () => {
    const firstNum = getRandom(100);
    const secondNum = getRandom(100);

    return getBrainGcdParam(firstNum, secondNum);
};

const startBrainGcd = () => getBrainGames(sendBrainGcdParam, termsBrainGcd);

export default startBrainGcd;
