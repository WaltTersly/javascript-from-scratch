'use strict';
//challenge to implement destrusruring an d everything else

//creating game variable

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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};

//destructuring the original object to create new arrays
 const [players1, players2] = game.players;
 console.log(players1, players2);

 //using distructuring on team and players along with the rest operators
 const [gk, ...fieldplayers] = players1;
 console.log(gk, fieldplayers);

 //creating a variable all players using a spread operator
 const allPlayers = [...players1, ...players2];
 console.log(allPlayers);

 const playersFinal = [...players1, 'Thiogo', 'countino', 'peristri'];
 console.log(playersFinal);

 //creating variable for each odd

 const {odds: {team1, x:draw, team2}} = game;
 console.log(team1, draw, team2);

 //creating print goals function and implementing the rest operator
 const printGoals = function (...players) {
     console.log(`${players.length}, goals were scored`);

 };

printGoals('kimichi', 'davies', 'muller', 'lewadoski');

//test team which can win without using a logical operator
//we use the shortcircuiting
team1 < team2 && console.log('team 1 is likely to win');

team1 > team2 && console.log('team 2 is likely to win');