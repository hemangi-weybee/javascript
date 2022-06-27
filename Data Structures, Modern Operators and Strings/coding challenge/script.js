'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Coding Challenge #1

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {odds: {team1, x:draw,team2}} = game;
console.log(team1,draw,team2);

game.printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
};
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);


team1 < team2 && console.log(`Team 1 is more likely to win`);

team1 > team2 && console.log(`Team 2 is more likely to win`);

// Coding Challenge #2

console.clear();

for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i+1} : ${player}`);
}

let avg = 0;
const odd = Object.values(game.odds);
for (const x of odd) {
    avg += x;
}
avg /= odd.length;
console.log(avg.toFixed(2));

for (const [key, value] of Object.entries(game.odds)) {
    // console.log(key, value);
    const team = key === 'x' ? 'draw' : `victory ${game[key]}`
    console.log(`Odd of ${team} : ${value}`);
}

const scorers = {};

for (const x of game.scored) {
    scorers[x] ? scorers[x]++ : (scorers[x] = 1);
}

console.log(scorers);

// Coding Challenge #3

console.clear();

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

const events = new Set(gameEvents.values());
console.log(events);

console.log(gameEvents.delete(64));

const times =[...gameEvents.keys()].pop();
console.log(times);
console.log(`An event happened, on average, every ${times / gameEvents.size} minutes`);

for (const [time, event] of gameEvents) {
    console.log(`${time<45 ? ['[FIRST HALF]'] : ['[SECOND HALF]']} ${time} : ${event}`);    
}


// Coding Challenge #4

console.clear();

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    console.log(text);
    const rows = text.split('\n');

    for (const [i,n] of rows.entries()) {
        let [word1,word2] = n.toLowerCase().trim().split('_');
        word2 = word2.replace(word2[0], word2[0].toUpperCase());
        
        const newStr = [word1, word2].join('');
        console.log(newStr);
        document.querySelector('div').textContent += (newStr+"\n");
    }
});
