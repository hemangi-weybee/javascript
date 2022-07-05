'use strict';

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = function (julia, kate) {
    let juliaCorrected = julia.slice();
    juliaCorrected.splice(0, 1);
    juliaCorrected.splice(-2);

    console.log(juliaCorrected);

    const dogs = juliaCorrected.concat(kate);
    dogs.forEach(function (age, i) {
        const what = age < 3 ? `still a puppy 🐶` : `an adult, and is ${age} years old`
        console.log(`Dog number ${i + 1} is ${what}`);
    });
}

checkDogs(julia, kate);

const a1 = [5, 2, 4, 1, 15, 8, 3];
const a2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
    const humanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAge.filter(age => age >= 18);
    const avg = adults.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

    return Number(avg.toFixed(2));
}

console.log(calcAverageHumanAge(a1), calcAverageHumanAge(a2));

const avgAge = function (ages) {
    const avg = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter(age => (age >= 18))
        .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

    return Number(avg.toFixed(2));
}

console.log(avgAge(a1), avgAge(a2));

console.clear();

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

////1.
dogs.forEach(d => d.recommendedFood = Math.trunc(d.weight ** 0.75 * 28));
console.log(dogs);


////2.
const sarahDogs = dogs.find(u => u.owners.includes('Sarah'));
console.log(sarahDogs);

console.log(sarahDogs.curFood > sarahDogs.recommendedFood ? 'eating too much' : 'its good to eat limited');


////3.
const ownersEatTooLittle = dogs.filter(d => d.curFood < d.recommendedFood).flatMap(d => d.owners);
console.log(ownersEatTooLittle);

const ownersEatTooMuch = dogs.filter(d => d.curFood > d.recommendedFood).flatMap(d => d.owners);
console.log(ownersEatTooMuch);


////4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

////5.
console.log(dogs.some(d => d.curFood === d.recommendedFood));

////6.
const ok = d => d.curFood > (d.recommendedFood * 0.90) && d.curFood < (d.recommendedFood * 1.10);
console.log(dogs.some(ok));

////7.
const okEating = dogs.filter(ok);
console.log(okEating);

////8.
console.log(dogs);
const dogsCopy = dogs.slice().sort((cur, next) => cur.recommendedFood - next.recommendedFood);
console.log(dogsCopy);