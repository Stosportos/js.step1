'use strict';

function getNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log("Число должно быть целым и находиться в диапазоне [0 , 999].");
        return{};
    }
    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundreds: Math.floor(num / 100),
    }
}

console.log(getNumber(666));